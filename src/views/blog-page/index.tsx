import { YANDEX_MAP_INFO_CARD } from "@/shared/config/global-constants.constants";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import ParentNewsSection from "@/widgets/parent-news-section";
import YandexMap from "@/widgets/yandex-map";

import css from "./index.module.css";
import type { BlogPageProps } from "./types/blog-page.types";

export default function BlogPage({ initialNewsData }: BlogPageProps) {
	return (
		<main className={css.root}>
			<AnimationWrapper className={`${css.titleBlock} container`}>
				<h1 className={css.title}>Блог</h1>
			</AnimationWrapper>
			<ParentNewsSection className={css.parentNews} news={initialNewsData} />
			<YandexMap infoCard={YANDEX_MAP_INFO_CARD} className={css.yandexMap} />
		</main>
	);
}
