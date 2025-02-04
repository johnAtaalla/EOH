/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: "/EOH", // Replace 'EOH' with your GitHub repository name
}

module.exports = nextConfig

