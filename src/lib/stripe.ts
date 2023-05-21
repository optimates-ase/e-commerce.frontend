import { loadStripe } from '@stripe/stripe-js/pure';
import { PUBLIC_STRIPE_TEST_KEY } from '$env/static/public';

loadStripe.setLoadParameters({ advancedFraudSignals: false });
export const stripe = await loadStripe(PUBLIC_STRIPE_TEST_KEY);
