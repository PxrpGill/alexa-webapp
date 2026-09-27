"use client";

import Link from "next/link";
import { Controller, useForm } from "react-hook-form";
import ButtonIconSVG from "@/public/icons/button-teeth.svg";
import type { RequestToSaitableBodyData } from "@/shared/api/post-saitable-form";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import {
	FULL_NAME_VALIDATION,
	PHONE_VALIDATION,
	RESUME_ACCEPT,
	RESUME_VALIDATION,
} from "@/shared/config/validation-rules";
import Button from "@/shared/ui/button";
import Checkbox from "@/shared/ui/checkbox";
import FileInput from "@/shared/ui/file-input";
import Input from "@/shared/ui/input";
import { usePostVacancyApply } from "../../hooks/use-post-vacancy-apply";
import type { SaitableVacancyFormProps } from "../../types/saitable-vacancy.types";
import css from "./index.module.css";

export default function SaitableVacancyForm({
	toggleSuccess,
	vacancySlug,
}: SaitableVacancyFormProps) {
	const {
		register,
		control,
		reset,
		setError,
		formState: { isValid, errors },
		handleSubmit,
	} = useForm<RequestToSaitableBodyData>({
		mode: "onChange",
	});

	const { mutate, isPending, generalError } = usePostVacancyApply({
		vacancySlug,
		toggleSuccess: () => {
			reset();
			toggleSuccess();
		},
		setFieldError: (field, message) => setError(field, { message }),
	});

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
					error={errors.phone?.message}
					{...register("phone", PHONE_VALIDATION())}
				/>
				<Controller
					control={control}
					name="resume"
					rules={RESUME_VALIDATION()}
					render={({ field: { value, onChange }, fieldState: { error } }) => (
						<FileInput
							files={value ? [value] : []}
							label="Резюме"
							placeholder="Загрузить резюме"
							accept={RESUME_ACCEPT}
							error={error?.message}
							onFilesChange={(files) => onChange(files.at(0))}
						/>
					)}
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
					error={errors.privacy_policy_accepted?.message}
					{...register("privacy_policy_accepted", { required: true })}
				/>
			</div>
			{generalError && <p className={css.generalError}>{generalError}</p>}
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
