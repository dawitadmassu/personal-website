/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // This enables static HTML export
  images: {
    unoptimized: true, // Required if using the Next.js image optimization feature, since S3 won't support it
  },
};

export default nextConfig;
