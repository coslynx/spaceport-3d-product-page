import React from 'react';

interface GlobalState {
    ready: boolean;
    currentFlavor: number;
}

let globalReady = false;
let globalCurrentFlavor = 0;
const readyListeners: ((ready: boolean) => void)[] = [];
const flavorListeners: ((flavor: number) => void)[] = [];

export function useStore<T>(selector: (state: GlobalState) => T): T {

    const state = {
        ready: globalReady,
        currentFlavor: globalCurrentFlavor,
    };

    return selector(state);
}

export function setReady(ready: boolean) {
    globalReady = ready;
    readyListeners.forEach(listener => listener(ready));
}

export function setCurrentFlavor(flavor: number) {
    globalCurrentFlavor = flavor;
    flavorListeners.forEach(listener => listener(flavor));
}

export function StoreProvider({ children }: { children: React.ReactNode }) {
    return children as React.ReactElement;
}

export default useStore;
export { useStore, setReady, setCurrentFlavor, StoreProvider };