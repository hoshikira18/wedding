/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "w.ladicdn.com",
      },
    ],
  },
};

export default nextConfig;
