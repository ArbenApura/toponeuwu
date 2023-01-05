// IMPORTED TYPES
import type { User } from './types';
// IMPORTED LIB-UTILS
import { writable, get } from 'svelte/store';
// IMPORTED UTILS
import { stores } from '$stores/index';

// DEFAULTS
export const DEFAULT_USER: User = {
	uid: '',
	name: '',
	username: '',
	avatar: 0,
	accountType: 'normal',
	lastOnline: 0,
	createdAt: 0
};

// STATES
export const user = writable<User>(DEFAULT_USER);
export const isAdmin = writable<boolean>(false);
export const isSignedIn = writable<boolean>(false);
export const authStates = { user, isAdmin, isSignedIn };

// SUBSCRIPTIONS
user.subscribe((user) => {
	try {
		const isInitialized = get(stores.isInitialized);
		if (!isInitialized) return;
		if (user.uid !== '') isSignedIn.set(true);
		if (user.accountType === 'admin') isAdmin.set(true);
	} catch {}
});
