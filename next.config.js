/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "apis.uneed.ir",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
