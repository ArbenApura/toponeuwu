// TYPES
export type AccountType = 'normal' | 'admin';
export type User = {
	uid: string;
	name: string;
	username: string;
	avatar: number;
	account_type: AccountType;
	last_online: number;
	created_at: number;
};
