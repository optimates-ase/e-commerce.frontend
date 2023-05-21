import { redirect, type Actions } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { getUserIdByMail } from '$db/collections/users';
import { chatsCollection } from '$db/collections/chats';
import type { Conv, Message } from '$lib/types';
import { goto } from '$app/navigation';

const getUser = async (email: string) => {
	const user = await getUserIdByMail(email);
	if (!user) {
		throw redirect(301, '/profile/onboarding');
	}

	return {
		_id: String(user._id),
		firstName: user.firstName,
		lastName: user.lastName,
		email: user.email,
		phone: user.phone
	};
};

let email:string;

export const load: PageServerLoad = async ({ locals, parent, cookies }) => {
	await parent();
	const session = await locals.getSession();

	if (!session) throw redirect(301, '/login');
	email = String(session.user?.email);


	// TODO replace with reset onboarding page
	// Should never reach here
	if (!email) throw redirect(301, '/logout');

	const user = getUser(email);
	cookies.set('uid', (await user)._id, { path: '/' });
	return { user: user };
};

export const actions: Actions = {
	addConv: async ({ request }) => {
		// TODO validate form data

		const formData = await request.formData();

		

		const jsonify = (e) => {
			const result = e.map(
				(x) =>{
					const {_id, ...rest} = x;
					return rest;
				}
			)
			return result;
			
		}

		//todo add logic to find provider

		//const data = await chatsCollection.find({ user: email}).toArray();
		const data = await chatsCollection.find().toArray();
		const chatsData = jsonify(data);

		if(chatsData.length === 0){

			const conv: Conv = {
				user: email,
				provider: "todo",
				messages: []
			};
			
			
			chatsCollection.insertOne(conv);
		}
        
        throw redirect(301, "../chat");
	}
}