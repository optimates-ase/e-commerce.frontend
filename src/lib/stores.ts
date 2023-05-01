import { writable } from 'svelte/store';
import type { Tour } from './types';

export const favorites = writable<Tour[]>([]);
