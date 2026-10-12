"use client";

import { useEffect, useRef, useState } from "react";

import type { PropsWithClassName } from "@/shared/types/props-with-classname";

import css from "./index.module.css";

export type PictureFormatDataType = {
	src: string;
	mobile?: string;
};

export type PictureFormatType = {
	[x: string]: any;
	original?: PictureFormatDataType;
	webp?: PictureFormatDataType;
	avif?: PictureFormatDataType;
};

export type PosterImageType = {
	poster: PictureFormatType;
};

export type PictureProps = {
	loading?: "eager" | "lazy";
	alt?: string;
	fetchPriority?: "high" | "low" | "auto";
	decoding?: "async" | "sync" | "auto";
	/** Собственные размеры файла — резервируют место и убирают сдвиг макета */
	width?: number;
	height?: number;
	/** Отключает серый скелетон с переливом, пока картинка не загрузилась */
	withoutSkeleton?: boolean;
} & PropsWithClassName &
	PosterImageType;

export default function Picture({
	className,
	loading,
	poster,
	alt,
	fetchPriority,
	decoding,
	width,
	height,
	withoutSkeleton,
}: PictureProps) {
	const imgRef = useRef<HTMLImageElement>(null);
	const [isLoaded, setIsLoaded] = useState(false);

	// Закэшированная (или eager) картинка успевает отрисоваться до гидратации,
	// её load уже не придёт — без этой проверки скелетон остался бы висеть.
	useEffect(() => {
		const img = imgRef.current;

		if (img?.complete && img.naturalWidth > 0) {
			setIsLoaded(true);
		}
	}, []);

	const isSkeletonVisible = !withoutSkeleton && !isLoaded;

	return (
		<picture
			className={[css.root, isSkeletonVisible && css.loading, className]
				.filter(Boolean)
				.join(" ")}
		>
			{poster.avif && (
				<>
					{poster.avif.mobile && (
						<source
							srcSet={poster.avif.mobile}
							type="image/avif"
							media="(max-width: 767px)"
						/>
					)}
					{poster.avif.src && (
						<source srcSet={poster.avif.src} type="image/avif" />
					)}
				</>
			)}
			{poster.webp && (
				<>
					{poster.webp.mobile && (
						<source
							type="image/webp"
							srcSet={poster.webp.mobile}
							media="(max-width: 767px)"
						/>
					)}
					{poster.webp.src && (
						<source type="image/webp" srcSet={poster.webp.src} />
					)}
				</>
			)}
			{poster.original && (
				<>
					{poster.original.mobile && (
						<source
							srcSet={poster.original.mobile}
							media="(max-width: 767px)"
						/>
					)}
					{poster.original.src && <source srcSet={poster.original.src} />}
				</>
			)}
			<img
				ref={imgRef}
				className={withoutSkeleton ? css.img : `${css.img} ${css.imgReveal}`}
				src={
					poster?.avif?.src ||
					poster?.webp?.src ||
					poster?.original?.src ||
					poster?.original?.mobile ||
					undefined
				}
				// Ни одна точка вызова не передавала alt, и все 65 картинок
				// на главной получали одинаковую английскую подпись. Для
				// оформительских изображений правильный alt — пустой.
				alt={alt ?? ""}
				fetchPriority={fetchPriority}
				loading={loading ?? "lazy"}
				decoding={decoding ?? "async"}
				width={width}
				height={height}
				// Ошибка тоже снимает скелетон: иначе битая картинка
				// анимировалась бы бесконечно.
				onLoad={() => setIsLoaded(true)}
				onError={() => setIsLoaded(true)}
			/>
		</picture>
	);
}
