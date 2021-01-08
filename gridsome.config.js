// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  plugins: [
    {
      use: '@gridsome/source-strapi',
      options: {
        apiURL: `https://www.dev-54ta5gq-jygfco5fsczyk.de-2.platformsh.site/`,
        queryLimit: 1000, // Defaults to 100
        contentTypes: [`restaurant`, `category`],
      },
    },
  ],
};
