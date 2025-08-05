/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  experimental: {
    allowedDevOrigins: ['127.0.0.1', 'localhost'],
  },
};

export default nextConfig;
