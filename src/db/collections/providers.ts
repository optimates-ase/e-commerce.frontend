import db from '$db/mongo';
import type { Address, User } from '$lib/types';
import { ObjectId } from 'mongodb';

export const providerCollection = db.collection('provider');

export const createProvider = async (provider) => {
	let result;
	try {
		result = await providerCollection.insertOne(provider);
		console.log(
			`${provider.firstName} ${provider.lastName} created with _id: ${result.insertedId}`
		);
	} catch (error: any) {
		console.log('ERROR:', error);
	}
	return String(result?.insertedId);
};

export const addAddress = async (_id, address: Address) => {
	let result;
	try {
		result = providerCollection.findOneAndUpdate({ _id: new ObjectId(_id) }, {$set : address});
		//TODO check whether address has been added successfully
	} catch (error: any) {
		console.log('ERROR:', error);
	}
};

export const getProviderIdByMail = async (mail: string) => {
	let result;
	try {
		result = await providerCollection.findOne({ email: mail });
	} catch (error: any) {
		console.log('ERROR:', error);
	}
	return result;
};
