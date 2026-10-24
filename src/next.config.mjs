const nextConfig = {
	output: "standalone",

	expireTime: 3600,

	reactCompiler: true,

	experimental: {
		inlineCss: true,
	},

	turbopack: {
		rules: {
			"*.svg": {
				loaders: ["@svgr/webpack"],
				as: "*.jsx",
			},
		},
	},

	async rewrites() {
		const apiUrl =
			process.env.API_URL ??
			process.env.NEXT_PUBLIC_API_URL ??
			"http://localhost:8000";

		return [
			{
				source: "/media/:path*",
				destination: `${apiUrl}/media/:path*`,
			},
		];
	},

	async redirects() {
		return [
			{
				source: "/landyshevaya",
				destination: "/",
				permanent: true,
			},
			{
				source: "/detskaya-hirurgiya",
				destination: "/landyshevaya/detskaya-hirurgiya",
				permanent: true,
			},
			{
				source: "/detskaya-terapiya",
				destination: "/landyshevaya/detskaya-terapiya",
				permanent: true,
			},
			{
				source: "/gigiena-i-profilaktika",
				destination: "/landyshevaya/gigiena-i-profilaktika",
				permanent: true,
			},
			{
				source: "/gigiena-i-profilaktika-vz",
				destination: "/landyshevaya/gigiena-i-profilaktika-vz",
				permanent: true,
			},
			{
				source: "/gnatologiya",
				destination: "/landyshevaya/gnatologiya",
				permanent: true,
			},
			{
				source: "/hirurgiya-i-implantaciya",
				destination: "/landyshevaya/hirurgiya-i-implantaciya",
				permanent: true,
			},
			{
				source: "/konsultaciya-detskogo-stomatologa",
				destination: "/landyshevaya/konsultaciya-detskogo-stomatologa",
				permanent: true,
			},
			{
				source: "/konsultaciya-stomatologa",
				destination: "/landyshevaya/konsultaciya-stomatologa",
				permanent: true,
			},
			{
				source: "/lechenie-vo-sne",
				destination: "/landyshevaya/lechenie-vo-sne",
				permanent: true,
			},
			{
				source: "/lechenie-vo-sne-vz",
				destination: "/landyshevaya/lechenie-vo-sne-vz",
				permanent: true,
			},
			{
				source: "/ortodontiya",
				destination: "/landyshevaya/ortodontiya",
				permanent: true,
			},
			{
				source: "/ortodontiya-vz",
				destination: "/landyshevaya/ortodontiya-vz",
				permanent: true,
			},
			{
				source: "/ortopediya-vz",
				destination: "/landyshevaya/ortopediya-vz",
				permanent: true,
			},
			{
				source: "/parodontologiya",
				destination: "/landyshevaya/parodontologiya",
				permanent: true,
			},
			{
				source: "/terapiya-vz",
				destination: "/landyshevaya/terapiya-vz",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
