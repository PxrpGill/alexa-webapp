import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import {
	INFORMATION_NAVIGATION,
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

const isInformationPage = (pathname: string): boolean =>
	Object.values(INFORMATION_NAVIGATION).some(
		(path) => pathname === path || pathname.startsWith(`${path}/`),
	);

const isBranchType = (value?: string): value is BranchType =>
	!!value && value in BRANCH_COOKIES_VALUES;

export const useSetBranchInCookies = () => {
	const pathname = usePathname();
	const branch = getBranchByPathname(pathname);
	const [cookieBranch, setCookieBranch] = useState<BranchType | undefined>();

	useEffect(() => {
		if (typeof document === "undefined") return;

		const savedBranch = getCookie(BRANCH_COOKIES_KEY);
		setCookieBranch(isBranchType(savedBranch) ? savedBranch : undefined);

		if (!branch || savedBranch === branch) return;

		setCookie(BRANCH_COOKIES_KEY, branch);
		setCookieBranch(branch);
	}, [branch]);

	if (isInformationPage(pathname)) return cookieBranch;

	return branch;
};
