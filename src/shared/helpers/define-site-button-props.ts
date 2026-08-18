import { useLayoutContext } from "../config/layout-context";
import type { SiteButtonProps } from "../types/button.types";

import { handleSectionScroll } from "./handle-section-scroll";

export const defineButtonProps = (button: SiteButtonProps) => {
	const { toggleConsultationModal, toggleAppointmentModal, toggleDMSModal } =
		useLayoutContext();

	if (button.isOpenConsultationModal)
		return { onClick: () => toggleConsultationModal(true) };

	if (button.isOpenDMSModal) return { onClick: () => toggleDMSModal(true) };

	if (button.isOpenFeedbackModal)
		return { onClick: () => toggleAppointmentModal(true) };

	if (button.href?.startsWith("#"))
		return {
			href: button.href,
			onClick: handleSectionScroll,
		};

	return {
		href: button.href ?? "#",
		target: button.target ?? "_self",
	};
};
