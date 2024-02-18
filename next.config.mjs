/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "static.zara.net",
      },
    ],
  },
};

export default nextConfig;
