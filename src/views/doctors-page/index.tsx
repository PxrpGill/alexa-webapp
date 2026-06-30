import { YANDEX_MAP_INFO_CARD } from "@/shared/config/global-constants.constats";
import { AnimationWrapper } from "@/shared/ui/animation-wrapper";
import OurPeopleSection from "@/widgets/our-people-section";
import YandexMap from "@/widgets/yandex-map";
import css from "./index.module.css";
import { EMPLOYEES_SECTION } from "./models/doctors.constants";

export default function DoctorsPage() {
	return (
		<main className={css.root}>
			<AnimationWrapper className={`${css.titleBlock} container`}>
				<h1 className={css.title}>Врачи</h1>
			</AnimationWrapper>
			<OurPeopleSection className={css.peoples} {...EMPLOYEES_SECTION} />
			<YandexMap infoCard={YANDEX_MAP_INFO_CARD} className={css.yandexMap} />
		</main>
	);
}
