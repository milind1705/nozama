/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "65.1.118.123:1338",
      "localhost:1338",
      "65.1.118.123",
      "localhost",
      "upload.wikimedia.org",
      "tailwindui.com",
      "images.unsplash.com",
      "encrypted-tbn0.gstatic.com",
      "dev-cms.phussi.com",
      "phussi-dev-cms.s3.ap-south-1.amazonaws.com",
      "ps.w.org",
    ],
  },
  async headers() {
    return [
      {
        // matching all API routes
        source: "/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "*" },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
          },
          {
            key: "Access-Control-Allow-Headers",
            value:
              "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
