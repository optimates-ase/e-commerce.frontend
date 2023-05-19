import client from '$db/mongo';
import type { Conv } from '$lib/types';

export const chatsCollection = client.collection<Conv>('chats');

export const createConv = async (conv:Conv) => {


    const data = await chatsCollection.find().toArray();


            const chatsData = jsonify(data);

            if(chatsData.length === 0){

                
                
                
                chatsCollection.insertOne(conv);
    }
}