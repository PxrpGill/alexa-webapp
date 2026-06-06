/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

import Link from "next/link";

import LogoSvg from "@/public/icons/logo.svg";
import MaxSVG from "@/public/icons/max.svg";
import TelegramSVG from "@/public/icons/telegram.svg";
import WhatsappSVG from "@/public/icons/whatsapp.svg";
import {
	MAX,
	TELEGRAM,
	WHATSAPP,
} from "@/shared/config/global-constants.constats";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import { FOOTER_DOCUMENTS_NAVIGATION } from "@/widgets/layout/models/footer.constants";
import css from "./index.module.css";

export default function StartPart() {
	return (
		<div className={css.root}>
			<Link href={SITE_NAVIGATION.base} className={css.baseLink}>
				<LogoSvg className={css.logo} />
			</Link>
			<div className={css.contacts}>
				<a
					href={TELEGRAM}
					target="_blank"
					rel="noopener"
					className={css.contactLink}
				>
					<TelegramSVG className={css.icon} />
				</a>
				<a
					href={WHATSAPP}
					target="_blank"
					rel="noopener"
					className={css.contactLink}
				>
					<WhatsappSVG className={css.icon} />
				</a>
				<a
					href={MAX}
					target="_blank"
					rel="noopener"
					className={css.contactLink}
				>
					<MaxSVG className={css.icon} />
				</a>
			</div>
			<nav className={css.links}>
				<ul className={css.list}>
					{FOOTER_DOCUMENTS_NAVIGATION.map((document, index) => (
						<li key={index} className={css.paragraph}>
							<Link
								className={css.link}
								href={document.href}
								dangerouslySetInnerHTML={{ __html: document.title ?? "" }}
							/>
						</li>
					))}
				</ul>
			</nav>
		</div>
	);
}
