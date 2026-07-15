/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { title } from "process";
import { useLayoutContext } from "@/shared/config/layout-context";
import type { HeaderMenuLinksType } from "@/shared/types/header-menu-links.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import css from "./index.module.css";

export type ContentColumnProps = {
	title?: string;
	links?: HeaderMenuLinksType;
};

export type TabsContentColumnsProps = {
	columns?: ContentColumnProps[];
} & PropsWithClassName;

export default function TabsContentColumns({
	columns,
	className,
}: TabsContentColumnsProps) {
	const { toggleMenuOpen } = useLayoutContext();
	const pathname = usePathname();

	if (!columns?.length) return null;

	return (
		<div className={`${css.root} ${className}`}>
			{columns.map((column, index) => (
				<div className={css.column} key={index}>
					{column.title && (
						<h2
							dangerouslySetInnerHTML={{ __html: column.title }}
							className={css.mainTitle}
						/>
					)}
					<ul className={css.list}>
						{column.links?.map((link, index) => (
							<li className={css.paragraph} key={`${title}-${index}`}>
								<Link
									href={link.href}
									className={`${css.link} ${pathname === link.href && css.active}`}
									target={link.target}
									onClick={() => {
										toggleMenuOpen(false);
									}}
								>
									<link.IconSvg className={css.logo} />
									<div className={css.rightPart}>
										{link.title && (
											<p
												dangerouslySetInnerHTML={{ __html: link.title }}
												className={css.title}
											/>
										)}
										{link.description && (
											<p
												className={css.description}
												dangerouslySetInnerHTML={{ __html: link.description }}
											/>
										)}
									</div>
								</Link>
							</li>
						))}
					</ul>
				</div>
			))}
		</div>
	);
}
