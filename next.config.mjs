/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Mengabaikan ESLint saat build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
