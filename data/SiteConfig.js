const config = {
  siteTitle: 'Aquil.io Gatsby Starter',
  siteLogo: '/logos/logo-512.png',
  siteImage: '/logos/logo-900.png',
  siteIcon: 'static/logos/logo-512.png',
  siteUrl: 'https://gatsby-starter-aquilio.netlify.com',
  pathPrefix: '/',
  siteDescription: 'Aquil.io Gatsby starter',
  twitter: '@aquil_io',
  copyright: `\u00A9 ${new Date().getFullYear()} Aquil.io. All rights reserved.`,
  themeColor: '#c62828',
  backgroundColor: '#e0e0e0',
};

// Make sure siteUrl doesn't have an ending forward slash
if (config.siteUrl.substr(-1) === '/') {
  config.siteUrl = config.siteUrl.slice(0, -1);
}

module.exports = config;
