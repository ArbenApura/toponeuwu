export type AccountType = 'normal' | 'admin';

export type User = {
	uid: string;
	name: string;
	username: string;
	avatar: number;
	accountType: AccountType;
	lastOnline: number;
	createdAt: number;
};
