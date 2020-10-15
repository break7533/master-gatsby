import dotenv from 'dotenv';

dotenv.config({ path: '.env' });

export default {
  siteMetadata: {
    title: `Slicks Slices`,
    siteURL: `https:gatsby.pizza`,
    description: `The best pizza place in Porto`,
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      // name of the plugin being added
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'wnc2io7k',
        dataset: 'production',
        watchMode: true,
        token: process.env.SANITY_TOKEN,
      },
    },
  ],
};
