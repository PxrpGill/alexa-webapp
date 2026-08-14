"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
import ButtonIconSVG from "@/public/icons/button-teeth.svg";
import { useLayoutContext } from "@/shared/config/layout-context";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import {
	FULL_NAME_VALIDATION,
	PHONE_VALIDATION,
} from "@/shared/config/validation-rules";
import type { PostRequestType } from "@/shared/types/post-requests.types";
import Button from "@/shared/ui/button";
import Checkbox from "@/shared/ui/checkbox";
import Input from "@/shared/ui/input";
import { usePostAppointmentScheduling } from "../../hooks/use-post-appointment-scheduling";
import type { AppointmentFormProps } from "../../types/appointment-scheduling.types";
import css from "./index.module.css";

export default function AppointmentForm({
	toggleSucces,
}: AppointmentFormProps) {
	const pathname = usePathname();
	const { currentBranch } = useLayoutContext();

	const {
		register,
		formState: { isValid, errors },
		handleSubmit,
	} = useForm<PostRequestType>({
		mode: "onChange",
		defaultValues: { page_url: pathname, branch_slug: currentBranch },
	});
	const { mutate, isPending } = usePostAppointmentScheduling({ toggleSucces });

	return (
		<form
			className={`${css.root}`}
			onSubmit={handleSubmit((data) => mutate(data))}
		>
			<div className={css.inputGroup}>
				<Input
					label="Имя"
					placeholder="Введите ваше имя"
					type="text"
					error={errors.patient_name?.message}
					{...register("patient_name", FULL_NAME_VALIDATION())}
				/>
				<Input
					label="Номер телефона"
					placeholder="Введите номер телафона"
					type="tel"
					{...register("patient_phone", PHONE_VALIDATION())}
				/>
			</div>
			<div className={css.checkboxGroup}>
				<Checkbox
					label={
						<p>
							<Link href={SITE_NAVIGATION.letter} target="_blank">
								Согласие на&nbsp;получение рассылки
								<br /> рекламно-информационных материалов
							</Link>
						</p>
					}
					{...register("is_ad_agreement")}
				/>
				<Checkbox
					label={
						<p>
							Я&nbsp;согласен с&nbsp;
							<Link href={SITE_NAVIGATION.privacyPolicy} target="_blank">
								политикой конфиденциальности
							</Link>
							<br />
							и&nbsp;
							<Link href={SITE_NAVIGATION.userAgreement} target="_blank">
								обработкой персональных данных
							</Link>
						</p>
					}
					{...register("is_privacy_agreement", { required: true })}
				/>
			</div>
			<Button
				className={css.button}
				type="submit"
				disabled={!isValid}
				isLoading={isPending}
				rightIcon={<ButtonIconSVG className={css.icon} />}
			>
				Записаться на прием
			</Button>
		</form>
	);
}
