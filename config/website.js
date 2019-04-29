const tailwind = require('../tailwind')

module.exports = {
  pathPrefix: '/', // Prefix for all links. If you deploy your site to example.com/portfolio your pathPrefix should be "/portfolio"

  siteTitle: 'Isaac Hall Portfolio', // Navigation and Site Title
  siteTitleAlt: 'IsaacHall', // Alternative Site title for SEO
  siteTitleShort: 'Isaac', // short_name for manifest
  siteHeadline: 'Aspiring Developer Portfolio', // Headline for schema.org JSONLD
  siteUrl: 'https://isaachall.dev', // Domain of your site. No trailing slash!
  siteLanguage: 'en', // Language Tag on <html> element
  siteLogo: '/logo.png', // Used for SEO and manifest
  siteDescription: 'Parallax animatated single page portfolio',
  author: 'Isaac Hall', // Author for schema.org JSONLD

  // siteFBAppID: '123456789', // Facebook App ID - Optional
  userTwitter: '@NA', // Twitter Username
  ogSiteName: 'isaachall', // Facebook Site Name
  ogLanguage: 'en_US', // Facebook Language
  googleAnalyticsID: 'UA-139172809-1',

  // Manifest and Progress color
  themeColor: tailwind.colors.red,
  backgroundColor: tailwind.colors.blue,
}
 // delete Twitter & facebook


//robots.txt
