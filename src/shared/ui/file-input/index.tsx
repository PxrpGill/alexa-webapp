"use client";

import {
	type ChangeEvent,
	type ComponentPropsWithoutRef,
	type DragEvent,
	useId,
	useRef,
	useState,
} from "react";

import DownloadSVG from "@/public/icons/download.svg";
import XSVG from "@/public/icons/x.svg";

import css from "./index.module.css";

export type FileInputSize = "s" | "m" | "l";

export type FileInputProps = Omit<
	ComponentPropsWithoutRef<"input">,
	"size" | "type" | "multiple" | "value" | "onChange"
> & {
	label?: string;
	hint?: string;
	error?: string;
	size?: FileInputSize;
	multiple?: boolean;
	accept?: string;
	disabled?: boolean;
	files: File[];
	onFilesChange: (files: File[]) => void;
	className?: string;
	placeholder?: string;
};

function filterAccepted(accepted: File[], accept?: string): File[] {
	if (!accept) return accepted;

	const rules = accept
		.split(",")
		.map((rule) => rule.trim().toLowerCase())
		.filter(Boolean);

	if (rules.length === 0 || rules.includes("*/*")) return accepted;

	return accepted.filter((file) =>
		rules.some((rule) => {
			if (rule.startsWith(".")) {
				return file.name.toLowerCase().endsWith(rule);
			}
			
			if (rule.endsWith("/*")) {
				return file.type.toLowerCase().startsWith(rule.slice(0, -1));
			}

			return file.type.toLowerCase() === rule;
		}),
	);
}

export default function FileInput({
	label,
	hint,
	error,
	size = "m",
	multiple = false,
	accept,
	disabled,
	files,
	onFilesChange,
	className = "",
	id,
	name,
	placeholder,
}: FileInputProps) {
	const generatedId = useId();
	const inputId = id ?? generatedId;
	const inputRef = useRef<HTMLInputElement>(null);
	const dragCounter = useRef(0);
	const [isDragging, setIsDragging] = useState(false);

	function openPicker() {
		if (disabled) return;
		inputRef.current?.click();
	}

	function handleChange(e: ChangeEvent<HTMLInputElement>) {
		const selected = filterAccepted(Array.from(e.target.files ?? []), accept);
		e.target.value = "";

		if (selected.length === 0) return;

		if (multiple) {
			onFilesChange([...files, ...selected]);
		} else {
			onFilesChange(selected.slice(0, 1));
		}
	}

	function removeFile(index: number) {
		if (!files?.length) return;

		onFilesChange(files.filter((_, i) => i !== index));
	}

	function handleDragEnter(e: DragEvent<HTMLButtonElement>) {
		e.preventDefault();
		if (disabled) return;
		dragCounter.current += 1;
		setIsDragging(true);
	}

	function handleDragOver(e: DragEvent<HTMLButtonElement>) {
		e.preventDefault();
		if (disabled) return;
		setIsDragging(true);
	}

	function handleDragLeave(e: DragEvent<HTMLButtonElement>) {
		e.preventDefault();
		if (disabled) return;
		dragCounter.current -= 1;
		if (dragCounter.current <= 0) {
			dragCounter.current = 0;
			setIsDragging(false);
		}
	}

	function handleDrop(e: DragEvent<HTMLButtonElement>) {
		e.preventDefault();
		dragCounter.current = 0;
		setIsDragging(false);
		if (disabled) return;

		const dropped = filterAccepted(Array.from(e.dataTransfer.files), accept);
		if (dropped.length === 0) return;

		if (multiple) {
			onFilesChange([...files, ...dropped]);
		} else {
			onFilesChange(dropped.slice(0, 1));
		}
	}

	return (
		<div
			className={`${css.root} ${css[size]} ${error ? css.hasError : ""} ${disabled ? css.disabled : ""} ${className}`.trim()}
		>
			{label && (
				<label htmlFor={inputId} className={css.label}>
					{label}
				</label>
			)}

			<input
				ref={inputRef}
				id={inputId}
				name={name}
				type="file"
				multiple={multiple}
				accept={accept}
				disabled={disabled}
				onChange={handleChange}
				className={css.nativeInput}
				tabIndex={-1}
				aria-hidden
			/>

			<button
				type="button"
				className={`${css.dropzone} ${isDragging ? css.dragging : ""}`.trim()}
				onClick={openPicker}
				onDragEnter={handleDragEnter}
				onDragOver={handleDragOver}
				onDragLeave={handleDragLeave}
				onDrop={handleDrop}
				disabled={disabled}
			>
				<DownloadSVG className={css.icon} />
				<span className={css.placeholder}>{placeholder}</span>
				<span className={css.focusBar} aria-hidden />
			</button>

			{files?.length > 0 && (
				<ul className={css.fileList}>
					{files.map((file, index) => (
						<li
							key={`${file.name}-${file.size}-${file.lastModified}`}
							className={css.fileItem}
						>
							<span className={css.fileName}>{file.name}</span>
							<button
								type="button"
								className={css.removeButton}
								onClick={() => removeFile(index)}
								aria-label={`Удалить ${file.name}`}
								disabled={disabled}
							>
								<XSVG />
							</button>
						</li>
					))}
				</ul>
			)}

			{(error || hint) && (
				<span className={`${css.message} ${error ? css.errorMessage : ""}`}>
					{error ?? hint}
				</span>
			)}
		</div>
	);
}
