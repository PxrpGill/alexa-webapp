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
	/**
	 * Срабатывает, когда картинка готова к показу: load, error или уже
	 * закэширована. Нужен тем, кто ждёт контент, — например плееру сторисов,
	 * который не начинает отсчёт, пока кадр не загрузился.
	 */
	onReady?: () => void;
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
	onReady,
}: PictureProps) {
	const imgRef = useRef<HTMLImageElement>(null);
	const [isLoaded, setIsLoaded] = useState(false);

	// Колбэк держим в ref: иначе новая стрелка на каждый рендер родителя
	// гоняла бы mount-эффект заново. Синхронизация объявлена выше проверки на
	// complete, а эффекты срабатывают по порядку объявления — к ней ref уже
	// актуален.
	const onReadyRef = useRef(onReady);

	useEffect(() => {
		onReadyRef.current = onReady;
	});

	const handleLoaded = () => {
		setIsLoaded(true);
		onReadyRef.current?.();
	};

	// Закэшированная (или eager) картинка успевает отрисоваться до гидратации,
	// её load уже не придёт — без этой проверки скелетон остался бы висеть.
	useEffect(() => {
		const img = imgRef.current;

		if (img?.complete && img.naturalWidth > 0) {
			setIsLoaded(true);
			onReadyRef.current?.();
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
				onLoad={handleLoaded}
				onError={handleLoaded}
			/>
		</picture>
	);
}
