/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
import type { PropsWithClassName } from "@/shared/types/props-with-classname";
import css from "./index.module.css";

type SectionHeaderProps = {
	title?: string;
	description?: string;
	total?: number;
} & PropsWithClassName;

const getVacanciesLabel = (count: number): string => {
	const forms: [string, string, string] = [
		"Вакансий открыто",
		"Вакансия открыта",
		"Вакансии открыты",
	];
	const mod10 = count % 10;
	const mod100 = count % 100;

	if (mod10 === 1 && mod100 !== 11) return forms[1];

	if (mod10 >= 2 && mod10 <= 4 && (mod100 < 12 || mod100 > 14)) return forms[2];
	
	return forms[0];
};

export default function SectionHeader({
	title,
	description,
	total,
	className,
}: SectionHeaderProps) {
	return (
		<div className={`${css.root} ${className}`}>
			<div className={css.content}>
				{title && (
					<h4
						dangerouslySetInnerHTML={{ __html: title }}
						className={css.title}
					/>
				)}
				{description && (
					<p
						dangerouslySetInnerHTML={{ __html: description }}
						className={css.description}
					/>
				)}
			</div>
			<p className={css.countWrapper}>
				<strong className={css.count}>{total}</strong>
				<span>{total ? getVacanciesLabel(total) : "Вакансий открыто"}</span>
			</p>
		</div>
	);
}
