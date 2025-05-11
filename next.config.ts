import { NextConfig } from 'next';

const config: NextConfig = {
  // Redirects root path to internship page
  async redirects() {
    return [
      {
        source: '/',
        destination: '/get-involved/internship',
        permanent: true,
      },
    ];
  },
  // Add output configuration for Vercel
  output: 'standalone',
  // This helps Vercel find pages in the right location
  distDir: '.next',
};

export default config;