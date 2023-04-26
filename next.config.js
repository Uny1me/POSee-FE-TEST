/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "localhost",
      "https://fakestoreapi.com",
      "fakestoreapi.com",
    ],
    // loader: "imgix",
    // path: 'https://storage.googleapis.com'
  },
}

module.exports = nextConfig
