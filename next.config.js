// const isProd = process.env.NODE_ENV === 'production'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  // basePath: isProd ? '/katVR' : ''
  i18n: {
    locales: ['en', 'de'], // Ваши поддерживаемые локали
    defaultLocale: 'en' // Локаль по умолчанию
  }
}

module.exports = nextConfig
