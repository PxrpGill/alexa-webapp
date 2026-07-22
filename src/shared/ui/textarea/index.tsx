'use client';

import {
    type ComponentPropsWithoutRef,
    forwardRef,
    useCallback,
    useEffect,
    useId,
    useImperativeHandle,
    useRef,
} from 'react';

import css from './index.module.css';

export type TextareaSize = 's' | 'm' | 'l';

export type TextareaProps = ComponentPropsWithoutRef<'textarea'> & {
    label?: string;
    hint?: string;
    error?: string;
    size?: TextareaSize;
    className?: string;
};

const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
    function Textarea(
        {
            label,
            hint,
            error,
            size = 'm',
            className = '',
            id,
            disabled,
            onChange,
            ...rest
        },
        forwardedRef
    ) {
        const generatedId = useId();
        const textareaId = id ?? generatedId;
        const innerRef = useRef<HTMLTextAreaElement>(null);

        useImperativeHandle(
            forwardedRef,
            () => innerRef.current as HTMLTextAreaElement
        );

        const autoResize = useCallback(() => {
            const el = innerRef.current;
            if (!el) return;
            el.style.height = 'auto';
            el.style.height = `${el.scrollHeight}px`;
        }, []);

        useEffect(() => {
            autoResize();
        }, [autoResize]);

        return (
            <div
                className={`${css.root} ${css[size]} ${error ? css.hasError : ''} ${disabled ? css.disabled : ''} ${className}`.trim()}
            >
                {label && (
                    <label htmlFor={textareaId} className={css.label}>
                        {label}
                    </label>
                )}

                <div className={css.textareaWrapper}>
                    <textarea
                        {...rest}
                        ref={innerRef}
                        id={textareaId}
                        disabled={disabled}
                        className={css.textarea}
                        onChange={(e) => {
                            autoResize();
                            onChange?.(e);
                        }}
                    />

                    <span className={css.focusBar} aria-hidden />
                </div>

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
);

export default Textarea;
