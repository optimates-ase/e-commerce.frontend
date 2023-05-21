import { SvelteKitAuth } from '@auth/sveltekit';
import Google from '@auth/core/providers/google';
import { startMongo } from '$db/mongo';

import { GOOGLE_ID, GOOGLE_SECRET, AUTH_SECRET } from '$env/static/private';

startMongo().then(() => console.log('mongo started'));

export const handle = SvelteKitAuth({
	trustHost: true,
	useSecureCookies: true,
	secret: AUTH_SECRET,
	providers: [Google({ clientId: GOOGLE_ID, clientSecret: GOOGLE_SECRET })]
});
