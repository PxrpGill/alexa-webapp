import { usePathname } from "next/navigation";
import { useEffect } from "react";

import {
	LANDYSHEVAYA_NAVIGATION,
	VOLKOVA_NAVIGATION,
} from "../config/site-navigation";
import { getCookie } from "../helpers/get-cookie";
import { setCookie } from "../helpers/set-cookie";

export const BRANCH_COOKIES_KEY = "current_branch";
export const BRANCH_COOKIES_VALUES = {
	landyshevaya: "landyshevaya",
	volkova: "volkova",
} as const;

export type BranchType = keyof typeof BRANCH_COOKIES_VALUES;

const BRANCH_PATHS: Record<BranchType, string[]> = {
	landyshevaya: [
		LANDYSHEVAYA_NAVIGATION.landyshevayaBase,
		...Object.values(LANDYSHEVAYA_NAVIGATION.landyshevayaServices),
	],
	volkova: [VOLKOVA_NAVIGATION.volkovaBase],
};

const getBranchByPathname = (pathname: string): BranchType | undefined =>
	(Object.keys(BRANCH_PATHS) as BranchType[]).find((branch) =>
		BRANCH_PATHS[branch].some(
			(path) => pathname === path || pathname.startsWith(`${path}/`),
		),
	);

export const useSetBranchInCookies = () => {
	const pathname = usePathname();
	const branch = getBranchByPathname(pathname);

	useEffect(() => {
		if (!branch || getCookie(BRANCH_COOKIES_KEY) === branch) return;

		setCookie(BRANCH_COOKIES_KEY, branch);
	}, [branch]);

	return branch;
};
