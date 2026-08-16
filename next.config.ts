import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
	output: 'export',
	experimental: {
		staticGenerationRetryCount: 3,
	},
};

export default nextConfig;
