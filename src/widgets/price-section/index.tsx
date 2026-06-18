import { AnimationWrapper } from "@/shared/ui/animation-wrapper";

import css from "./index.module.css";

export default function PriceSection() {
	return (
		<section className={`${css.root} container`}>
			<AnimationWrapper className={css.titleBlock}></AnimationWrapper>
		</section>
	);
}
