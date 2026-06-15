import type { NextConfig } from "next";

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  /**
   * Image optimisation — serves all local images through Next.js'
   * built-in <Image> pipeline with avif/webp delivery.
   * NOTE: Do NOT use output:"standalone" on Vercel — it bypasses
   * Vercel's public folder static asset serving.
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
