/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import type { PropsWithClassName } from "@/shared/types/props-with-classname";

import css from "./index.module.css";

export type InfoCardProps = {
	title?: string;
	content?: string;
} & PropsWithClassName;

export default function InfoCard({ title, content, className }: InfoCardProps) {
	if (!(title || content)) return;

	return (
		<article className={`${css.root} ${className}`}>
			{title && (
				<h5 dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}
			{content && (
				<div
					className={css.content}
					dangerouslySetInnerHTML={{ __html: content }}
				/>
			)}
		</article>
	);
}
