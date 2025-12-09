/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // This enables static HTML export
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true, // Adds trailing slashes to URLs, which can be helpful for S3/CloudFront
  
  // Ensure all paths are lowercase for S3 compatibility
  pageExtensions: ['tsx', 'ts', 'jsx', 'js'].map(ext => ext.toLowerCase()),
};

module.exports = nextConfig;
