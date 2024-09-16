/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'export', // This enables static export for the App Router
	images: {
		unoptimized: true, // Necessary for static exports, disables Next.js image optimization
	},
	trailingSlash: true, // Adds a trailing slash to the routes
}

module.exports = nextConfig
