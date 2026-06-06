/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import Link from "next/link";
import type { SiteLinkProps } from "@/shared/types/button.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import css from "./index.module.css";

export type FooterNavListProps = {
	title?: string;
	list?: SiteLinkProps[];
} & PropsWithClassName;

export default function FooterNavList({
	className,
	title,
	list,
}: FooterNavListProps) {
	if (!list?.length) return null;

	return (
		<div className={`${css.root} ${className}`}>
			{title && (
				<p dangerouslySetInnerHTML={{ __html: title }} className={css.title} />
			)}
			<ul className={css.list}>
				{list.map((item, index) => (
					<li key={index} className={css.paragraph}>
						<Link
							className={css.link}
							href={item.href}
							dangerouslySetInnerHTML={{ __html: item.title ?? "" }}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
