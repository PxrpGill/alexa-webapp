import ButtonTeethSVG from "@/public/icons/button-teeth.svg";
import MaxSVG from "@/public/icons/max.svg";
import PhoneSVG from "@/public/icons/phone.svg";
import TelegramSVG from "@/public/icons/telegram.svg";
import {
	MAX,
	MOBILE_PHONE,
	MOBILE_PHONE_1,
	TELEGRAM,
} from "@/shared/config/global-constants.constats";
import Button from "@/shared/ui/button";
import css from "./index.module.css";

export default function ContactPart() {
	return (
		<div className={`${css.root}`.trim()}>
			<a href={`tel:${MOBILE_PHONE}`} className={css.phone}>
				{MOBILE_PHONE}
			</a>
			<Button
				className={css.button}
				rightIcon={<ButtonTeethSVG className={css.buttonIcon} />}
			>
				Записаться на прием
			</Button>
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
				href={`tel:${MOBILE_PHONE_1}`}
				className={css.anotherPhone}
				aria-label="Позвонить по номеру телефона"
			>
				<PhoneSVG className={css.circleIcon} />
			</a>
		</div>
	);
}
