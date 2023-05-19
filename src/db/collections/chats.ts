import client from '$db/mongo';
import type { Conv } from '$lib/types';

export const chatsCollection = client.collection<Conv>('chats');
