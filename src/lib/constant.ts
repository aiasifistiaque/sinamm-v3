// colors.js
export const colors = {
	blue: '#4b5563',
};
export const TOKEN_NAME: string =
	process.env.NEXT_PUBLIC_TOKEN_NAME || 'TEST_TOKEN_ECOM_ONE';
export const BASE_LIMIT: number = 10;
export const URL = {
	api: process.env.NEXT_PUBLIC_BACKEND || 'http://localhost:5000',
};
export const REFRESH_TOKEN: string =
	process.env.NEXT_PUBLIC_REFRESH || 'TEST_REFRESH_ECOM_ONE';

export const containerWidth = 'max-w-7xl';

export const policyData = [
	{
		title: 'Head',
		subTitle: 'HSE',
		icon: './policy-svg/head.svg',
	},
	{
		title: 'Eyes',
		subTitle: 'HSE',
		icon: './policy-svg/eyes.svg',
	},
	{
		title: 'Breathing',
		subTitle: 'HSE',
		icon: './policy-svg/mask.svg',
	},
	{
		title: 'Feet & Leg',
		subTitle: 'HSE',
		icon: './policy-svg/foot.svg',
	},
	{
		title: 'Hand & Arm',
		subTitle: 'HSE',
		icon: './policy-svg/gloves.svg',
	},
	{
		title: 'Clothing',
		subTitle: 'HSE',
		icon: './policy-svg/clothing.svg',
	},
];