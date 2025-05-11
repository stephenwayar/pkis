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
};

export default config;