'server-only';
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND;

export async function getAmachinery(id: string) {
	// const params = new URLSearchParams({
	// 	sort: '-createdAt', // Match RTK Query default
	// 	page: '1', // Match RTK Query default
	// 	limit: limit.toString(), // High limit for SSR
	// 	category_in: ids, // Filter by category IDs
	// 	isActive: 'true', // Match filters: { isActive: true }
	// });

	// Get token from cookies
	const token = process.env.NEXT_PUBLIC_TOKEN;

	const headers: Record<string, string> = {
		'Content-Type': 'application/json',
		store: process.env.NEXT_PUBLIC_STORE || '0001',
	};

	if (token) {
		headers['authorization'] = token;
	}

	const api = `${BASE_URL}/machineries/${id}`;
	// console.log('Fetching products from:', api); // Debug URL
	// console.log('Headers:', headers); // Debug headers

	const res = await fetch(api, {
		next: { revalidate: 60 },
		headers,
	});

	if (!res.ok) {
		console.error(
			`Failed to fetch products for categories: ${id}, Status: ${res.status}`
		);
		const errorText = await res.text();
		console.error('Error response:', errorText);
		return { doc: [] }; // Return empty array to prevent crashes
	}

	const data = await res.json();
	console.log('get a machinery response:', data); // Debug response
	return data; // Ensure response matches { doc: [...] }
}
