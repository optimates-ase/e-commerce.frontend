import { toursCollection } from '$db/collections/tours';
import type { Document } from 'mongodb';
import type { Tour } from '$lib/types';

export const load = async () => {
	const allTours = await toursCollection
		.aggregate([
			{
				$sample: { size: 10 }
			}
		])
		.toArray();

	const randomTours = allTours.map((tour: Document) => {
		return {
			...tour,
			_id: tour._id.toString()
		};
	});

	return {
		randomTours
	};
};
