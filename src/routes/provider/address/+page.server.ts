import { fail, redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getUser } from '../utils';
import { addAddress } from '$db/collections/providers';
import { addressSchema } from '$comp/Forms/schemas/validations';

export const load: PageServerLoad = async ({ locals, parent, cookies }) => {
	await parent();
	const session = await locals.getSession();

	if (!session) throw redirect(301, '/provider/login');
	const email = session.user?.email;

	// // TODO replace with reset onboarding page
	// // Should never reach here
	if (!email) throw redirect(301, '/logout');

	const uid = cookies.get('uid');

	if (!uid) {
		const provider = getUser(email);
		cookies.set('uid', (await provider)._id, { path: '/' });
		return { provider: provider };
	}
};

export const actions: Actions = {
	addProviderAddress: async ({ request, fetch, cookies, locals }) => {
		// TODO validate form data
		const formData = await request.formData();
		const result = addressSchema.safeParse(formData);

		if (!result.success) {
			const data = {
				data: Object.fromEntries(formData),
				errors: result.error.flatten().fieldErrors
			};
			console.log('Invalid form', data.errors);

			return fail(400, data);
		}

		const address = {
			street: String(formData.get('street')),
			streetNumber: String(formData.get('streetNumber')),
			zipCode: String(formData.get('zipCode')),
			city: String(formData.get('city')),
			country: String(formData.get('country'))
		};
		const _id = cookies.get('uid');
		console.log(_id)
		
        await addAddress(_id, address);

		throw redirect(301, '/provider');
	}
};
