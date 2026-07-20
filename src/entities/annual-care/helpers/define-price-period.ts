import type { AnnualCarePricePeriodType } from "../types/annual-care-card.types";

export const definePricePeriod = (period: AnnualCarePricePeriodType) => {
	switch (period) {
		case "halfYear":
			return "в пол года";

		case "month":
			return "в месяц";

		case "year":
			return "в год";
	}
};
