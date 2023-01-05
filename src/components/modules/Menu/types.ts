export type MenuItem = {
	type: 'button' | 'link';
	label: string;
	icon?: string;
	isVisible: boolean;
	href?: string;
	handleClick?: () => void;
};
