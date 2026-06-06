import { AnimationWrapper } from "@/shared/ui/animation-wrapper";

import css from "./index.module.css";

export default function TabsContent() {
	return (
		<AnimationWrapper
			as="section"
			className={`${css.root}`}
		></AnimationWrapper>
	);
}
