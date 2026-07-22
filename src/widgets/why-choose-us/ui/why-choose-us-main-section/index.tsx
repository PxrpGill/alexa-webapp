/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import ButtonIconSVG from "@/public/icons/button-teeth.svg";
import Button from "@/shared/ui/button";
import Picture from "@/shared/ui/picture";
import type { WhyChooseUsMainSectionProps } from "../../types/why-choose-us.types";
import css from "./index.module.css";

export default function WhyChooseUsMainSection({
	title,
	list,
	poster,
	button,
	className,
}: WhyChooseUsMainSectionProps) {
	return (
		<div className={`${css.root} ${className}`}>
			<div className={css.contentPart}>
				{title && (
					<h3
						dangerouslySetInnerHTML={{ __html: title }}
						className={css.title}
					/>
				)}
				{list?.length && (
					<ul className={css.list}>
						{list.map((item, index) => {
							const paragraphNumber = index + 1;

							return (
								<li className={css.paragraph} key={index}>
									<p className={css.number}>
										{paragraphNumber > 9
											? paragraphNumber
											: `0${paragraphNumber}`}
									</p>
									<p
										dangerouslySetInnerHTML={{ __html: item }}
										className={css.item}
									/>
								</li>
							);
						})}
					</ul>
				)}

				{button && (
					<Button
						className={css.button}
						href={button.href}
						target={button.target}
						rightIcon={<ButtonIconSVG className={css.icon} />}
					>
						{button.title}
					</Button>
				)}
			</div>

			<div className={css.posterWrapper}>
				{poster && <Picture poster={poster} />}
			</div>
		</div>
	);
}
