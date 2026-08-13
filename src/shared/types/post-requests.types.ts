export type PostRequestType = {
	patient_name: string;
	patient_phone: string;
	branch_slug: string;
	page_url: string;
};

export type PostRequestResponseType = {
	message: string;
};
