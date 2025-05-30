import React, { ReactNode } from 'react';
import { clsx } from '../../lib/utils';
import styles from './Button.module.css';

interface ButtonProps {
    children: ReactNode;
    className?: string;
    href?: string;
    onClick?: () => void;
    variant?: 'primary' | 'secondary' | 'tertiary';
    size?: 'small' | 'medium' | 'large';
    disabled?: boolean;
    isLoading?: boolean;
    'aria-label'?: string;
}

export function Button({
    children,
    className,
    href,
    onClick,
    variant = 'primary',
    size = 'medium',
    disabled = false,
    isLoading = false,
    'aria-label': ariaLabel
}: ButtonProps) {
    const baseClasses = clsx(
        styles.button,
        {
            [styles.primary]: variant === 'primary',
            [styles.secondary]: variant === 'secondary',
            [styles.tertiary]: variant === 'tertiary',
            [styles.small]: size === 'small',
            [styles.medium]: size === 'medium',
            [styles.large]: size === 'large',
            [styles.loading]: isLoading,
        },
        className
    );

    const Component = href ? 'a' : 'button';

    const handleClick = (e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>) => {
        if (isLoading || disabled) {
            e.preventDefault();
            return;
        }
        onClick?.();
    };

    return (
        <Component
            className={baseClasses}
            href={href}
            onClick={handleClick}
            disabled={disabled || isLoading}
            aria-label={ariaLabel}
        >
            {children}
        </Component>
    );
}

export default Button;
export { Button };