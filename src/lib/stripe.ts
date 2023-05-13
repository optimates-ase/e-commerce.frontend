import { loadStripe } from '@stripe/stripe-js';
import { PUBLIC_STRIPE_TEST_KEY } from '$env/static/public';

const stripe = await loadStripe(PUBLIC_STRIPE_TEST_KEY);

export const stripe_elements = stripe?.elements();
