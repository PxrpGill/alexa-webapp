import { useMemo } from "react";
import { useGetAllNews } from "@/entities/news/hooks/use-get-all-news";
import DashboardSVG from "@/public/icons/dashboard.svg";
import { SITE_NAVIGATION } from "@/shared/config/site-navigation";
import {
	BRANCH_COOKIES_VALUES,
	type BranchType,
} from "@/shared/hooks/set-branch-in-cookies";
import {
	HEADER_NAVIGATION_ADULT_DENTISTRY_LINKS,
	HEADER_NAVIGATION_INFO,
	HEADER_NAVIGATION_PEDIATRIC_DENTISTRY,
} from "../models/header.constants";
import { INFORMATION_TAB, SERVICES_TAB } from "../models/menu-constants";
import type { MainTabsProps } from "../ui/menu/main-tabs";
import TabsContentColumns from "../ui/menu/tabs-content-columns";

const NEWS_MAX_COUNT = 10;

export const useDefineMenuContent = (
	isMenuOpen: boolean,
	currentBranch?: BranchType,
) => {
	const { data: newsData } = useGetAllNews({
		perPage: NEWS_MAX_COUNT,
		enabled: isMenuOpen,
	});

	const news = useMemo(
		() => newsData?.pages?.flatMap((page) => page?.items) ?? [],
		[newsData],
	);
	const transformedNewsLinks = useMemo(
		() =>
			news.map((singleData) => ({
				IconSvg: DashboardSVG,
				title: singleData?.title,
				description: singleData?.description,
				href: `${SITE_NAVIGATION.blog}/${singleData?.slug}`,
			})),
		[news],
	);

	const informationContent = useMemo(
		() => ({
			contentKey: INFORMATION_TAB.tabKey,
			children: (
				<TabsContentColumns
					columns={[
						{
							title: "Информация",
							links: HEADER_NAVIGATION_INFO,
						},
						{
							title: "Блог",
							titleHref: SITE_NAVIGATION.blog,
							links: transformedNewsLinks,
						},
					]}
				/>
			),
		}),
		[transformedNewsLinks],
	);

	const volkovaMenuTabsData = useMemo<MainTabsProps>(
		() => ({
			tabs: [INFORMATION_TAB],
			tabContents: [informationContent],
		}),
		[informationContent],
	);

	const LANDYSHEVAYA_MENU_TABS_DATA = useMemo<MainTabsProps>(
		() => ({
			tabs: [SERVICES_TAB, INFORMATION_TAB],
			tabContents: [
				{
					contentKey: SERVICES_TAB.tabKey,
					children: (
						<TabsContentColumns
							columns={[
								{
									title: "Взрослая стоматология",
									links: HEADER_NAVIGATION_ADULT_DENTISTRY_LINKS,
								},
								{
									title: "Детская стоматология",
									links: HEADER_NAVIGATION_PEDIATRIC_DENTISTRY,
								},
							]}
						/>
					),
				},
				informationContent,
			],
		}),
		[informationContent],
	);

	return currentBranch === BRANCH_COOKIES_VALUES.volkova
		? volkovaMenuTabsData
		: LANDYSHEVAYA_MENU_TABS_DATA;
};
