// TYPES
import type { ThemeMode } from './types';
// LIB-FUNCTIONS
import { get } from 'svelte/store';
// FUNCTIONS
import { palette } from '$utils/palette';
// STATES
import { themeStates } from './states';

// UTILS
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
			// setStyleProperty('--text-color', palette.dark[1]);
			// setStyleProperty('--bg-color', palette.light[0]);
			setStyleProperty('--border-color', palette.light[3]);
	}
};
export const initializeThemeStates = () => {
	updateStyleRoot();
};
