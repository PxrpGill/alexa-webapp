import type { FieldValues, Path, RegisterOptions } from "react-hook-form";

export const FULL_NAME_VALIDATION = <
	TFieldValues extends FieldValues,
	TName extends Path<TFieldValues>,
>() =>
	({
		required: "Введите имя",
		pattern: {
			value: /^[^\d]+$/,
			message: "Имя не должно содержать цифры",
		},
		validate: (value: string) => {
			if (value !== value.trim())
				return "Имя не должно начинаться или заканчиваться пробелом";
			if (/\s{2,}/.test(value))
				return "Имя не должно содержать несколько пробелов подряд";
			return true;
		},
	}) satisfies RegisterOptions<TFieldValues, TName>;

export const PHONE_VALIDATION = <
	TFieldValues extends FieldValues,
	TName extends Path<TFieldValues>,
>() =>
	({
		required: "Введите номер телефона",
		pattern: {
			value: /^(\+7|8)[\s-]?\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
			message: "Введите корректный номер телефона в формате +7 (XXX) XXX-XX-XX",
		},
	}) satisfies RegisterOptions<TFieldValues, TName>;

export const EMAIL_VALIDATION = <
	TFieldValues extends FieldValues,
	TName extends Path<TFieldValues>,
>() =>
	({
		required: "Введите email",
		pattern: {
			value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
			message: "Введите корректный адрес электронной почты",
		},
	}) satisfies RegisterOptions<TFieldValues, TName>;

export const RESUME_MAX_SIZE_MB = 5;
export const RESUME_MAX_SIZE_BYTES = RESUME_MAX_SIZE_MB * 1024 * 1024;
export const RESUME_ACCEPTED_EXTENSIONS = [".pdf", ".doc", ".docx"];
export const RESUME_ACCEPT = RESUME_ACCEPTED_EXTENSIONS.join(",");

export const RESUME_VALIDATION = <
	TFieldValues extends FieldValues,
	TName extends Path<TFieldValues>,
>() =>
	({
		required: "Загрузите файл резюме",
		validate: (value: File | undefined) => {
			if (!value) return "Загрузите файл резюме";

			const fileName = value.name.toLowerCase();
			const isAcceptedExtension = RESUME_ACCEPTED_EXTENSIONS.some(
				(extension) => fileName.endsWith(extension),
			);

			if (!isAcceptedExtension)
				return "Допустимые форматы файла: PDF, DOC, DOCX";
			if (value.size > RESUME_MAX_SIZE_BYTES)
				return `Файл слишком большой. Максимальный размер — ${RESUME_MAX_SIZE_MB} МБ`;

			return true;
		},
	}) satisfies RegisterOptions<TFieldValues, TName>;
