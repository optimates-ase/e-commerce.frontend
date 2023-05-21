import { MongoClient } from 'mongodb';
// import { VITE_MONGO_URL } from '$env/static/private';

const client = new MongoClient("mongodb://mongodb:27017/optimates");

export function startMongo() {
	console.log('Starting mongo client...');
	return client.connect();
}

export default client.db();
