/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")([
  "@square/web-sdk",
  "react-square-web-payments-sdk",
]);
const nextConfig = withTM({
  reactStrictMode: true,
  images: {
    domains: ["localhost"],
  },
  experimental: {
    esmExternals: "loose",
  },
});

module.exports = nextConfig;
