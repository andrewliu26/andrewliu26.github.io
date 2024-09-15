// next.config.js
const isProd = process.env.NODE_ENV === 'production';

module.exports = {
	assetPrefix: isProd ? '/andrewliu26.github.io/' : '',
	basePath: isProd ? '/andrewliu26.github.io' : '',
	trailingSlash: true, // Ensures every route ends with a trailing slash (e.g., /about/)
	images: {
		unoptimized: true, // Disables Next.js optimized image handling, since it doesn't work with static exports
	},
};
