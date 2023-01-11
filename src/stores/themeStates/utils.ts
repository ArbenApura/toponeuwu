// IMPORTED LIB-UTILS
import cookie from 'cookiejs';
// IMPORTED UTILS
import { isDark, themeStates } from './states';

// UTILS
export const toggleTheme = () => isDark.update((value) => !value);
export const loadStoredData = () => {
	const isDark = cookie.get('theme.isDark') as string;
	if (!isDark) return;
	themeStates.isDark.set(JSON.parse(isDark));
};
export const initializeThemeStates = () => {
	loadStoredData();
};
