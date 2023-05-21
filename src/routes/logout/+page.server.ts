import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ cookies, parent}) => {
    await parent();
    cookies.delete("uid");
    throw redirect(301, "http://localhost");
}