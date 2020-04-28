import React, { Component } from "react";
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

class SponsorsPage extends Component {
  constructor() {
    super(...arguments);
    this.state = {
        menuOpen: false
    };
    this.handleOnClick = evt => {
        evt.stopPropagation();
        if (this.state.menuOpen) {
            this.closeMenu();
        }
        else {
            this.openMenu();
        }
    };
    this.handleOnClose = evt => {
        evt.stopPropagation();
        this.closeMenu();
    };
    this.openMenu = () => {
        this.setState({ menuOpen: true });
    };
    this.closeMenu = () => {
        this.setState({ menuOpen: false });
    };
    const getStyle = () => {
      if (cover) {
          return { backgroundImage: `url("${cover}")` };
      }
      return null;
  };
}
    render() {
        const { cover } = this.props.pageContext;

        const sessions = this.props.data.allGoogleSheetSpeakersRow;
        
        return (<div className="sessions-container">
        <Helmet title={`Sessions | ${config.siteTitle}`}/>
        <Layout location={this.props.location}>
        <Drawer className="session-template" isOpen={this.state.menuOpen}>
          <Helmet title={`Speaker Sessions | ${config.siteTitle}`}/>

          
          <Navigation config={config} onClose={this.handleOnClose}/>

          <SiteWrapper>
            <MainHeader className="sessions-head" cover={cover}>
              <MainNav>
                <BlogLogo logo={config.siteLogo} title={config.siteTitle}/>
                <MenuButton navigation={config.siteNavigation} onClick={this.handleOnClick}/>
              </MainNav>
            </MainHeader>

            
            
            
            <Footer copyright={config.copyright} promoteGatsby={config.promoteGatsby}/>
          </SiteWrapper>
        </Drawer>
      </Layout>
        
      </div>);
    }
}
export default SponsorsPage;
