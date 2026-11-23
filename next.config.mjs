/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nfi-website',
  assetPrefix: '/nfi-website/',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
