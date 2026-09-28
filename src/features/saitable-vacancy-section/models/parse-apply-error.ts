import { isAxiosError } from "axios";
import type { RequestToSaitableBodyData } from "@/shared/api/post-saitable-form";

export type ApplyFieldErrors = Partial<
	Record<keyof RequestToSaitableBodyData, string>
>;

export type ParsedApplyError = {
	/** Ошибки валидации по полям формы (ответ 400). */
	fieldErrors: ApplyFieldErrors;
	/** Сообщение, которое не привязано к полю: 404, 429, сбой сети. */
	message?: string;
};

const APPLY_FIELDS = [
	"name",
	"phone",
	"privacy_policy_accepted",
	"resume",
] as const satisfies ReadonlyArray<keyof RequestToSaitableBodyData>;

const FALLBACK_MESSAGE = "Не удалось отправить отклик. Попробуйте позже";
const NOT_FOUND_MESSAGE =
	"Вакансия больше недоступна. Оставьте отклик без привязки к вакансии";
const TOO_MANY_REQUESTS_MESSAGE =
	"Вы отправили слишком много заявок. Попробуйте позже";

const readMessage = (data: unknown): string | undefined => {
	if (typeof data !== "object" || data === null) return;

	const { message } = data as { message?: unknown };

	return typeof message === "string" && message.length > 0
		? message
		: undefined;
};

const readFieldErrors = (data: unknown): ApplyFieldErrors => {
	if (typeof data !== "object" || data === null) return {};

	const payload = data as Record<string, unknown>;

	return APPLY_FIELDS.reduce<ApplyFieldErrors>((fieldErrors, field) => {
		const messages = payload[field];

		if (Array.isArray(messages) && typeof messages[0] === "string") {
			fieldErrors[field] = messages[0];
		}

		return fieldErrors;
	}, {});
};

export const parseApplyError = (error: unknown): ParsedApplyError => {
	if (!isAxiosError(error)) return { fieldErrors: {}, message: FALLBACK_MESSAGE };

	const { status, data } = error.response ?? {};

	if (status === 400) {
		const fieldErrors = readFieldErrors(data);

		return Object.keys(fieldErrors).length > 0
			? { fieldErrors }
			: { fieldErrors: {}, message: readMessage(data) ?? FALLBACK_MESSAGE };
	}

	if (status === 404) {
		return { fieldErrors: {}, message: NOT_FOUND_MESSAGE };
	}

	if (status === 429) {
		return {
			fieldErrors: {},
			message: readMessage(data) ?? TOO_MANY_REQUESTS_MESSAGE,
		};
	}

	return { fieldErrors: {}, message: readMessage(data) ?? FALLBACK_MESSAGE };
};
