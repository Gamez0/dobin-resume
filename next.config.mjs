/** @type {import('next').NextConfig} */
const isDev = process.env.NODE_ENV === "development";
console.log("🚀 ~ isDev:", isDev);

const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isDev ? "" : "/dobin-resume",
  assetPrefix: isDev ? "" : "/dobin-resume/",
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
