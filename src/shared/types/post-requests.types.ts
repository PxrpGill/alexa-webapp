export type PostRequestType = {
	patient_name: string;
	patient_phone: string;
	branch_slug: string;
	page_url: string;
	is_ad_agreement?: boolean;
	is_privacy_agreement: boolean;
};

export type PostRequestResponseType = {
	message: string;
};
