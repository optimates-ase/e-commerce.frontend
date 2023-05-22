import { MongoClient } from 'mongodb';

const client = new MongoClient("mongodb://0.0.0.0:27017/optimates");

export function startMongo() {
	console.log('Starting mongo client...');
	return client.connect();
}

export default client.db();
