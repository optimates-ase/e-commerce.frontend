/*
import { favorites } from '$lib/stores';
import type { Tour } from '$lib/types';

export const load = async () => {
	let favids: string[] = [];
	const unsubscribe = favorites.subscribe((value) => {
		favids = value;
	});
	console.log(favids);
	let data = {};

	favids.forEach(async (id) => {
		const url: string = 'http://localhost:8000/tours/?id=' + id;
		const response = await fetch(url);
		console.log(response);
		//data.push(response.data);
	});

	unsubscribe();
	return data;
};
*/
