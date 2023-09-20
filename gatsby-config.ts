import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "밍구 블로그",
    siteUrl: `https://www.yourdomain.tld`,
    description: "Buy the best stickers",
  },
  graphqlTypegen: true,
  plugins: [
    `gatsby-plugin-typescript`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/static/`,
      },
    },
  ],
};

export default config;
