import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getUser } from './utils';
import { toursCollection } from '$db/collections/tours';
import { ObjectId } from 'mongodb';

const loadTours = async (providerId?: string) => {
	let cursor
	if (providerId){
		 cursor = toursCollection.find({providers: {$in: [new ObjectId(providerId)]}});
	} else {
		cursor = toursCollection.find();
	}
	const tours = (await cursor.toArray()).map((tour) => {
		const { _id, providers, ...tourData } = tour;
		tourData._id = _id.toString();
		return {
			tourData
		};
	});
	return tours;
};

export const load: PageServerLoad = async ({ locals, parent, cookies }) => {
	await parent();
	const session = await locals.getSession();

	if (!session) throw redirect(301, '/provider/login');

	const email = session.user?.email;

	// Should never reach here
	if (!email) throw redirect(301, '/logout');
	const provider = await getUser(email, '/provider/contact');
	const signUpTours = loadTours(provider._id);
	const availableTours = loadTours();
	cookies.set('uid', provider._id, { path: '/' });
	return { provider: provider, signUpTours: signUpTours, availableTours };
};
