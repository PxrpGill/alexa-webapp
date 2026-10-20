import type { GetAllNewsResponseType } from "@/entities/news/types/news.types";
import type { GetStoriesResponseType } from "@/entities/story/types/story.types";

export type HomePageProps = {
	initialNewsData?: GetAllNewsResponseType;
	initialStoriesData?: GetStoriesResponseType;
};
