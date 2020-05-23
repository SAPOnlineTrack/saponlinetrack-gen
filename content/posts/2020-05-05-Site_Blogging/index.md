---
title: "Site Blogging"
cover: "/images/post-header.png"
author: "katan"
date: "2020-05-05"
category: "Blogging"
tags:
    - Blogging

---

## Description

As a speaker posting your own blog post to the SAP Online Track Site can really help promote your session(s) and help you engage with our community by providing some personalised content.  For that reason we actively emplore you to setup your own blog to augment your session

We currently provide you the ability to create your own blog post on our site or provide us with a reference to an external site with your related blog post (Just reach out to us in #speakers-corner on discord to share the details)

## Hosting your Blog on our site

We use the static site generator [GatsbyJS](https://www.gatsbyjs.org/) for creating our content and our site is hosted on [Github](https://github.com/) via Github Pages.  The project for the site generator is also accessible to all, as it is also hosted on GitHub too. See our [SAP Online Track Generator](https://github.com/SAPOnlineTrack/saponlinetrack-gen) repo for more details.

All of the content for blogging on the site is created using Markdown. Please refer to the [Gatsby Markdown](https://www.gatsbyjs.org/docs/mdx/markdown-syntax/) guide for more details about this.

### How to create a Markdown blog

Copy the content for [this post](https://github.com/SAPOnlineTrack/saponlinetrack-gen/tree/master/content/posts/2020-05-05-Site_Blogging) as a template from Github.  

Update the blog config (title, author, date, category, tags).  Note the tags make it easier for people to find relevant related content.  Also ensure the author is set to your user (see "Create your author profile" section for more details)

![MarkDown Config](/images/blog-config.png)

#### Create your content

Follow the [reference guide](https://www.gatsbyjs.org/docs/mdx/markdown-syntax/) for Markdown, to see how to create content.  

In addition we have support for embedded YouTube videos.  Use the following syntax to do that.

![Embed YouTube](/images/embed_youtube.png)

#### Create your author profile

To ensure your content is referenced/credited to you, create an author profile.  This is a one time only activity and thereafter just make sure all blogs you post use the same uid.  

![Author Details on Blog](/images/author-profile-footer.png)

If you chose not to do this step, or do it incorrectly , the site will default to the SAPOnlineTrack account as the author.

Author json configuration files are stored in "content/authors/authors" directory.

```sh
{
  "uid": "katan",
  "name": "Katan Patel",
  "image": "/images/authors/katan.jpg",
  "url": "https://katansapdevelop.github.io/",
  "location": "Brisbane, Australia",
  "bio": "SAP Developer & $crypto trader. Loves Coding, cooking, gaming, football, electronic music, MTB & fishing",
  "socialUrls": [
    "https://github.com/katansapdevelop",
    "https://twitter.com/katansapdevelop",
    "mailto:katansapdevelopment@gmail.com"
  ]
}
```

The fastest way to set this up, is to copy the template file above and replace the contents with your own details.  Please choose your own "uid" and ensure the blog file has the same name.  

You can add you own image in the folder "static/images/authors"

#### Run your own Project

If you are familiar with Node.js, follow the instructions on the [readme.md](https://github.com/SAPOnlineTrack/saponlinetrack-gen) of the site generator to setup and run your own project.

If you are not familiar/comfortable with Node.js, not to worry, feel free to create an index.md and author profile and send it to us via a mail and we'll help set it up for you.

#### Branches

Switch to the branch "may-2020-blog-posts" and ensure you create a pull request here for all changes you make.  

#### Where to put your content

Under the "content/posts" folder, create a new sub directory for your blog content.  The naming convention we currently use is "{date}-{Short Title}" (e.g. "2020-05-05-Site_Blogging").

#### How will it be accessed

Your blog posts can be accessed from the Home Page which has all posts sorted in date order.  

It will also be referenced on the [session list](/sessions) page.  During the merge process we will make sure to update the googlesheet reference.

#### IDE Setup

My current IDE of choice is [VS Code](https://code.visualstudio.com/). The markdown preview is handy for checking your content and the [markdownlint package](https://marketplace.visualstudio.com/items?itemName=DavidAnson.vscode-markdownlint) is awesome for checking your markdown is formatted correctly.  

Although it is much easier to run this command and edit your post while watching it reflect in real time on a local server.

```sh
gatsby develop
```

### Alternatives

Of course you are more than welcome to promote your content via your own preferred blogging medium, such as the [SAP Community](https://community.sap.com/).

Remember please don't forget to reach out to us in #speakers-corner on discord to provide us with the details, so we can link it to your session

## Summary

If you need any advice or assitance, please reach out on the #speakers-corner discord channel and we will endeavour to help you out.  
