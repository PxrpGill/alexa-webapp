import Link from "next/link";

import LoaderSVG from "@/public/icons/loader.svg";
import type { ButtonComponentProps } from "@/shared/types/button.types";

import css from "./index.module.css";

export default function Button({
	children,
	className,
	theme = "green",
	href,
	target = "_self",
	onClick,
	variant = "default",
	type = "button",
	leftIcon,
	rightIcon,
	ariaLabel,
	disabled = false,
	isLoading = false,
}: ButtonComponentProps) {
	if (href)
		return (
			<Link
				href={href}
				target={target}
				className={`${css.root} ${className} ${css[theme]} ${css[variant]}`.trim()}
				aria-label={ariaLabel}
				onClick={onClick}
			>
				{leftIcon}
				{children}
				{rightIcon}
			</Link>
		);

	return (
		<button
			onClick={onClick}
			type={type}
			aria-label={ariaLabel}
			disabled={disabled}
			className={`${css.root} ${className} ${css[theme]} ${css[variant]} ${isLoading && css.loading}`.trim()}
		>
			{leftIcon}
			<span className={css.text}>{children}</span>
			{rightIcon}
			<LoaderSVG className={css.loader} />
		</button>
	);
}
