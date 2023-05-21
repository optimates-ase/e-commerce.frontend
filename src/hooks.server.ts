import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/core/providers/google';
import { startMongo } from '$db/mongo';

import { VITE_GOOGLE_ID, VITE_GOOGLE_SECRET, VITE_AUTH_SECRET } from '$env/static/private';

startMongo().then(() => console.log('mongo started'));

export const handle = SvelteKitAuth({
	trustHost: true,
	useSecureCookies: true,
	secret: VITE_AUTH_SECRET,
	providers: [Google({ clientId: VITE_GOOGLE_ID, clientSecret: VITE_GOOGLE_SECRET })]
});
