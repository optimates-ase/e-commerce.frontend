import { writable, type Writable } from 'svelte/store';

import type { Conv, Order, Tour } from './types';

export const selectedDistrict: Writable<string> = writable('');

export const favorites = writable<Tour[]>([]);

export const sender: Writable<string> = writable('');

export const chat = writable<Conv[]>();

export const orders = writable<Order[]>([]);
