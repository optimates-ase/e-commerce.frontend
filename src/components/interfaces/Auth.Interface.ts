export interface User {
	userId: string | undefined;
	username: string | undefined;
	firstname: string | undefined;
	lastname: string | undefined;
	roles: Array<string> | undefined;
}

export interface Credentials {
	access_token: string;
	refresh_token: string;
	exp: string;
}