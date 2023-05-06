import { createClient } from 'redis';

export const client = createClient();

client.on('error', (err) => console.log('Redis Client Error', err));

await client.connect();

await client.set('key1', 'This is a test!!!!!!!');
const value = await client.get('key1');
console.log(value);
await client.disconnect();
