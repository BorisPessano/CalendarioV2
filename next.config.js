/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        remotePatterns:[
            {
                protocol: 'https',
                hostname: 'cleveritimages.blob.core.windows.net'
            }
        ]
    }
}

module.exports = nextConfig
