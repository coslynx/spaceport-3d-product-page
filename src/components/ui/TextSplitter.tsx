import React, { ReactNode, useMemo } from 'react';
import { clsx } from '../../lib/utils';
import type { ComponentBaseProps } from '../../types';

interface TextSplitterProps extends ComponentBaseProps {
    text: string;
    splitBy?: 'chars' | 'words';
    wordDisplayStyle?: 'inline-block' | 'block';
    charClassName?: string;
    wordClassName?: string;
    className?: string;
}

export function TextSplitter({
    text,
    splitBy = 'chars',
    wordDisplayStyle = 'inline-block',
    charClassName = '',
    wordClassName = '',
    className = '',
    ...props
}: TextSplitterProps): ReactNode {
    const words = useMemo(() => text.split(' '), [text]);

    const textElements = useMemo(() => {
        if (splitBy === 'chars') {
            return text.split('').map((char, charIndex) => (
                <span
                    key={charIndex}
                    className={clsx("split-char inline-block", charClassName)}
                >
                    {char}
                </span>
            ));
        } else {
            return words.map((word, wordIndex) => (
                <span
                    key={wordIndex}
                    className={clsx(wordClassName, wordDisplayStyle === 'block' ? 'block' : 'inline-block')}
                    style={{ display: wordDisplayStyle === 'block' ? 'block' : 'inline-block' }}
                >
                    {word.split('').map((char, charIndex) => (
                        <span
                            key={charIndex}
                            className={clsx("split-char inline-block", charClassName)}
                        >
                            {char}
                        </span>
                    ))}
                    {wordIndex < words.length - 1 && wordDisplayStyle === 'inline-block' && (
                        <>&nbsp;</>
                    )}
                </span>
            ));
        }
    }, [text, splitBy, charClassName, wordClassName, wordDisplayStyle, words]);

    return (
        <>{textElements}</>
    );
}

export default TextSplitter;
export { TextSplitter };