/** biome-ignore-all lint/performance/noImgElement: <explanation> */

import type { PromotionsSuccessFormProps } from "../../types/promotions-modal.types";

import css from "./index.module.css";

export default function SuccessForm({
	isOpen,
	className,
}: PromotionsSuccessFormProps) {
	return (
		<div className={`${css.root} ${isOpen && css.open} ${className}`}>
			<img
				src="/system/alexik.png"
				alt="Алексик — талисман клиники"
				className={css.logo}
				width={296}
				height={386}
				loading="lazy"
				decoding="async"
			/>
			<h5 className={css.title}>Заявка успешно отправлена!</h5>
			<p className={css.description}>
				В&nbsp;скором времени наши администраторы свяжутся с&nbsp;вами
			</p>
		</div>
	);
}
