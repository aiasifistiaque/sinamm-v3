// project-teams

'use server';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND;

export async function getCertificates() {
	const filters = {
		sort: '-priority',
		limit: 10,
	};
	const params = new URLSearchParams({});
	// console.log('project params::', params);
	// console.log('type val:', type);

	Object.entries(filters).forEach(([key, value]) => {
		params.append(key, value?.toString()); // Flattened filters (e.g., show=true)
	});

	const token = process.env.NEXT_PUBLIC_TOKEN;

	const headers: Record<string, string> = {
		'Content-Type': 'application/json',
	};

	if (token) {
		headers['authorization'] = `${token}`; // Bearer prefix (adjust if not needed)
	}

	const api = `${BASE_URL}/certifications?${params.toString()}`;
	// console.log('Fetching banners from:', api); // Debug URL

	const res = await fetch(api, {
		next: { revalidate: 60 }, // ISR with 60-second revalidation
		headers,
	});

	if (!res.ok) {
		console.error(`Failed to fetch projects, Status: ${res.status}`);
		const errorText = await res.text();
		console.error('Error response:', errorText);
		return { doc: [] }; // Fallback to prevent crashes
	}

	const data = await res.json();

	return data; // Expected format: { doc: [...] }
}

// In SSR function
// Object.entries(filters).forEach(([key, value]) => {
//   params.append(key, value.toString());
// });
