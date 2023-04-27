import type { LayoutServerLoad, LayoutServerLoadEvent } from "./$types";

export const load: LayoutServerLoad = async (event: LayoutServerLoadEvent) => {
  const session = await event.locals.getSession();
  const sessionToken = event.cookies.get('next-auth.session-token')
  

  return {
    session: session,
    sessionToken: sessionToken
  };
};