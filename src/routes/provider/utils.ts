import { getProviderIdByMail } from "$db/collections/providers";
import { redirect } from "@sveltejs/kit";

export const getUser = async (email: string, redir: string) => {
	const provider = await getProviderIdByMail(email)
	if (!provider) {
		throw redirect(301, redir);
	}

	return {
		_id: String(provider._id),
		firstName: provider.firstName,
		lastName: provider.lastName,
		email: provider.email,
		phone: provider.phone
	};
};