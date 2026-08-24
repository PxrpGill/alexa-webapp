/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: <explanation> */
/** biome-ignore-all lint/suspicious/noArrayIndexKey: <explanation> */

import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";

import { Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Picture from "@/shared/ui/picture";
import { useSwiperView } from "../../hooks/use-swiper-view";
import type { BalloonProps } from "../../types/balloon.types";
import css from "./index.module.css";

export default function Balloon({
	className,
	isOpen,
	style,
	activePlacemark,
}: BalloonProps) {
	const { slidesPerView, spaceBetween } = useSwiperView();

	return (
		<div
			className={`${css.root} ${isOpen && css.open} ${className}`}
			style={style}
		>
			<div className={css.wrap}>
				{activePlacemark?.locality && (
					<p
						dangerouslySetInnerHTML={{ __html: activePlacemark.locality }}
						className={css.locality}
					/>
				)}
				{activePlacemark?.title && (
					<address
						dangerouslySetInnerHTML={{ __html: activePlacemark?.title }}
						className={css.address}
					/>
				)}
				{activePlacemark?.workSchedule && (
					<p
						className={css.schedule}
						dangerouslySetInnerHTML={{ __html: activePlacemark.workSchedule }}
					/>
				)}
			</div>
			{activePlacemark?.gallery?.length && (
				<Swiper
					className={css.swiper}
					slidesPerView={slidesPerView}
					spaceBetween={spaceBetween}
					scrollbar={{
						hide: false,
					}}
					modules={[Scrollbar]}
				>
					{activePlacemark.gallery.map((slide, index) => (
						<SwiperSlide key={index} className={css.slide}>
							<Picture poster={slide} className={css.picture} />
						</SwiperSlide>
					))}
				</Swiper>
			)}
		</div>
	);
}
