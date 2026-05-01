/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // static export'ta Image optimization çalışmaz
  },
};
module.exports = nextConfig;