module.exports = {
  blogPostDir: "posts", // The name of directory that contains your posts.
  blogAuthorDir: "authors", // The name of directory that contains your 'authors' folder.
  blogAuthorId: "sitonline", // The default and fallback author ID used for blog posts without a defined author.
    siteTitle: "SAP Inside Track Online", // Site title.
    siteTitleAlt: "SAP Inside Track Online", // Alternative site title for SEO.
  siteLogo: "/logos/home.png", // Logo used for SEO and manifest. e.g. "/logos/logo-1024.png",
  siteUrl: "https://SAP-Inside-Track-Online.github.", // sitbneDomain of your website without pathPrefix.
  pathPrefix: "io", // Prefixes all links. For cases when deployed to example.github.io/gatsby-starter-casper/.
  siteDescription:
    "We're so excited to bring you a new way to access SAP Inside Track. An international grassroots community event organised where SAP Community members come together to share knowledge, expertise, and to network", // Website description used for RSS feeds/meta description tag.
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
      //"https://github.com/SAP-Inside-Track-Online",
      "https://twitter.com/sapsitonline",
      "mailto:sapinsidetrackonline@gmail.com",
      "https://discordapp.com/invite/EgmTNT",
      "https://www.youtube.com/channel/UCbVRw2p01YO3xdn9aFfVIqg"
  ],
  postDefaultCategoryID: "Tech", // Default category for posts.
  // Links to social profiles/projects you want to display in the navigation bar.
  userLinks: [
    /*{
      label: "GitHub",
          url: "https://github.com/SAP-Inside-Track-Online",
      iconClassName: "fa fa-github" // Disabled, see Navigation.jsx
    },*/
    {
      label: "Twitter",
        url: "https://twitter.com/sapsitonline",
      iconClassName: "fa fa-twitter" // Disabled, see Navigation.jsx
    },
    {
      label: "Email",
        url: "mailto:sapinsidetrackonline@gmail.com",
      iconClassName: "fa fa-envelope" // Disabled, see Navigation.jsx
    },
    {
        label: "YouTube",
          url: "https://www.youtube.com/channel/UCbVRw2p01YO3xdn9aFfVIqg",
        iconClassName: "fa fa-youtube-play" // Disabled, see Navigation.jsx
    },
    {
      label: "Discord",
        url: "https://discordapp.com/invite/EgmTNT",
      iconClassName: "fa fa-comments-o" // Disabled, see Navigation.jsx
    }, 
    {
      label: "Keen to Speak",
        url: "/keen-to-speak",
      iconClassName: "fa fa-microphone"
    }
  ],
  // Copyright string for the footer of the website and RSS feed.
  copyright: {
    label: "SAP Inside Track Online", // Label used before the year
    year: "2020", // optional, set specific copyright year or range of years, defaults to current year
    url: "https://SAP-Inside-Track-Online.github.io/" // optional, set link address of copyright, defaults to site root
  },
  themeColor: "#c62828", // Used for setting manifest and progress theme colors.
  backgroundColor: "#e0e0e0", // Used for setting manifest background color.
  promoteGatsby: false // Enables the GatsbyJS promotion information in footer.
};
