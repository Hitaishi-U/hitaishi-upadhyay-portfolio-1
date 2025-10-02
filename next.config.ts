import type { NextConfig } from "next";
import path from "node:path";

const LOADER = path.resolve(__dirname, 'src/visual-edits/component-tagger-loader.js');

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      "*.{jsx,tsx}": {
        loaders: [LOADER]
      }
    }
  },
  images: {
    domains: ['drive.google.com'], // ✅ allow Google Drive images
  }
};

export default nextConfig;

// Orchids restart: 1759382785980
