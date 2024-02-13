/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects(){
        return [
            {
                source: '/ks',
                destination: 'https://l2beat.com/',
                permanent: false
            }
        ]
    }
};

export default nextConfig;