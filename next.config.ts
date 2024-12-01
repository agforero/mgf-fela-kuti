import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
            protocol: 'https',
            hostname: 'www.whatdosquirrelseat.org',
            port: '',
            pathname: '/**',
            search: '',
            },
        ],
    },
};

export default nextConfig;
