import { signupSchema } from "$comp/forms/schemas/signupSchema";
import { fail, type Actions, redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types";
import type { User } from "$lib/types";
import { createUser } from "$db/collections/users";

export const load: PageServerLoad = async ({ cookies, locals, parent }) => {
    await parent();
    const auth = await locals.getSession()
    if(!auth) throw redirect(301, "/login")

    const uid = cookies.get("uid")
    if(uid) throw redirect(301, "/profile")    
}

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
        
        const user: User = {
            firstName: String(formData.get("firstName")),
            lastName: String(formData.get("lastName")),
            birthdate: new Date(String(formData.get("birthdate"))),
            email: String(emailAddress),
            phone: String(formData.get("phone"))
        }

        const req = await createUser(user);
        cookies.set("uid", req, {path: "/"})

        throw redirect(301, "/profile");
    }
}