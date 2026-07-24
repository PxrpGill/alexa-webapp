/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import { useMemo } from "react";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import type {
	ElinerProps,
	ElinersSectionTableProps,
} from "../../types/eliners-table.types";
import css from "./index.module.css";

type FieldDef = {
	key: keyof ElinerProps;
	label: string;
};

const FIELDS: Array<FieldDef> = [
	{ key: "country", label: "Производитель" },
	{ key: "deliveryTime", label: "Гарантия" },
	{ key: "stepsTime", label: "Скорость приживаемости" },
	{ key: "wearingComfort", label: "Немедленная имплантация" },
	{ key: "specialCases", label: "Костная пластика" },
];

export default function ElinersTable({
	sectionHeader,
	eliners,
	className,
}: ElinersSectionTableProps) {
	const elinerNames = useMemo(
		() => eliners?.map((eliner) => eliner.name ?? "—"),
		[eliners],
	);

	const rows = useMemo(
		() =>
			FIELDS.map(({ key, label }) => ({
				label,
				values: eliners?.map((eliner) => eliner[key] ?? "—") ?? [],
			})),
		[eliners],
	);

	if (!eliners?.length) return null;

	return (
		<AnimationWrapper as="section" className={`${css.root} ${className}`}>
			{sectionHeader && (
				<div className={`${css.sectionHeader} container`}>
					{sectionHeader.title && (
						<h2
							dangerouslySetInnerHTML={{ __html: sectionHeader.title }}
							className={css.title}
						/>
					)}
					{sectionHeader.description && (
						<p
							dangerouslySetInnerHTML={{ __html: sectionHeader.description }}
							className={css.description}
						/>
					)}
				</div>
			)}
			<div className={`${css.tableWrapper} container`}>
				<table className={css.table}>
					<thead className={css.thead}>
						<tr className={css.row}>
							<th className={css.corner} />
							{elinerNames?.map((name, index) => (
								<th
									key={index}
									className={css.headerCell}
									dangerouslySetInnerHTML={{ __html: name }}
								/>
							))}
						</tr>
					</thead>
					<tbody className={css.tbody}>
						{rows.map(({ label, values }, rowIndex) => (
							<tr key={rowIndex} className={css.row}>
								<td className={css.labelCell}>{label}</td>
								{values.map((value, colIndex) => (
									<td
										key={colIndex}
										className={css.valueCell}
										dangerouslySetInnerHTML={{ __html: value }}
									/>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</AnimationWrapper>
	);
}
