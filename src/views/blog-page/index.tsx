import { YANDEX_MAP_INFO_CARD } from "@/shared/config/global-constants.constants";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import ParentNewsSection from "@/widgets/parent-news-section";
import YandexMap from "@/widgets/yandex-map";

import css from "./index.module.css";
import { PARENT_NEWS_SECTION_MOCK } from "./models/blog.constants";

export default function BlogPage() {
	return (
		<main className={css.root}>
			<AnimationWrapper className={`${css.titleBlock} container`}>
				<h1 className={css.title}>Блог</h1>
			</AnimationWrapper>
			<ParentNewsSection
				{...PARENT_NEWS_SECTION_MOCK}
				className={css.parentNews}
			/>
			<YandexMap infoCard={YANDEX_MAP_INFO_CARD} className={css.yandexMap} />
		</main>
	);
}
