import Stripe from 'stripe';
import type { RequestHandler } from '../$types';
import { SECRET_STRIPE_TEST_KEY } from '$env/static/private';
import { json } from '@sveltejs/kit';

const stripe = new Stripe(SECRET_STRIPE_TEST_KEY, {
	apiVersion: '2022-11-15'
});

export const POST: RequestHandler = async ({ request }) => {
	const { price } = await request.json();

	const paymentIntent = await stripe.paymentIntents.create({
		amount: price,
		currency: 'usd',
		payment_method_types: ['card'],
		metadata: { uid: 'some_userID' }
	});

	return json(paymentIntent);
};
