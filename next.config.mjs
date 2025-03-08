let userConfig;
try {
  userConfig = await import("./v0-user-next.config");
} catch (e) {
  // ignore error
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  //output: "export", // Required for static export
  basePath: "/EOH", // 👈 Set to your actual repo name
  assetPrefix: "/EOH/", // 👈 Fixes asset loading for GitHub Pages
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  /*images: {
    unoptimized: true,
  },*/
  experimental: {
    webpackBuildWorker: true,
    parallelServerBuildTraces: true,
    parallelServerCompiles: true,
  },
};

// Merge userConfig if it exists
if (userConfig?.default) {
  Object.assign(nextConfig, userConfig.default);
}

export default nextConfig;
