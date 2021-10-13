const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.js',
  unstable_staticImage: true,
})

module.exports = withNextra({
  i18n: {
    locales: ["zh-CN", "en-US"],
    defaultLocale: "en-US"
  }
})
