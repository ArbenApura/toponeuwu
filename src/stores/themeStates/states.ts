// TYPES
import type { ThemeMode } from './types';
// LIB-FUNCTIONS
import { writable } from 'svelte/store';
// FUNCTIONS
import { updateStyleRoot } from './utils';

// DEFAULTS
const DEFAULT_MODE: ThemeMode = 'dark';

// STATES
const mode = writable<ThemeMode>(DEFAULT_MODE);
export const themeStates = { mode };

// SUBSCRIPTIONS
mode.subscribe(() => updateStyleRoot());
