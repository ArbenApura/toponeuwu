// IMPORTED LIB-UTILS
import { writable, get } from 'svelte/store';
import cookie from 'cookiejs';
// IMPORTED UTILS
import { stores } from '$stores/index';

// STATES
export const isDark = writable<boolean>(true);
export const themeStates = { isDark };

// SUBSCRIPTIONS
isDark.subscribe((value) => {
	try {
		const isInitialized = get(stores.isInitialized);
		if (isInitialized) cookie.set('theme.isDark', JSON.stringify(value));
	} catch {}
});
