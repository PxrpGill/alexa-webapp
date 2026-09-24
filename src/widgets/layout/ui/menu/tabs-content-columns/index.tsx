/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLayoutContext } from "@/shared/config/layout-context";
import type { TabsContentColumnsProps } from "@/widgets/layout/types/tabs-content-columns.types";
import css from "./index.module.css";

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
					{column.title &&
						(column.titleHref ? (
							<h2 className={css.mainTitle}>
								<Link
									href={column.titleHref}
									className={css.titleHref}
									onClick={() => {
										toggleMenuOpen(false);
									}}
								>
									{column.title}
								</Link>
							</h2>
						) : (
							<h2
								dangerouslySetInnerHTML={{ __html: column.title }}
								className={css.mainTitle}
							/>
						))}
					<ul className={css.list}>
						{column.links?.map((link, index) => (
							<li className={css.paragraph} key={`${link.title}-${index}`}>
								<Link
									href={link.href}
									className={`${css.link} ${pathname === link.href && css.active}`}
									target={link.target}
									onClick={() => {
										toggleMenuOpen(false);
									}}
								>
									{link.IconSvg && <link.IconSvg className={css.logo} />}
									<div className={css.rightPart}>
										{link.title && (
											<p
												dangerouslySetInnerHTML={{
													__html: link.title,
												}}
												className={css.title}
											/>
										)}
										{link.description && (
											<p
												className={css.description}
												dangerouslySetInnerHTML={{
													__html: link.description,
												}}
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
