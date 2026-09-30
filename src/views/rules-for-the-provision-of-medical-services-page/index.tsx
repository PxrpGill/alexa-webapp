import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import css from "./index.module.css";
import { RULES_FOR_THE_PROVISION } from "./models/rules-for-the-provision.constants";
import RulesForTheProvision from "./ui/rules-for-the-provision";

export default function RulesForTheProvisionOfMedicalServicesPage() {
	return (
		<main className="page-offset">
			<AnimationWrapper className={`${css.titleBlock} section-md container`}>
				<h1 className={css.title}>Правила оказания медицинских услуг</h1>
			</AnimationWrapper>
			<RulesForTheProvision
				{...RULES_FOR_THE_PROVISION}
				className="section"
			/>
		</main>
	);
}
