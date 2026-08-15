import Link from "next/link";
import { usePathname } from "next/navigation";
import { useForm } from "react-hook-form";
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
import { usePostConsultaiton } from "../../hooks/use-post-consultation";
import type { ConsultationFormProps } from "../../types/consultation-modal.props";
import css from "./index.module.css";

export default function ModalForm({ toggleSuccess }: ConsultationFormProps) {
	const { currentBranch } = useLayoutContext();
	const pathname = usePathname();

	const {
		register,
		formState: { isValid, errors },
		handleSubmit,
	} = useForm<PostRequestType>({
		mode: "onChange",
		defaultValues: { page_url: pathname, branch_slug: currentBranch },
	});
	const { mutate, isPending } = usePostConsultaiton({ toggleSuccess });

	return (
		<form className={css.root} onSubmit={handleSubmit((data) => mutate(data))}>
			<div className={css.inputs}>
				<Input
					placeholder="Ваше имя"
					className={css.input}
					type="text"
					error={errors.patient_name?.message}
					{...register("patient_name", FULL_NAME_VALIDATION())}
				/>
				<Input
					placeholder="Номер телефона"
					type="tel"
					className={css.input}
					error={errors.patient_phone?.message}
					{...register("patient_phone", PHONE_VALIDATION())}
				/>
			</div>
			<div className={css.documents}>
				<Checkbox
					{...register("is_ad_agreement")}
					label={
						<p className={css.label}>
							Я&nbsp;согласен с&nbsp;
							<Link href={SITE_NAVIGATION.privacyPolicy} target="_blank">
								политикой конфиденциальности
							</Link>{" "}
							и&nbsp;
							<Link href={SITE_NAVIGATION.userAgreement} target="_blank">
								обработкой персональных данных
							</Link>
						</p>
					}
				/>
				<Checkbox
					{...register("is_privacy_agreement", { required: true })}
					label={
						<p className={css.label}>
							<Link href={SITE_NAVIGATION.letter} target="_blank">
								Согласие на&nbsp;получение рассылки
								рекламно&#8209;информационных материалов
							</Link>
						</p>
					}
				/>
			</div>
			<Button
				className={css.button}
				disabled={!isValid}
				type="submit"
				isLoading={isPending}
			>
				Оставить заявку
			</Button>
		</form>
	);
}
