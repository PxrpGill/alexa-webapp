/** biome-ignore-all lint/performance/noImgElement: <explanation> */

import type { AppointmentSuccessFormProps } from "../../types/appointment-modal.types";

import css from "./index.module.css";

export default function SuccessForm({
	isOpen,
	className,
}: AppointmentSuccessFormProps) {
	return (
		<div className={`${css.root} ${isOpen && css.open} ${className}`}>
			<img src="/system/alexik.png" alt="Алексик" className={css.logo} />
			<h5 className={css.title}>Заявка успешно отправлена!</h5>
			<p className={css.description}>
				В&nbsp;скором времени наши администраторы свяжутся с&nbsp;вами
			</p>
		</div>
	);
}
