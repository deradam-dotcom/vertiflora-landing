import type { GatsbyConfig } from "gatsby";

const config: GatsbyConfig = {
  siteMetadata: {
    title: `vertiflora`,
    siteUrl: `https://www.yourdomain.tld`
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "5frYQx8_0CZM_i2bdLhyFj0uUSLClxOdH0BPKIvXCh4",
      "spaceId": "doiibujz27u2"
    }
  }, "gatsby-plugin-image",  {
    resolve: 'gatsby-plugin-sharp',
    options: {
      breakpoints: [480, 750, 1080, 1366, 1920],
      placeholder: 'blurred',
      quality: 80,
      formats: ['auto', 'webp', 'avif']
    }
  },{
    resolve: 'gatsby-plugin-react-svg',
    options: {
      rule: {
        include: /\.inline\.svg$/,
        omitKeys: ['xmlnsSerif']
      }
    }
  }, 
 "gatsby-transformer-sharp", "gatsby-plugin-postcss"]
};

export default config;
