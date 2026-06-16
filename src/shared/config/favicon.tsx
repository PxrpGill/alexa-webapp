/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

const FAVICON_CONFIG = [
	{
		rel: "icon",
		type: "image/x-icon",
		sizes: "",
		href: "/favicon/favicon.ico",
	},
	{
		rel: "icon",
		type: "image/png",
		sizes: "16x16",
		href: "/favicon/favicon-16x16.png",
	},
	{
		rel: "icon",
		type: "image/png",
		sizes: "32x32",
		href: "/favicon/favicon-32x32.png",
	},
	{
		rel: "apple-touch-icon",
		type: "",
		sizes: "180x180",
		href: "/favicon/apple-touch-icon.png",
	},
	{
		rel: "manifest",
		type: "",
		sizes: "",
		href: "/favicon/site.webmanifest",
	},
];

export default function Favicon() {
	return (
		<>
			{FAVICON_CONFIG.map((faviconItem, index) => (
				<link
					key={index}
					rel={faviconItem.rel}
					type={faviconItem.type}
					sizes={faviconItem.sizes}
					href={faviconItem.href}
				/>
			))}
		</>
	);
}
