import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	/* config options here */

  // organization page is deprecated. redirecting to root page.
	async redirects() {
		return [
			{
				source: '/organization',
				destination: '/',
				permanent: false,
			},
		];
	},
};

export default nextConfig;
