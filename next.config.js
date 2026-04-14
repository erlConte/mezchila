/** @type {import('next').NextConfig} */
const path = require("path");

/**
 * Build `.next` fuori da OneDrive: Next non supporta `distDir` completamente fuori dalla root
 * del progetto (typecheck e runtime con moduli in `node_modules` si rompono).
 * Alternativa su Windows — junction (esegui da cmd nella root del progetto, cartella destinazione già creata):
 *   mklink /J .next C:\NextBuilds\mezchila\.next
 */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { dev }) => {
    if (dev) {
      config.cache = {
        type: "filesystem",
        cacheDirectory: path.resolve(
          process.env.TEMP || "C:/Temp",
          "next-webpack-cache",
          "mezchila",
        ),
      };
    }
    return config;
  },
};

module.exports = nextConfig;
