/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ['mongoose'],
  },
  images: {
    domains: ['m.media-amazon.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        // Optionally, you can add pathname: '/path/to/images/**',
      },
      // You can add more patterns here
    ],
  },
};

export default nextConfig;
