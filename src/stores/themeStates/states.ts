// IMPORTED TYPES
import type { ThemeMode } from './types';
// IMPORTED LIB-UTILS
import { writable, get } from 'svelte/store';
import cookie from 'cookiejs';
// IMPORTED UTILS
import { updateStyleRoot } from './utils';
import { stores } from '$stores/index';

// DEFAULTS
const DEFAULT_MODE: ThemeMode = 'dark';

// STATES
export const mode = writable<ThemeMode>(DEFAULT_MODE);
export const themeStates = { mode };

// SUBSCRIPTIONS
mode.subscribe((value) => {
	const isInitialized = get(stores.isInitialized);
	if (isInitialized) cookie.set('theme.mode', value);
	updateStyleRoot();
});
