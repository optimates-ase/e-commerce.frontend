import { v4 as uuidv4 } from 'uuid';
import { writable } from 'svelte/store';
import { browser } from '$app/environment';

const data = browser ? JSON.parse(window.localStorage.getItem('OMdistrictMappings')) ?? [] : [];

export const activeDis = writable<string>('BLZ.1_1');
export const districtMap = writable<string[]>(data);

activeDis.subscribe((value) => {
	if (browser) {
		localStorage.setItem('OMdistrictMappings', JSON.stringify(value));
	}
});

export const addDistrict = () => {
	districtMap.update((districts) => {
		return [...districts, { id: uuidv4(), name: '' }];
	});
};
