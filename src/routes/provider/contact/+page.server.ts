import { fail, type Actions, redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types";
import { getUser } from "../utils";
import { signupSchema } from "$comp/Forms/schemas/validations";
import { createProvider } from "$db/collections/providers";

export const load: PageServerLoad = async ({ locals, parent, cookies }) => {
	await parent();
	const session = await locals.getSession();

	if (!session) throw redirect(301, '/provider/login');
	const email = session.user?.email;
	
	// // TODO replace with reset onboarding page
	// // Should never reach here
	if (!email) throw redirect(301, '/logout');
	
	const uid = cookies.get('uid');

	if (uid) {
		const provider = getUser(email, "/provider/login");
		cookies.set('uid', (await provider)._id, { path: '/' });
		return {provider: provider};
	}
};

export const actions: Actions = {

    addPersonalInfo: async({ request, fetch, cookies, locals }) => {

        // TODO validate form data
        const formData = await request.formData();
        const result = signupSchema.safeParse(formData);

        if (!result.success){
            const data = {
                data: Object.fromEntries(formData),
                errors: result.error.flatten().fieldErrors
            };
            console.log("Invalid form", data.errors)

            return fail(400, data)
        }

        const emailAddress = await locals.getSession().then((sess) => {return sess?.user?.email})
        
        const provider = {
            firstName: String(formData.get("firstName")),
            lastName: String(formData.get("lastName")),
            birthdate: new Date(String(formData.get("birthdate"))),
            email: String(emailAddress),
            phone: String(formData.get("phone")),
        }

        const req = await createProvider(provider);
        cookies.set("uid", req, {path: "/"})

        throw redirect(301, "/provider/address");
    }
}