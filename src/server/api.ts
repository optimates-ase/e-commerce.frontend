import * as Stripe from 'stripe';
const stripe = new Stripe('sk_test_xxxxxxxx'); // TODO Set as Firebase environment variable

import * as express from 'express';
import * as cors from 'cors';

const app = express();
app.use(cors({ origin: true }));

app.post('/intents', async (req, res) => {
	const { amount } = req.body;

	const paymentIntent = await stripe.paymentIntents.create({
		amount,
		currency: 'usd',
		payment_method_types: ['card'],
		metadata: { uid: 'some_userID' }
	});

	res.send(paymentIntent);
});

app.post('/webhook', async (req, res) => {
	// TODO
});

export default app;
