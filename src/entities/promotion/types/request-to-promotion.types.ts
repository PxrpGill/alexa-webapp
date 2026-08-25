export type RequestToPromotionType = {
	patient_name: string;
	patient_phone: string;
	is_ad_agreement?: boolean;
	is_privacy_agreement: boolean;
	slug: string;
};
