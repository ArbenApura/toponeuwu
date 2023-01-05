// IMPORTED TYPES
import type { ThemeMode } from './types';
// IMPORTED LIB-FUNCTIONS
import { get } from 'svelte/store';
import cookie from 'cookiejs';
// IMPORTED FUNCTIONS
import { palette } from '$utils/palette';
// IMPORTED STATES
import { isInitialized, mode, themeStates } from './states';

// UTILS
export const toggleTheme = () => mode.update((value) => (value == 'light' ? 'dark' : 'light'));
export const loadStoredData = () => {
	const mode = cookie.get('theme.mode') as ThemeMode;
	if (!mode) return;
	themeStates.mode.set(mode);
};
export const setStyleProperty = (key: string, value: string) => {
	try {
		document.documentElement.style.setProperty(key, value);
	} catch {}
};
export const updateStyleRoot = () => {
	const mode: ThemeMode = get(themeStates.mode);
	switch (mode) {
		case 'dark':
			palette.light.map((value, index) => {
				setStyleProperty(`--text-color-${index + 1}`, value);
			});
			palette.dark.map((value, index) => {
				setStyleProperty(`--bg-color-${index + 1}`, value);
			});
			// setStyleProperty('--text-color', palette.light[1]);
			// setStyleProperty('--bg-color', palette.dark[0]);
			setStyleProperty('--border-color', palette.dark[3]);
			break;
		default:
			palette.dark.map((value, index) => {
				setStyleProperty(`--text-color-${index + 1}`, value);
			});
			palette.light.map((value, index) => {
				setStyleProperty(`--bg-color-${index + 1}`, value);
			});
			setStyleProperty('--border-color', palette.light[3]);
	}
};
export const initializeThemeStates = () => {
	loadStoredData();
	updateStyleRoot();
	isInitialized.set(true);
};
