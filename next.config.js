/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['res.cloudinary.com', 'lh3.googleusercontent.com'],
    unoptimized: false,
  },
  webpack: (config, { isServer }) => {
    return config;
  },
};

module.exports = nextConfig;
