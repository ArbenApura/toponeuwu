// IMPORTED LIB-UTILS
import { writable } from 'svelte/store';
// IMPORTED UTILS
import { themeStates, initializeThemeStates } from './themeStates';
import { mediaStates, initializeMediaStates } from './mediaStates';
import { authStates, initializeAuthStates } from './authStates';
export { themeStates, mediaStates, authStates };

// STATES
export const isInitialized = writable<boolean>(false);
export const stores = { isInitialized };

// UTILS
export const initializeStores = () => {
	initializeThemeStates();
	initializeMediaStates();
	initializeAuthStates();
	isInitialized.set(true);
};
