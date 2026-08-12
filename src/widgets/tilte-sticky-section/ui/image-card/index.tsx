"use client";

import ButtonIcon from "@/public/icons/button-teeth.svg";
import { defineButtonProps } from "@/shared/helpers/define-site-button-props";
import Button from "@/shared/ui/button";
import Picture from "@/shared/ui/picture";
import type { ImageCardProps } from "../../types/title-sticky-section.types";
import css from "./index.module.css";

export default function ImageCard({
	button,
	poster,
	className,
}: ImageCardProps) {
	return (
		<div className={`${css.root} ${className}`}>
			<div className={css.pictureWrapper}>
				{poster && <Picture poster={poster} />}
			</div>
			{button && (
				<Button
					className={css.button}
					rightIcon={<ButtonIcon className={css.buttonIcon} />}
					{...defineButtonProps(button)}
				>
					{button.title ?? "Записаться на прием"}
				</Button>
			)}
		</div>
	);
}
