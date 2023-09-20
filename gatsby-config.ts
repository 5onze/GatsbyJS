import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: "whirlpool's Blog",
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
        path: `${__dirname}/blog-posts`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [`gatsby-remark-emoji`],
      },
    },
  ],
};

export default config;
