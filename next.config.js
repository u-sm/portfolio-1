module.exports = {
  output: 'export',          // Next.js 14+ static export
  trailingSlash: true       // ensures proper routing
  basePath: '/portfolio-1',    // if you’re serving from a sub-folder
  assetPrefix: '/portfolio-1',   // same as basePath
}
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tell Next to produce a fully static export (out/)
  output: 'export',

  // Use folder/index.html structure
  trailingSlash: true,

  // If you’re hosting at https://<user>.github.io/portfolio-1/, all
  // asset & page URLs must be prefixed with /portfolio-1
  basePath: '/portfolio-1',
  assetPrefix: '/portfolio-1',
};

module.exports = nextConfig;
