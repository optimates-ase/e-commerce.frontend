import client from '$db/mongo';
import type { Tour } from '$lib/types';

export const toursCollection = client.collection<Tour>('tours');
