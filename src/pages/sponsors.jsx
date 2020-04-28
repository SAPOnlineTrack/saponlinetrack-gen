import React, { Component } from "react";
import { graphql } from 'gatsby'
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Drawer from "../components/Drawer/Drawer";
import Navigation from "../components/Navigation/Navigation";
import SiteWrapper from "../components/SiteWrapper/SiteWrapper";
import MainHeader from "../components/MainHeader/MainHeader";
import MainNav from "../components/MainNav/MainNav";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import MenuButton from "../components/MenuButton/MenuButton";
import Footer from "../components/Footer/Footer";
import Layout from "../components/layout";

import "./sponsors.css";

class SponsorsPage extends Component {
  state = {
    menuOpen: false
  };

  handleOnClick = evt => {
    evt.stopPropagation();
    if (this.state.menuOpen) {
      this.closeMenu();
    } else {
      this.openMenu();
    }
  };

  handleOnClose = evt => {
    evt.stopPropagation();
    this.closeMenu();
  };

  openMenu = () => {
    this.setState({ menuOpen: true });
  };

  closeMenu = () => {
    this.setState({ menuOpen: false });
  };

  convertTwitterHandleToHRef = (twitterHandle) => {
    if(twitterHandle === null) return "";
    
    return "https://twitter.com/" + twitterHandle.substr(1);
  };
  


  render() {

    const sponsors = this.props.data.allGoogleSheetSheet1Row.nodes;

    return (
      <div className="sponsors-container">
        <Helmet title={`Sponsors | ${config.siteTitle}`} />
        <Layout location={this.props.location}>
        <Drawer className="sponsors-template" isOpen={this.state.menuOpen}>
          <Helmet title={`Sponsors | ${config.siteTitle}`} />

          {/* The blog navigation links */}
          <Navigation config={config} onClose={this.handleOnClose} />

          <SiteWrapper>
            <MainHeader className="post-head" cover={config.blogPostHeaders}>
              <MainNav>
                <BlogLogo logo={config.siteLogo} title={config.siteTitle} />
                <MenuButton
                  navigation={config.siteNavigation}
                  onClick={this.handleOnClick}
                />
              </MainNav>
            </MainHeader>

            {/* List of all the online track sessions pulled from the google sheet */}
            {/* Need to redo this to break it up into components*/}
            <div className='sponsors-page'>
              <h2>Sponsors</h2>
              <div className='sponsors-text'>
                We would like to thank all our sponsors and partners. Without them, it would not have been possible for us to make SAP Online Track such a great success.

                We hope our relationship with our various sponsors and partners continues in the future. 
              </div>  
              <div>
                <ul className='sponsors-list'>
                  {sponsors.map((sponsor, i) => 
                  <li key={i}>
                    <a href={sponsor.website}>
                      <img src={'/images/sponsor_logos/' + sponsor.logo} alt={sponsor.name} 
                        srcSet={ '/images/sponsor_logos/512/' + sponsor.logo + ' 512w, /images/sponsor_logos/192/' + sponsor.logo + ' 192w'} 
                        sizes="(max-width: 800px) 192px, 512px"
                        />
                    </a>
                  </li> 
                  )}
                </ul>
              </div>
            </div>

            {/* The tiny footer at the very bottom */}
            <Footer
              copyright={config.copyright}
              promoteGatsby={config.promoteGatsby}
            />
          </SiteWrapper>
        </Drawer>
      </Layout>
      </div>
    );
  }
}

/* eslint no-undef: "off" */
export const pageQuery = graphql`
query {
  allGoogleSheetSheet1Row(filter: {status: {eq: "Agreed"}}) {
    nodes {
      name
      website
      logo
    }
  }
}
`;


export default SponsorsPage;
