'server-only';
const BASE_URL = process.env.NEXT_PUBLIC_BACKEND;

export async function getProjectGalleries(id: string) {
	const token = process.env.NEXT_PUBLIC_TOKEN;

	const headers: Record<string, string> = {
		'Content-Type': 'application/json',
		store: process.env.NEXT_PUBLIC_STORE || '0001',
	};

	if (token) {
		headers['authorization'] = token;
	}

	const api = `${BASE_URL}/project-galleries/${id}`;

	const res = await fetch(api, {
		next: { revalidate: 60 },
		headers,
	});

	if (!res.ok) {
		console.error(`Failed to fetch products for categories: ${id}, Status: ${res.status}`);
		const errorText = await res.text();
		console.error('Error response:', errorText);
		return { doc: [] }; // Return empty array to prevent crashes
	}

	const data = await res.json();

	return data; // Ensure response matches { doc: [...] }
}
