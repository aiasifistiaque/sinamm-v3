'use server';

const BASE_URL = process.env.NEXT_PUBLIC_BACKEND;
export async function getProjects(type: string = 'all', category?: string) {
	const filters: Record<string, string | boolean | number> = {
		projectStatus: type === 'all' ? '' : type,
		sort: '-priority',
		// isSisterConcern: false,
		limit: 9999,
	};

	if (category) {
		filters.category = category; // Add category filter if provided
	}

	const params = new URLSearchParams();
	Object.entries(filters).forEach(([key, value]) => {
		if (value !== '') {
			params.append(key, value.toString());
		}
	});
	// console.log('params ::', params);
	// console.log('params string::', params?.toString());
	const token = process.env.NEXT_PUBLIC_TOKEN;
	const headers: Record<string, string> = {
		'Content-Type': 'application/json',
	};

	if (token) {
		headers['authorization'] = `${token}`; // Bearer prefix (adjust if not needed)
	}

	const api = `${BASE_URL}/projects?${params.toString()}`;
	//   console.log('Fetching projects from:', api); // Debug URL

	try {
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
	} catch (error) {
		console.error('Error fetching projects:', error);
		return { doc: [] }; // Fallback to prevent crashes
	}
}
