"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import { getCookie } from "@/shared/helpers/get-cookie";
import { setCookie } from "@/shared/helpers/set-cookie";
import Button from "@/shared/ui/button";
import css from "./index.module.css";
import {
	COOKIES_PANEL_KEY,
	COOKIES_PANEL_TRUE_VALUE,
} from "./models/cookies-panel.constants";

export default function CookiesPanel() {
	// Видима сразу в серверной разметке — так она попадает в первую отрисовку
	// и не превращается в поздний LCP-элемент. Тем, кто уже согласился,
	// панель скрывает инлайн-скрипт в app/layout.tsx ещё до отрисовки,
	// а этот эффект убирает её из разметки окончательно.
	const [isVisible, toggleVisible] = useState<boolean>(true);
	const timeoutRef = useRef<number>(0);

	const handleAppendCookies = () => {
		toggleVisible(false);
		setCookie(COOKIES_PANEL_KEY, COOKIES_PANEL_TRUE_VALUE);
	};

	useEffect(() => {
		if (timeoutRef.current) clearTimeout(timeoutRef.current);

		const cookies = getCookie(COOKIES_PANEL_KEY);

		if (cookies) toggleVisible(false);
	}, []);

	return (
		<div className={`${css.root} ${isVisible && css.visible} container`}>
			<div className={css.wrapper}>
				<p className={css.text}>
					Мы&nbsp;используем cookie для работы сайта и&nbsp;улучшения сервиса.<br />
					Используя сайт, вы&nbsp;соглашаетесь с&nbsp;
					<Link href={SITE_NAVIGATION.privacyPolicy} target="_blank">
						Политикой конфиденциальности
					</Link>{" "}
					и
					<Link href={SITE_NAVIGATION.userAgreement}>
						&nbsp;обработкой персональных данных
					</Link>
					.
				</p>
				<Button onClick={handleAppendCookies} className={css.button}>
					Принять кукки
				</Button>
			</div>
		</div>
	);
}
