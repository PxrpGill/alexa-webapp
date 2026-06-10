import {
	YANDEX_MAP_CONTENT,
	YANDEX_MAP_TITLE,
} from "@/shared/config/global-constants.constats";
import BrickworkSection from "@/widgets/brickwork-section";
import InstallmentPlanSection from "@/widgets/installment-plan-section";
import QuadroSection from "@/widgets/quadro-section";
import StagesSection from "@/widgets/stages-section";
import TitleStickySection from "@/widgets/tilte-sticky-section";
import YandexMap from "@/widgets/yandex-map";
import css from "./index.module.css";
import {
	BRICK_WORK_SECTION_MOCK,
	INSTALLMENT_PLAN_SECTION_MOCK,
	QUADRO_SECTION_MOCK,
	STAGES_SECTION,
	TITLE_STICKY_SECTION_MOCK,
} from "./models/treatment-in-dream.constants";

export default function TreatmentInDreamPage() {
	return (
		<main className={css.root}>
			<QuadroSection {...QUADRO_SECTION_MOCK} className={css.quadro} />
			<InstallmentPlanSection
				{...INSTALLMENT_PLAN_SECTION_MOCK}
				className={css.installment}
			/>
			<TitleStickySection
				{...TITLE_STICKY_SECTION_MOCK}
				className={css.stickyTitle}
			/>
			<BrickworkSection
				{...BRICK_WORK_SECTION_MOCK}
				className={css.brickWork}
			/>
			<StagesSection {...STAGES_SECTION} className={css.stages} />
			<YandexMap title={YANDEX_MAP_TITLE} content={YANDEX_MAP_CONTENT} />
		</main>
	);
}
