/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
     // instead of wrapping our Component inside <StricMode/> we set this to true.
  reactStrictMode: true,
  i18n:{
    locales: ['fr', 'en', 'es', 'it', 'de'],
    defaultLocale: 'fr',
  }
}

module.exports = nextConfig
