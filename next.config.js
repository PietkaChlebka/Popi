/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true, path: "/", loader: "akamai" },
};

module.exports = nextConfig;
