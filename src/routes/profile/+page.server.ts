import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, parent, cookies, params, request }) => {
	await parent();
	const session = await locals.getSession();
	if (!session) throw redirect(301, '/login');

    // console.log(request)

	const email = session.user?.email;

	const req = await fetch(`http://localhost:8000/customers/?email=${email}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			'X-CSRFToken': String(cookies.get('csrftoken'))
		}
	});
	if (req.status == 404) throw redirect(301, '/profile/onboarding');

	const resp = await req.json();
    cookies.set("uid", resp.data["_id"], { path: '/' });
    
    const user = resp.data["_source"]

    return { user: user }
};
