import { writable, type Writable } from 'svelte/store';

import type { Tour } from './types';

export const selectedDistrict: Writable<string> = writable('');

export const favorites = writable<Tour[]>([]);
