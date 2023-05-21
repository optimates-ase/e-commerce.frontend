import { Server } from 'socket.io';
import client from '../db/mongo'


export default function injectSocketIO(server) {
	const io = new Server(server);
	const chatsCollection = client.collection('chats');

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
