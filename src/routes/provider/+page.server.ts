import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getUser } from './utils';

export const load: PageServerLoad = async ({ locals, parent, cookies }) => {
	await parent();
	const session = await locals.getSession();

	if (!session) throw redirect(301, '/provider/login');
    
	const email = session.user?.email;
	
	
	// Should never reach here
	if (!email) throw redirect(301, '/logout');
	
	const uid = cookies.get('uid');

	if (!uid) {
		const provider = getUser(email, "/provider/contact");
		cookies.set('uid', (await provider)._id, { path: '/' });
		return {provider: provider};
	}
};


