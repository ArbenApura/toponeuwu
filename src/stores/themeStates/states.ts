// IMPORTED TYPES
import type { ThemeMode } from './types';
// IMPORTED LIB-FUNCTIONS
import { writable, get } from 'svelte/store';
import cookie from 'cookiejs';
// IMPORTED FUNCTIONS
import { updateStyleRoot } from './utils';

// DEFAULTS
const DEFAULT_MODE: ThemeMode = 'dark';

// STATES
export const isInitialized = writable<boolean>(false);
export const mode = writable<ThemeMode>(DEFAULT_MODE);
export const themeStates = { isInitialized, mode };

// SUBSCRIPTIONS
mode.subscribe((value) => {
	const isInitialized = get(themeStates.isInitialized);
	if (isInitialized) cookie.set('theme.mode', value);
	updateStyleRoot();
});
