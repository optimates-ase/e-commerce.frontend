import { signupSchema } from "$comp/forms/schemas/signupSchema";
import { fail, type Actions, redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types";

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
        const createUser = {
            session_id: cookies.get("sessionid"),
            session_token: cookies.get("next-auth.session-token"),
            firstname: formData.get("firstName"),
            lastname: formData.get("lastName"),
            birthdate: formData.get("birthdate"),
            email_address: emailAddress,
            phone_number: formData.get("phone")
        }

        const req = await fetch("http://localhost:8000/customers/create/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": String(cookies.get("csrftoken"))
            },
            body: JSON.stringify(createUser)
        });

        const resp = await req.json();
        cookies.set("uid", resp.data["_id"], { path: '/' });
        throw redirect(301, "/profile");
    }
}