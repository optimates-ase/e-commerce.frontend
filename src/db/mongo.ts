import { MongoClient } from 'mongodb';
// import { PUBLIC_MONGO_URL } from '$env/static/public';

const client = new MongoClient('mongodb://localhost:27017/optimates');

export function startMongo() {
	console.log('Starting mongo client...');
	return client.connect();
}

export default client.db();
