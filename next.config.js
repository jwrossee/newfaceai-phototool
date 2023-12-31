/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: ["upcdn.io", "replicate.delivery", "lh3.googleusercontent.com"],
  },
  async redirects() {
    return [
      {
        source: "/github",
        destination: "https://github.com/jwrossee/newfaceai-phototool",
        permanent: false,
      },
      {
        source: "/deploy",
        destination: "https://vercel.com/jwrossee/newfaceai-phototool",
        permanent: false,
      },
    ];
  },
};
