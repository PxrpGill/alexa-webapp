/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import Link from "next/link";
import DownloadIconSVG from "@/public/icons/download.svg";
import type { DocumentCardProps } from "@/shared/types/document.types";
import css from "./index.module.css";

export default function DocumentCard({
	target = "_blank",
	title,
	href,
	className,
}: DocumentCardProps) {
	if (!href) return null;

	return (
		<article className={`${css.root} ${className}`}>
			{title && (
				<h5 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}
			<DownloadIconSVG className={css.icon} />
			<Link
				href={href}
				target={target}
				className={css.link}
				aria-label="Скачать документ"
			/>
		</article>
	);
}
