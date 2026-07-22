/** biome-ignore-all lint/a11y/noSvgWithoutTitle: intentional suppression */
/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: intentional suppression */

'use client';

import { type ComponentPropsWithoutRef, type ReactNode, useId } from 'react';

import css from './index.module.css';

export type CheckboxProps = Omit<
    ComponentPropsWithoutRef<'input'>,
    'type' | 'children'
> & {
    label?: ReactNode;
    hint?: string;
    error?: string;
    className?: string;
};

export default function Checkbox({
    label,
    hint,
    error,
    className = '',
    id,
    disabled,
    ...rest
}: CheckboxProps) {
    const generatedId = useId();
    const checkboxId = id ?? generatedId;

    return (
        <div
            className={`${css.root} ${error ? css.hasError : ''} ${disabled ? css.disabled : ''} ${className}`.trim()}
        >
            <label htmlFor={checkboxId} className={css.label}>
                <span className={css.checkboxWrapper}>
                    <input
                        {...rest}
                        id={checkboxId}
                        type="checkbox"
                        disabled={disabled}
                        className={css.input}
                    />
                    <span className={css.box} aria-hidden>
                        <svg
                            className={css.checkmark}
                            viewBox="0 0 12 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M1 5L4.5 8.5L11 1"
                                stroke="var(--color-black-1)"
                                strokeWidth="1.8"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    </span>
                </span>

                {label && <div className={css.labelText}>{label}</div>}
            </label>

            {(error || hint) && (
                <span
                    className={`${css.message} ${error ? css.errorMessage : ''}`}
                >
                    {error ?? hint}
                </span>
            )}
        </div>
    );
}
