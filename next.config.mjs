import { withNextVideo } from "next-video/process";
/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'], // Add your image hosting domain here
    },
};

export default withNextVideo(nextConfig, { folder: 'video' });