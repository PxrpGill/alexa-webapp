/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

import type { FC, SVGProps } from "react";

import type { SiteLinkProps } from "@/shared/types/button.types";
import type { PropsWithClassName } from "@/shared/types/props-with-classname";

import { AnimationWrapper } from "../animation-wrapper";
import Button from "../button";

import css from "./index.module.css";

export type FactoidCardProps = {
	title?: string;
	description?: string;
	button?: SiteLinkProps & {
		leftIcon?: FC<SVGProps<SVGSVGElement>>;
		rightIcon?: FC<SVGProps<SVGSVGElement>>;
	};
} & PropsWithClassName;

export default function FactoidCard({
	title,
	description,
	button,
}: FactoidCardProps) {
	return (
		<AnimationWrapper as="article" className={`${css.root}`}>
			{title && (
				<h5 className={css.title} dangerouslySetInnerHTML={{ __html: title }} />
			)}
			{description && (
				<p
					className={css.description}
					dangerouslySetInnerHTML={{ __html: description }}
				/>
			)}
			{button && (
				<Button
					className={css.button}
					leftIcon={button.leftIcon && <button.leftIcon className={css.icon} />}
					rightIcon={
						button.rightIcon && <button.rightIcon className={css.icon} />
					}
					href={button.href}
					theme="transparent"
				>
					{button.title}
				</Button>
			)}
		</AnimationWrapper>
	);
}
