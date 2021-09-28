const withAntdLess = require('next-plugin-antd-less')

/** @type {import('next').NextConfig} */
module.exports = withAntdLess({
  reactStrictMode: true,
  images: {
    domains: ['frontend-static-images.s3.amazonaws.com']
  },
  modifyVars: {
    '@primary-color': '#ffb800',
    '@border-radius-base': '8px'
  },
  i18n: {
    locales: ['zh-CN', 'en-US'],
    defaultLocale: 'en-US'
  },
  env: {
    REACT_APP_API_URL:
      process.env.REACT_APP_API_URL || 'https://api.vipmanor.com/'
  }
})
