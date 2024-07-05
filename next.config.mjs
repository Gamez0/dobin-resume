/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // basePath: isProd ? "/dobin-resume" : "",
  assetPrefix: isProd ? "/dobin-resume/" : "",
  // trailingSlash: true,
  // async rewrites() {
  //   return [
  //     // {
  //     //   source: "/about",
  //     //   destination: isProd ? "/dobin-resume/about" : "/about",
  //     // },
  //     // {
  //     //   source: "/contact",
  //     //   destination: isProd ? "/dobin-resume/contact" : "/contact",
  //     // },
  //     // {
  //     //   source: "/:path*",
  //     //   destination: isProd ? "/dobin-resume/:path*" : "/:path*",
  //     // },
  //     // Add more routes as needed
  //   ];
  // },
};

export default nextConfig;
