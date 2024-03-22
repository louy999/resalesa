/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@storefront-ui/react"],
  images: {
    domains: ["localhost"],
  },
};

module.exports = nextConfig;
