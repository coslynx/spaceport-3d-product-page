import React, { ReactNode } from 'react';
import { clsx } from '../../lib/utils';
import type { ComponentBaseProps } from '../../types';

interface BoundedProps extends ComponentBaseProps {
    children: ReactNode;
    className?: string;
    'data-slice-type'?: string;
    'data-slice-variation'?: string;
    as?: keyof JSX.IntrinsicElements;
}

export function Bounded({
    children,
    className,
    'data-slice-type': dataSliceType,
    'data-slice-variation': dataSliceVariation,
    as: Element = 'section',
    ...props
}: BoundedProps) {
    return (
        <Element
            className={clsx('px-4 py-10 md:px-6 md:py-14 lg:py-16', className)}
            data-slice-type={dataSliceType}
            data-slice-variation={dataSliceVariation}
            {...props}
        >
            <div className="mx-auto w-full max-w-7xl">
                {children}
            </div>
        </Element>
    );
}

export default Bounded;
export { Bounded };