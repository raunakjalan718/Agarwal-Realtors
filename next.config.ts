import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /**
   * Output mode: "standalone" produces a self-contained build
   * that Vercel automatically detects and optimises.
   */
  output: "standalone",

  /**
   * Image optimisation — serves BG-Hero1.png through Next.js'
   * built-in <Image> pipeline if needed in future.
   */
  images: {
    formats: ["image/avif", "image/webp"],
  },

  /**
   * Compiler options — remove console.log in production build.
   */
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
};

export default nextConfig;
