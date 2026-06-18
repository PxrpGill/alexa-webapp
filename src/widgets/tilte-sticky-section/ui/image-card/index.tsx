import ButtonIcon from "@/public/icons/button-teeth.svg";
import Button from "@/shared/ui/button";
import Picture from "@/shared/ui/picture";
import type { ImageCardProps } from "../../types/title-sticky-section.types";
import css from "./index.module.css";

export default function ImageCard({
	buttonText,
	poster,
	className,
}: ImageCardProps) {
	return (
		<div className={`${css.root} ${className}`}>
			<div className={css.pictureWrapper}>
				{poster && <Picture poster={poster} />}
			</div>
			<Button
				className={css.button}
				rightIcon={<ButtonIcon className={css.buttonIcon} />}
			>
				{buttonText ?? "Записаться на прием"}
			</Button>
		</div>
	);
}
