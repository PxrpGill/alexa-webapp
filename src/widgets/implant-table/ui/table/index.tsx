/** biome-ignore-all lint/suspicious/noArrayIndexKey: intentional suppression */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtmlWithChildren: <explanation> */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */

"use client";

import { useMemo } from "react";

import type { ImplantProps, TableProps } from "../../types/implant-table.types";

import css from "./index.module.css";

type FieldDef = {
	key: keyof ImplantProps;
	label: string;
};

const FIELDS: Array<FieldDef> = [
	{ key: "manufacturer", label: "Производитель" },
	{ key: "guarantee", label: "Гарантия" },
	{ key: "rateOfEngraftment", label: "Скорость приживаемости" },
	{ key: "immediateImplantation", label: "Немедленная имплантация" },
	{ key: "boneGrafting", label: "Костная пластика" },
	{ key: "aesthetics", label: "Эстетика" },
	{
		key: "optionFullProstheticRestoration",
		label: "Возможность полного протезирования",
	},
	{ key: "uniqueFeatures", label: "Уникальные особенности" },
];

export default function Table({ implants, className }: TableProps) {
	const implantNames = useMemo(
		() => implants?.map((implant) => implant.name ?? "—"),
		[implants],
	);

	const rows = useMemo(
		() =>
			FIELDS.map(({ key, label }) => ({
				label,
				values: implants?.map((implant) => implant[key] ?? "—") ?? [],
			})),
		[implants],
	);

	if (!implants?.length) return null;

	return (
		<div className={`${css.root} container ${className}`}>
			<table className={css.table}>
				<thead className={css.thead}>
					<tr className={css.row}>
						<th className={css.corner} />
						{implantNames?.map((name, index) => (
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
	);
}
