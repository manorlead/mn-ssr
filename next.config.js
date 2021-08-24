const withAntdLess = require('next-plugin-antd-less')

/** @type {import('next').NextConfig} */
module.exports = withAntdLess({
  reactStrictMode: true,
  images: {
    domains: ['frontend-static-images.s3.amazonaws.com']
  },
  modifyVars: {
    '@primary-color': '#ffb800',
    '@btn-primary-color': '#454545',
    '@layout-header-background': 'rgb(18, 23, 28)',
    '@layout-trigger-background': 'rgb(18, 23, 28)',
    '@border-radius-base': '0px'
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
