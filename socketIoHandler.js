import { Server } from 'socket.io';
import { MongoClient } from 'mongodb';
// import { PUBLIC_MONGO_URL } from '$env/static/public';

const client = new MongoClient('mongodb://localhost:27017/optimates');

export default function injectSocketIO(server) {
	const io = new Server(server);
	client.connect();
	const chatsCollection = client.db().collection('chats');

	io.on('connection', (socket) => {
		let username = `User ${Math.round(Math.random() * 999999)}`;
		socket.emit('name', username);

		socket.on('message', (message) => {
			io.emit('message', chatsCollection.find().toArray());

			io.emit('message', {
				message: message,
				time: new Date().toLocaleString()
			});
		});
	});

	console.log('SocketIO injected');
}
