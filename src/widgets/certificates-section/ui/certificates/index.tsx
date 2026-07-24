/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import type { PictureFormatType } from "@/shared/ui/picture";
import Picture from "@/shared/ui/picture";
import css from "./index.module.css";

export default function Certificates({
	certificates,
	className,
}: {
	certificates?: PictureFormatType[];
} & PropsWithClassName) {
	if (!certificates?.length) return null;

	return (
		<div className={`${css.root} ${className}`}>
			{certificates.map((certificate, index) => (
				<Picture
					poster={certificate}
					key={index}
					className={`${css.certificate} ${css.certificate}-${index}`}
				/>
			))}
			<div className={css.shadow}/>
		</div>
	);
}
