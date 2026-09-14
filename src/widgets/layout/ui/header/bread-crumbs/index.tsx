/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLayoutContext } from "@/shared/config/layout-context";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import { BREAD_CRUMBS_SEGMENTS } from "@/widgets/layout/models/bread-crumbs.constants";
import css from "./index.module.css";

type BreadCrumbsProps = {} & PropsWithClassName;

export default function BreadCrumbs({ className }: BreadCrumbsProps) {
	const { currentBranch } = useLayoutContext();
	const pathname = usePathname();
	const [currentSegements, setCurrentSegments] = useState<
		string[] | undefined
	>();

	useEffect(() => {
		const segments = pathname
			.split("/")
			.filter((value) => value !== "" && value !== currentBranch);
		const crumbs = segments
			.map((segment) => BREAD_CRUMBS_SEGMENTS.get(segment))
			.filter((value) => typeof value === "string");

		if (crumbs.length > 0) {
			setCurrentSegments(crumbs);
			return;
		}

		setCurrentSegments(undefined);
	}, [pathname, currentBranch]);

	return (
		<p className={`${css.root} ${className}`}>
			<Link
				className={css.link}
				href={
					currentBranch === "landyshevaya"
						? SITE_NAVIGATION.landyshevayaBase
						: SITE_NAVIGATION.volkovaBase
				}
			>
				Главная
			</Link>
			{currentSegements?.length &&
				currentSegements.length > 0 &&
				currentSegements.map((segment) => (
					<span
						key={segment}
						dangerouslySetInnerHTML={{ __html: " / " + segment }}
					/>
				))}
		</p>
	);
}
