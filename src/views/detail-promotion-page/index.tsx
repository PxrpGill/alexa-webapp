/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
import type { DetailPromotionType } from "@/entities/promotion/types/detail-promotion.types";
import PromotionRequestSection from "@/features/promotion-request-section";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import promotionCss from "./promotion-content.module.css";
import PromotionDescription from "./ui/promotion-description";
import PromotionHero from "./ui/promotion-hero";

export default function DetailPromotionPage(props: DetailPromotionType) {
	return (
		<main data-slug={props.slug} className="page-offset">
			{props?.hero && (
				<PromotionHero
					className="section-pad"
					{...props.hero}
					buttonText={props.form?.button_text}
				/>
			)}

			{props.detail && (
				<PromotionDescription {...props.detail} className="section-pad" />
			)}
			{props.detail_content && (
				<AnimationWrapper className={"container section"}>
					<div
						className={promotionCss.content}
						dangerouslySetInnerHTML={{ __html: props.detail_content }}
					/>
				</AnimationWrapper>
			)}
			<PromotionRequestSection
				title={props.form?.title}
				description={props.form?.description}
				button_text={props.form?.button_text}
				slug={props.slug}
				className="section-pad"
			/>
		</main>
	);
}
