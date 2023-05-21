import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async ( {locals, parent }) => {
    await parent();
    const user = await locals.getSession();
    if(user) throw redirect(301, "/provider")
}