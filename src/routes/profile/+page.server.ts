import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getUserIdByMail } from '$db/collections/users';

const getUser = async (email: string) => {
	const user = await getUserIdByMail(email)
	if (!user) {
		throw redirect(301, '/profile/onboarding');
	}

	return {
		uid: String(user._id),
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email,
		phone: user.phone
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
		const user = getUser(email);
		cookies.set('uid', (await user).uid, { path: '/' });
		return {user: user};
	}
};
