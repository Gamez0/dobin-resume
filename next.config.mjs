/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/dobin-resume",
  assetPrefix: "/dobin-resume/",
};

export default nextConfig;
