import LogoSvg from "@/public/icons/logo.svg";

import css from "./index.module.css";

export default function Header() {
	return (
		<header className={css.root}>
			<LogoSvg className={css.logo} />
		</header>
	);
}
