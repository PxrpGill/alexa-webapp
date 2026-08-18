const API_V1_PREFIX = "/api/v1";

export const API_URLS = {
	postConsultation: API_V1_PREFIX + "/consultation",
	postDMS: API_V1_PREFIX + "/dms",
	postAppointments: API_V1_PREFIX + "/appointments",
	getAllBranches: API_V1_PREFIX + "/branches",
	getAllBlogs: API_V1_PREFIX + "/blog",
	getSingleBlog: (slug: string) => API_V1_PREFIX + "/blog" + slug,
};
