import { signupSchema } from "$comp/forms/schemas/signupSchema";
import { fail, type Actions, redirect } from "@sveltejs/kit"
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ locals, parent }) => {
    await parent();

    console.log(locals.user)

    if(locals.user) throw redirect(301, "/my")
}

export const actions: Actions = {
    register: async ({ request, fetch, cookies, locals }) => {
        
        const formData = await request.formData();
        const result = signupSchema.safeParse(formData);

        if (!result.success){
            const data = {
                data: Object.fromEntries(formData),
                errors: result.error.flatten().fieldErrors
            };
            console.log(data.errors)

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
            phone_number: formData.get("phone"),
            residence_street: `${formData.get("residenceStreet")} ${formData.get("residenceStreetNumber")}`,
            residence_zip: formData.get("residenceZipCode"),
            residence_city: formData.get("residenceCity"),
            residence_country: formData.get("residenceCountry"),
            billing_street: `${formData.get("billingStreet")} ${formData.get("residenceStreetNumber")}`,
            billing_zip: formData.get("billingZipCode"),
            billing_city: formData.get("billingCity"),
            billing_country: formData.get("billingCountry")
        }
        console.log(createUser)

        const req = await fetch("http://localhost:8000/customers/create/", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "X-CSRFToken": String(cookies.get("csrftoken"))
            },
            body: JSON.stringify(createUser)
        });

        const resp = await req.json();

        locals.user = {
            id: resp.data["_id"],
            firstname: String(createUser.firstname),
            lastname: String(createUser.lastname)
        }

        console.log(locals.user)
                
        throw redirect(301, "/my");
    }
}