/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/",
  assetPrefix: "/",
  trailingSlash: true,

  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/dobin-resume/:path*",
      },
    ];
  },
};

export default nextConfig;
