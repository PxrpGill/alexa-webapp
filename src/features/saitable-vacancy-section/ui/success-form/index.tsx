/** biome-ignore-all lint/performance/noImgElement: <explanation> */

import type { SuccessFormProps } from "../../types/saitable-vacancy.types";
import css from "./index.module.css";

export default function SuccessForm({ className, isOpen }: SuccessFormProps) {
	return (
		<article className={`${css.root} ${className} ${isOpen && css.open}`}>
			<img
				src="/system/alexik.png"
				alt="Алексик — талисман клиники"
				className={css.logo}
				width={2339}
				height={3048}
				loading="lazy"
				decoding="async"
			/>
			<h5 className={css.title}>Заявка успешно отправлена!</h5>
			<p className={css.description}>
				В&nbsp;скором времени наши администраторы свяжутся с&nbsp;вами
			</p>
		</article>
	);
}
