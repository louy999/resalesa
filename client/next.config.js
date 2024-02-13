/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@storefront-ui/react"],
  images: {
    domains: [
      "media.istockphoto.com",
      "plus.unsplash.com",
      "images.unsplash.com",
      "pioneerproperty.net",
      "lmd.com.eg",
      "sadaninvestment.com.eg",
    ],
  },
};

module.exports = nextConfig;
