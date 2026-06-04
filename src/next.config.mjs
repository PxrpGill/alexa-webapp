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
};

export default nextConfig;
