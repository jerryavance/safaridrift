// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   output: 'export'
// }

// module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // keep this if you’re doing static export
  images: {
    unoptimized: true, // ✅ disables optimization so static export works
  },
};

module.exports = nextConfig;

