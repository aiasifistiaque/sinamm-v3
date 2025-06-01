'use server';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND;

export async function getPartners() {
	const token = process.env.NEXT_PUBLIC_TOKEN;

	const filters = {
		limit: 999,
	};
	const params = new URLSearchParams({});

	Object.entries(filters).forEach(([key, value]) => {
		params.append(key, value.toString()); // Flattened filters (e.g., show=true)
	});
	const headers: Record<string, string> = {
		'Content-Type': 'application/json',
	};

	if (token) {
		headers['authorization'] = `${token}`; // Bearer prefix (adjust if not needed)
	}

	const api = `${BASE_URL}/partners?${params.toString()}`;
	// console.log('Fetching banners from:', api); // Debug URL

	const res = await fetch(api, {
		next: { revalidate: 60 }, // ISR with 60-second revalidation
		headers,
	});

	if (!res.ok) {
		console.error(`Failed to fetch partners, Status: ${res.status}`);
		const errorText = await res.text();
		console.error('Error response:', errorText);
		return { doc: [] }; // Fallback to prevent crashes
	}

	const data = await res.json();
	return data; // Expected format: { doc: [...] }
}
