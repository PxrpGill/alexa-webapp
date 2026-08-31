import DMSModal from "@/features/dms-modal";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import FaqSection from "@/widgets/faq-section";
import StepperSection from "@/widgets/health-for-family/ui/stepper-section";
import css from "./index.module.css";
import {
	DMS_INFO_BLOCK_MOCK,
	FAQ_MOCK_SECTION_MOCK,
	STEPPER_SECTION_MOCK,
} from "./models/dms-page.constants";
import DMSInfoBlock from "./ui/dms-info-block";

export default function DMSPage() {
	return (
		<main className={css.root}>
			<AnimationWrapper className={`${css.titleBlock} container`}>
				<h1 className={css.title}>Лечение зубов по&nbsp;полису ДМС</h1>
			</AnimationWrapper>
			<DMSInfoBlock className={css.dmsInfo} {...DMS_INFO_BLOCK_MOCK} />
			<StepperSection className={css.stepper} {...STEPPER_SECTION_MOCK} />
			<FaqSection className={css.faq} {...FAQ_MOCK_SECTION_MOCK} />
			<DMSModal />
		</main>
	);
}
