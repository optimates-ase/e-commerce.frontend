import { toursCollection } from '$db/collections/tours';
import type { Tour } from '$lib/types';
import type { Document } from 'mongodb';

export const load = async () => {
	const allTours = await toursCollection
		.aggregate([
			{
				$sample: { size: 10 }
			}
		])
		.toArray();

	const randomTours = allTours.map((tour: Document) => {
		const tourData = tour as Tour;
		return {
			...tourData,
			_id: tour._id.toString(),
			providers: tour.providers.toString()
		};
	});

	return {
		randomTours
	};
};
