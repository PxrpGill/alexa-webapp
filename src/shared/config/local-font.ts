import localFont from "next/font/local";

const InvolveFont = localFont({
	src: [
		{
			path: "../../public/fonts/Involve-Regular.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/Involve-Medium.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/fonts/Involve-SemiBold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/fonts/Involve-Bold.woff2",
			weight: "700",
			style: "normal",
		},
	],
	display: "swap",
	variable: "--involve",
});

export default InvolveFont;
