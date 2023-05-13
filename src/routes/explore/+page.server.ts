import { toursCollection } from '$db/collections/tours';
import type { Tour } from '$lib/types';

export const load = async () => {
	const allTours = await toursCollection.find().toArray();

	const randomTours = allTours.map((tour: Tour) => {
		return {
			...tour,
			_id: tour._id.toString()
		};
	});

	return { randomTours };
};
