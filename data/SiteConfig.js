module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogAuthorDir: "authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "saponlinetrack", // The default and fallback author ID used for blog posts without a defined author.
  siteTitle: "SAP Online Track ", // Site title.
  siteTitleAlt: "SAP Online Track", // Alternative site title for SEO.
  siteLogo: "/logos/home.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://SAPOnlineTrack.github.io", // sitbneDomain of your website without pathPrefix.
  pathPrefix: "", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription: "A free SAP Community event hosted entirely online", // Website description used for RSS feeds/meta description tag.
  siteCover:"/images/home-banner.jpg", // Optional, the cover image used in header for home page. e.g: "/images/blog-cover.jpg",
  siteNavigation: true, // If navigation is enabled the Menu button will be visible
  siteBanner:"We are fundraising for Girls Who Code. Please click here to show support and donate", // Site Banner 
  siteBannerUrl: "https://classy.org/team/285233", //Path to page to navigate from Site Banner
  siteRss: "", //"/rss.xml", // Path to the RSS file.
  siteRssAuthor: "", //"Casper User", // The author name used in the RSS file
  // siteFBAppID: "1825356251115265", // optional, sets the FB Application ID for using app insights 
  sitePaginationLimit: 5, // The max number of posts per page.
  googleAnalyticsID: "UA-158835406-1", // GA tracking ID.
  // disqusShortname: "https-vagr9k-github-io-gatsby-advanced-starter", // enables Disqus comments, visually deviates from original Casper theme.
  siteSocialUrls: [
      "https://twitter.com/sapOnlineTrack",
      "https://discordapp.com/invite/MEsFFVW",
      "https://www.youtube.com/channel/UCbVRw2p01YO3xdn9aFfVIqg/featured"
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    {
      label: "Latest Event Info",
        url: "/may-2020-event"
    }, 
    {
      label: "Keen to Speak",
        url: "/keen-to-speak"
    },
    {
      label: "Code of Conduct",
      url: "/code-of-conduct"
    },
    {
      label: "Volunteering",
        url: "/volunteering"
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "SAP Online Track", // Label used before the year
    year: "2020", // optional, set specific copyright year or range of years, defaults to current year
    url: "https://saponlinetrack.github.io/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: false // Enables the GatsbyJS promotion information in footer.
};
