const formatBackendStrings = (strings: any) => {
	return strings.map((str: any) => {
		const words = str.split('-');
		const formattedWords = words.map((word: any, index: number) => {
			if (index === 0) {
				return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
			}
			return word.toLowerCase();
		});
		return formattedWords.join(' ');
	});
};
export default formatBackendStrings;
