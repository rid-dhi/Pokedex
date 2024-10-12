import path from 'path';

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve('./src'); // Set the @ alias for src directory
    return config;
  },
};

export default nextConfig;
