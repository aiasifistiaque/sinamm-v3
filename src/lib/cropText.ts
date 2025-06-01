// utils/truncateText.ts
export const truncateText = (text: string, maxLength: number): string => {
	if (!text || text.length <= maxLength) return text;
	// Find the last space before maxLength to avoid cutting words
	const trimmed = text.slice(0, maxLength);
	const lastSpaceIndex = trimmed.lastIndexOf(' ');
	return lastSpaceIndex > 0
		? trimmed.slice(0, lastSpaceIndex) + '...'
		: trimmed + '...';
};

export const truncateHtml = (html: string, maxLength: number): string => {
	if (!html || html.length <= maxLength) return html;

	// Simple HTML truncation: strip tags and truncate plain text
	const div = document.createElement('div');
	div.innerHTML = html;
	const textContent = div.textContent || div.innerText || '';

	if (textContent.length <= maxLength) return html;

	// Truncate text content and preserve HTML structure
	const truncatedText = truncateText(textContent, maxLength);

	// Rebuild HTML with truncated content (basic approach)
	// Note: This is a simplified version; for complex HTML, consider a library like `html-truncate`
	return `<p>${truncatedText}</p>`;
};
