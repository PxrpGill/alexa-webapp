"use client";

import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";
import ButtonIconSVG from "@/public/icons/button-teeth.svg";
import type { RequestToSaitableBodyData } from "@/shared/api/post-saitable-form";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import {
	FULL_NAME_VALIDATION,
	PHONE_VALIDATION,
} from "@/shared/config/validation-rules";
import Button from "@/shared/ui/button";
import Checkbox from "@/shared/ui/checkbox";
import FileInput from "@/shared/ui/file-input";
import Input from "@/shared/ui/input";
import { usePostAppointmentScheduling } from "../../hooks/use-post-appointment-scheduling";
import type { AppointmentFormProps } from "../../types/saitable-vacancy.types";
import css from "./index.module.css";

export default function SaitableVacancyForm({
	toggleSuccess,
}: AppointmentFormProps) {
	const [files, setFiles] = useState<File[]>();
	const {
		register,
		formState: { isValid, errors },
		handleSubmit,
	} = useForm<RequestToSaitableBodyData>({
		mode: "onChange",
	});
	const { mutate, isPending } = usePostAppointmentScheduling({ toggleSuccess });

	const handleFileInputChange = (files: File[]) => {};

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
					error={errors.name?.message}
					{...register("name", FULL_NAME_VALIDATION())}
				/>
				<Input
					label="Номер телефона"
					placeholder="Введите номер телафона"
					type="tel"
					{...register("phone", PHONE_VALIDATION())}
				/>
				<FileInput
					files={files ?? []}
					label="Резюме"
					placeholder="Загрузить резюме"
					onFilesChange={handleFileInputChange}
				/>
			</div>
			<div className={css.checkboxGroup}>
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
					{...register("privacy_policy_accepted", { required: true })}
				/>
			</div>
			<Button
				className={css.button}
				type="submit"
				disabled={!isValid}
				isLoading={isPending}
				rightIcon={<ButtonIconSVG className={css.icon} />}
			>
				Отправить заявку
			</Button>
		</form>
	);
}
