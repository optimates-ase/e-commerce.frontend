import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

const getUser = async (email: string, csrfToken: string) => {
	const req = await fetch(`http://localhost:8000/customers/?email=${email}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'X-CSRFToken': csrfToken
		}
	});
	if (req.status != 200) {
		throw redirect(301, '/profile/onboarding');
	}

	const resp = await req.json();

	return {
		uid: resp['_id'],
		firstName: resp['firstname'],
		lastName: resp['lastname'],
		email: resp['email']
	};
};

export const load: PageServerLoad = async ({ locals, parent, cookies }) => {
	await parent();
	const session = await locals.getSession();

	if (!session) throw redirect(301, '/login');
	const email = session.user?.email;
	
	// TODO replace with reset onboarding page
	// Should never reach here
	if (!email) throw redirect(301, '/logout');
	
	const uid = cookies.get('uid');

	if (!uid) {
		const user = getUser(email, String(cookies.get('csrftoken')));
		cookies.set('uid', (await user).uid, { path: '/' });
	}
};
