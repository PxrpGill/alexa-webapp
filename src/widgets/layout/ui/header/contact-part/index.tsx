"use client";

import ChangeBranch from "@/features/change-branch";
import MaxSVG from "@/public/icons/max.svg";
import MenuSVG from "@/public/icons/menu-icon.svg";
import PhoneSVG from "@/public/icons/phone.svg";
import TelegramSVG from "@/public/icons/telegram.svg";
import {
	MAX,
	MOBILE_PHONE,
	MOBILE_PHONE_1,
	TELEGRAM,
} from "@/shared/config/global-constants.constats";
import { useLayoutContext } from "@/shared/config/layout-context";
import css from "./index.module.css";

export default function ContactPart() {
	const { toggleMenuOpen, currentBranch } = useLayoutContext();

	return (
		<div className={`${css.root}`.trim()}>
			<ChangeBranch className={css.changeBranch} />
			<a
				href={`tel:${MOBILE_PHONE[currentBranch ?? "landyshevaya"]}`}
				className={css.phone}
			>
				{MOBILE_PHONE[currentBranch ?? "landyshevaya"]}
			</a>
			<a
				className={css.telegram}
				href={TELEGRAM}
				aria-label="Перейти в Телеграм"
			>
				<TelegramSVG className={css.circleIcon} />
			</a>
			<a href={MAX} className={css.max} aria-label="Перейти в Max">
				<MaxSVG className={css.circleIcon} />
			</a>
			<a
				href={`tel:${MOBILE_PHONE[currentBranch ?? "landyshevaya"]}`}
				className={css.anotherPhone}
				aria-label="Позвонить по номеру телефона"
			>
				<PhoneSVG className={css.circleIcon} />
			</a>
			<button
				className={css.menuButton}
				type="button"
				onClick={() => toggleMenuOpen(true)}
			>
				<MenuSVG className={css.menuIcon} />
			</button>
		</div>
	);
}
