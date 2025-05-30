import { useEffect, useRef, useState, useCallback } from 'react';
import * as THREE from 'three';
import gsap from 'gsap';

interface AnimationOptions {
    duration?: number;
    ease?: string;
    delay?: number;
    repeat?: number;
    yoyo?: boolean;
}

function useObjectAnimation<T extends THREE.Object3D>(
    object: React.MutableRefObject<T | null | undefined>,
    property: string,
    targetValue: number | number[] | { [key: string]: number },
    options: AnimationOptions = {}
): {
    play: () => void;
    pause: () => void;
    reverse: () => void;
    seek: (time: number) => void;
    isActive: () => boolean;
    timeline: gsap.core.Timeline | null;
} {
    const timelineRef = useRef<gsap.core.Timeline | null>(null);
    const [isActive, setIsActive] = useState(false);

    const play = useCallback(() => {
        if (timelineRef.current) {
            timelineRef.current.play();
            setIsActive(true);
        }
    }, []);

    const pause = useCallback(() => {
        if (timelineRef.current) {
            timelineRef.current.pause();
            setIsActive(false);
        }
    }, []);

    const reverse = useCallback(() => {
        if (timelineRef.current) {
            timelineRef.current.reverse();
        }
    }, []);

    const seek = useCallback((time: number) => {
        if (timelineRef.current) {
            timelineRef.current.seek(time);
        }
    }, []);

    useEffect(() => {
        if (!object.current) {
            console.error("useObjectAnimation: object.current is null or undefined");
            return;
        }

        const obj = object.current;

        const {
            duration = 1,
            ease = "power3.inOut",
            delay = 0,
            repeat = 0,
            yoyo = false
        } = options;

        try {
            const gsapTarget: gsap.TweenTarget = obj[property as keyof THREE.Object3D];

            if (!gsapTarget) {
                console.error(`useObjectAnimation: Property "${property}" not found on object`);
                return;
            }

            const animationVars: gsap.TweenVars = {
                duration,
                ease,
                delay,
                repeat,
                yoyo,
                onComplete: () => {
                    setIsActive(false);
                },
                onStart: () => {
                    setIsActive(true);
                },
            };

            if (typeof targetValue === 'number') {
                animationVars[property] = targetValue;
            } else if (Array.isArray(targetValue)) {
                animationVars[property] = targetValue;
            } else if (typeof targetValue === 'object' && targetValue !== null) {
                animationVars = {
                    ...animationVars,
                    ...targetValue
                };
            } else {
                console.error("useObjectAnimation: Invalid targetValue");
                return;
            }

            timelineRef.current = gsap.to(gsapTarget, animationVars);
            return () => {
                if (timelineRef.current) {
                    timelineRef.current.kill();
                }
            };
        } catch (e: any) {
            console.error("useObjectAnimation: Error creating animation", e);
            return;
        }
    }, [object, property, targetValue, options]);

    return {
        play,
        pause,
        reverse,
        seek,
        isActive: () => isActive,
        timeline: timelineRef.current
    };
}

export function useFloatingAnimation(
    object: React.MutableRefObject<THREE.Object3D | null | undefined>,
    intensity: number = 0.1
) {
    useEffect(() => {
        if (!object.current) return;

        const originalY = object.current.position.y;

        const timeline = gsap.timeline({ repeat: -1, yoyo: true });

        timeline.to(object.current.position, {
            y: originalY + intensity,
            duration: 1.5,
            ease: 'sine.inOut'
        });

        timeline.to(object.current.position, {
            y: originalY - intensity,
            duration: 1.5,
            ease: 'sine.inOut'
        });

        return () => {
            timeline.kill();
        };
    }, [object, intensity]);
}

export function useRotatingAnimation(
    object: React.MutableRefObject<THREE.Object3D | null | undefined>,
    speed: number = 0.5,
    axis: 'x' | 'y' | 'z' = 'y'
) {
    useEffect(() => {
        if (!object.current) return;

        const timeline = gsap.timeline({ repeat: -1 });

        timeline.to(object.current.rotation, {
            [axis]: Math.PI * 2,
            duration: 1 / speed,
            ease: 'none',
        });

        return () => {
            timeline.kill();
        };
    }, [object, speed, axis]);
}

export default useObjectAnimation;
export { useObjectAnimation };