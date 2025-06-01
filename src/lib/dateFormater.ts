export const dateFormater = (date: string) => {
	return new Date(date).toLocaleString('en-US', {
		month: 'long',
		year: 'numeric',
	});
};
