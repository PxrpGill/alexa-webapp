/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import ArrowSVG from "@/public/icons/arrow-without-stick.svg";
import { useOnClickOutside } from "@/shared/hooks/use-on-click-outside";
import css from "./index.module.css";
import type { ChangeBranchProps } from "./types/change-branch.types";

type BranchType = {
	name: string;
	title: string;
	destination: string;
};

const BRANCHES: BranchType[] = [
	{
		name: "landyshevaya",
		title: "Ландышевая&nbsp;104",
		destination: "/",
	},
	{
		name: "volkova",
		title: "Волкова&nbsp;22",
		destination: "/volkova",
	},
];

export default function ChangeBranch({ className }: ChangeBranchProps) {
	const rootRef = useRef<HTMLDivElement | null>(null);
	const router = useRouter();
	const [selectedBranch, selectBranch] = useState<BranchType>(BRANCHES[0]);
	const [isListOpen, toggleListOpen] = useState<boolean>(false);

	useOnClickOutside(rootRef, () => toggleListOpen(false));

	const handleBranchClick = (branch: BranchType) => {
		selectBranch(branch);
		toggleListOpen(false);

		router.push(branch.destination);
	};

	return (
		<div
			className={`${css.root} ${isListOpen && css.open} ${className}`}
			ref={rootRef}
		>
			<button
				className={css.button}
				type="button"
				onClick={() => toggleListOpen(!isListOpen)}
			>
				<span dangerouslySetInnerHTML={{ __html: selectedBranch.title }} />
				<ArrowSVG className={`${css.arrow} ${isListOpen && css.open}`} />
			</button>
			<ul className={`${css.list} ${isListOpen && css.open}`}>
				{BRANCHES.map((branch) => (
					<li key={branch.name}>
						<button
							className={`${css.branch} ${selectedBranch === branch && css.selected}`}
							type="button"
							onClick={() => handleBranchClick(branch)}
							dangerouslySetInnerHTML={{ __html: branch.title }}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
