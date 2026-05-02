/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
 images: {
  domains: [
      'api.microlink.io', // Microlink Image Preview
      'i.ibb.co.com', // Microlink Image Preview
      'ibb.co.com' // Microlink Image Preview
    ]
  }

};

export default nextConfig;
