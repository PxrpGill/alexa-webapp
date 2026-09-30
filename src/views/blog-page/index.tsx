import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import ParentNewsSection from "@/widgets/parent-news-section";

import css from "./index.module.css";
import type { BlogPageProps } from "./types/blog-page.types";

export default function BlogPage({ initialNewsData }: BlogPageProps) {
	return (
		<main className="page-offset">
			<AnimationWrapper className={`${css.titleBlock} section-md container`}>
				<h1 className={css.title}>Блог</h1>
			</AnimationWrapper>
			<ParentNewsSection className="section" news={initialNewsData} />
		</main>
	);
}
