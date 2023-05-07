import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";


export const load: PageServerLoad = async ({ cookies, parent}) => {
    await parent();
    cookies.delete("uid");
    console.log(cookies.getAll())
    throw redirect(301, "http://localhost:5173");
}