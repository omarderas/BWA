/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Wildland Belize Adventures`,
    description: `Wildland Belize Adventures is a Belizean owned tour operator, we are located along the breathtaking hummingbird highway within the cayo district.
    We pride ourselves in providing guest with life changing,safe and professional tours.
    We provide adventurous tours,such as exploring massive underground cave system, or hiking up to the second highest summit within the treacherous Maya mountains, or just kayak some of the country's serene and peaceful rivers.`,
    author: `Jose Urbina`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: 'gatsby-source-graphcms',
      options: {
        endpoint: "https://api-us-west-2.hygraph.com/v2/clv5h5hfo026i07tbcs0gr1un/master",
        token: "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE3MTM4NDQzODUsImF1ZCI6WyJodHRwczovL2FwaS11cy13ZXN0LTIuaHlncmFwaC5jb20vdjIvY2x2NWg1aGZvMDI2aTA3dGJjczBncjF1bi9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC11cy13ZXN0LTIuaHlncmFwaC5jb20vIiwic3ViIjoiMDY5Yzg5N2UtYjJjMi00ZTljLWJhZjYtOTNmMGU1NmYwNzg5IiwianRpIjoiY2x2YnVwM2FsMWJxczA3bjM2c2M4NmY1eSJ9.M-3cgVxOW1GrxhQim8cgfsm4TebTrf-EdKu7AqaWG7ou6tZN4wOucVBDcfGEGthSUI3spf_mV2PspZeLTo7NX5WTSG9Fadn7xFsx9Twnll5aHFLnQeykPtqXi8s1sl5BLEJwA4jXGJpHcks0jN1-yjB4qKk7oF8bSP-JL94RwE_Z4lMG0ur3ysQYU29IPjInydP3u6502MYpMdqWoDPmiJ_PCu9Xo40zdjdLhHbVV6GDoyY2IihgLYvPzcZnhbD7oTJEGaCjdVXN7aCDx3P-kMqvZUDywBaCziQWM0HAHJnKxBC8orXK0gLLsQKFqqPH9FlErNZIzX6rXHg1Putn_ePEfd3rFklRyEMXpvwwCnk25EqU7gafhVJ0v9TQrpmWZbQ-YvbL0nbKswV7n7jhvp1KRDEaLH9TX9ssZy6C8pwmVdh4ASGcTfmg6-K69BU8Zpxe2w5oWajYQ2WAwqMBRDRXagXxqewB96KRamVJxZ-D51wg7hPpGCE5NOyPJ4sPbTsIatFJjOR6m5Gmm-R1iFimcsk2dqLi_oGkyvtS5tROTYPlEvdw-3dOpS8rOHEdFxSBAkEfnqatAj4L3H-EfiPectI0efbr6EbcJQxCSvWBWcceozyxpXY5nc9SciDGeAbqvDgvAoXQ2XKu24KHDrXhjhZOJN1phZ0uvtExHKQ",
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/wba-logoMain.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
