/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

"use client";

import { useLayoutContext } from "@/shared/config/layout-context";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";

import { FOOTER_DICT_NAVIGATION } from "../../models/footer.constants";
import FooterNavList from "./footer-nav-list";
import css from "./index.module.css";
import StartPart from "./start-part";

export default function Footer() {
	const { currentBranch } = useLayoutContext();

	return (
		<AnimationWrapper
			as="footer"
			className={`${css.root} container`}
			direction="fade"
		>
			<StartPart />

			{FOOTER_DICT_NAVIGATION[currentBranch ?? "landyshevaya"].map(
				(navigationList, listKey) => (
					<FooterNavList {...navigationList} key={listKey} />
				),
			)}
		</AnimationWrapper>
	);
}
