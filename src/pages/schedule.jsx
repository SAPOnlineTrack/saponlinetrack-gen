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

import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

import "./schedule.css";

class SchedulePage extends Component {
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
  
  render() {

    const sessions = this.props.data.allGoogleSheetSpeakersRow.nodes;

    return (
      <div className="sessions-container">
        <Helmet title={`Sessions | ${config.siteTitle}`} />
        <Layout location={this.props.location}>
        <Drawer className="sessions-template" isOpen={this.state.menuOpen}>
          <Helmet title={`Speaker Sessions | ${config.siteTitle}`} />

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
            <div className='schedule-page'>
            <h2>SAP Online Track Schedule</h2>
            <div className='schedule-text'>
              This is the latest list of registered sessions for SAP Online Track.   
              If you are keen to run your own session, please register via our <a href="/keen-to-speak">google form</a>.
            </div>  
            <div>
          
            <Table className='schedule-table'>
            <Thead>
              <Tr>
                <Th>Time (UTC)</Th>
                <Th>Track 1</Th>
                <Th>Track 2</Th>
                <Th>Track 3</Th>
             </Tr>
             </Thead>
             <Tbody>
             {sessions.map((session, i) => 

             <Tr key={i}>
                <Td>10:00</Td>
                <Td>{session.titleofthesession}</Td>
                <Td>{session.yourname}</Td>
                <Td>{session.howlongisyoursession}</Td>
                
              </Tr>
            )}
            </Tbody>
            </Table>
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
  allGoogleSheetSpeakersRow(sort: {fields: track}, filter: {track: {ne: "?"}}) {
    nodes {
      twitterhandle
      titleofthesession
      track
      languageofyoursession
      howlongisyoursession
      sessiondescription
      emailaddress
      useronthesapcommunity
      yourname
    }
  }
}
`;


export default SchedulePage;