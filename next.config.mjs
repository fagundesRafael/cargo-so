/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "http",
                hostname: "ik.imagekit.io"
            }
        ]
    }
};

export default nextConfig;
