// src/data-fetcher.js (or data-fetcher.ts for TypeScript)

import { chatsCollection } from '$db/collections/chats';
import type { Conv, Message } from '$lib/types';
import type {  PageServerLoad } from './$types';
import {redirect, type Actions } from '@sveltejs/kit';

let email:string;

export const load: PageServerLoad = async ({ locals, parent, cookies }) => {
		await parent();
		const session = await locals.getSession();
	
		if (!session) throw redirect(301, '/provider/login');
		
		email = String(session.user?.email);

	const jsonify = (e) => {
		const result = e.map(
			(x) =>{
				const {_id, ...rest} = x;
				return rest;
			}
		)
		return result;
		
	}
	
	const data = await chatsCollection.find({}).toArray();
	let chatsData = jsonify(data);

	
	return { chats: chatsData};
}

export const actions: Actions = {
	addMessage: async ({ request }) => {
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
		
		const data = await chatsCollection.find({}).toArray();
	
		const chatsData = jsonify(data);

		const conversation:Conv = chatsData[0];

		const currentDate = new Date(); 
        const timestamp = currentDate.getTime()
		
		
		
        const message: Message = {
			content: String( formData.get('content')),
			sender: email,
			timestamp: timestamp
		};
		
		const messages = [...conversation.messages, message]
		
        chatsCollection.findOneAndUpdate({ provider: conversation.provider, user: conversation.user}, { $set: {messages:messages} })
        
	}
};

