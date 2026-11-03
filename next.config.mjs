/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { dev }) => {
    if (dev) {
      config.watchOptions = {
        ...config.watchOptions,
        ignored: [
          "**/node_modules/**",
          "**/.git/**",
          "**/.next/**",
          "C:/*.sys",
          "C:/*.tmp",
          "C:/*.log",
        ],
      };
    }
    return config;
  },
};

export default nextConfig;
