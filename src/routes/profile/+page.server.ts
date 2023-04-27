import { redirect } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ locals, parent }) => {
	await parent();
    const user = await locals.getSession()
    console.log(locals)
    if(!user) throw redirect(301, "/login")
};
