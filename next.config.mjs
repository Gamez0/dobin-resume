/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? "/dobin-resume" : "",
  assetPrefix: isProd ? "/dobin-resume/" : "",
};

export default nextConfig;
