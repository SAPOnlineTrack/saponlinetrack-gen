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

import "./sessions.css";

class SessionsPage extends Component {
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
            <div className='sessions-page'>
            <h2>SAP Online Track Session List</h2>
            <div className='sessions- text'>
              This is the latest list of registered sessions for SAP Online Track.   
              Unfortunately registration for this event is now closed.
            </div>  
            <div>
          
            <Table className='sessions-table'>
            <Thead className='sessions-table-head'>
              <Tr className='sessions-table-row'>
                <Th className='sessions-table-header'>Track</Th>
                <Th className='sessions-table-header'>Title</Th>
                <Th className='sessions-table-data collapsable'>Description</Th>
                <Th className='sessions-table-header'>Speaker</Th>
             </Tr>
             </Thead>
             <Tbody className='sessions-table-body'>
             {sessions.map((session, i) => 

             <Tr key={i} className='sessions-table-row'>
                <Td className='sessions-table-data'>{session.track}</Td>
                <Td className='sessions-table-data'>
                  {session.titleofthesession}
                  <br/>
                  <br/>
                  {session.howlongisyoursession}
                  <br/>
                  {session.languageofyoursession}
                </Td>
                <Td className='sessions-table-data collapsable'>{session.sessiondescription}</Td>
                <Td className='sessions-table-data'>
                  {session.useronthesapcommunity !== null &&
                    <a href={'https://people.sap.com/' + session.useronthesapcommunity}>{session.yourname}</a>
                  }
                  {
                  session.useronthesapcommunity === null &&
                    session.yourname
                  }
                  <br/>
                  {session.twitterhandle !== null &&
                  <a href={this.convertTwitterHandleToHRef(session.twitterhandle)}>({session.twitterhandle})</a>
                  }
                </Td>
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


export default SessionsPage;
