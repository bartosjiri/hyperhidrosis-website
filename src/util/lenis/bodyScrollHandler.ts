import { writable, get, type Writable } from 'svelte/store';
import Lenis from '@studio-freight/lenis';

export const scrollInstance: Writable<Lenis | null> = writable(null);

const requestLenisFrame = (time: unknown) => {
	const lenisInstance = get(scrollInstance);
	lenisInstance?.raf(time);
	requestAnimationFrame(requestLenisFrame);
};

export const initInstance = (config: any = {}) => {
	const lenisInstance = new Lenis(config);

	scrollInstance.set(lenisInstance);
	requestLenisFrame(0);
};

export const startInstance = () => {
	const lenisInstance = get(scrollInstance);
	lenisInstance?.start();
};

export const stopInstance = () => {
	const lenisInstance = get(scrollInstance);
	lenisInstance?.stop();
};
