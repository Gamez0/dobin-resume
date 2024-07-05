/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/dobin-resume",
  assetPrefix: "/dobin-resume/",
  trailingSlash: true,

  rewrites() {
    return [
      {
        source: "/:path*",
        destination: "/dobin-resume/:path*",
      },
    ];
  },
};

export default nextConfig;
