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

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';


import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

import "./sessions.css";

import SessionsTable from "../components/SessionsTable/SessionsTable";

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
    if (twitterHandle === null) return "";

    return "https://twitter.com/" + twitterHandle.substr(1);
  };

  formatDateToEuropean = (date) => {
    const dateParts = date.split("/");
    return dateParts[1] + "/" + dateParts[0] + "/" + dateParts[2];
  };

  mergeSpeakersToSessions = (speakers, sessions) => {

    let allSessions = [];
    let track1Sessions = [];
    let track2Sessions = [];
    let track3Sessions = [];

    sessions.forEach(session => {
      session.twitterhandle = null;
      session.useronthesapcommunity = null;
      session.subjectarea = null;
      session.blogurl = null;
      session.startdate = this.formatDateToEuropean(session.startdate);
      session.confirmed = null;
      // Remove Non Track Details from text
      if (/[|]/.test(session.calendarname)) {
        session.calendarname = session.calendarname.split("|")[1];
      }

      speakers.forEach(speaker => {
        if (session.sessionid === speaker.sessionid) {
          session.twitterhandle = speaker.twitterhandle;
          session.useronthesapcommunity = speaker.useronthesapcommunity
          session.subjectarea = speaker.track;
          session.blogurl = speaker.blogurl;
          session.confirmed = speaker.confirmed;
        }
      });

      if (session.confirmed !== "-") {
        allSessions.push(session);

        switch (session.calendarname) {
          case 'Track 1':
            track1Sessions.push(session);
            break;
          case 'Track 2':
            track2Sessions.push(session);
            break;
          case 'Track 3':
            track3Sessions.push(session);
            break;
        }
      }


    });

    return {
      all: allSessions,
      track1: track1Sessions,
      track2: track2Sessions,
      track3: track3Sessions
    };
  };


  render() {

    const speakers = this.props.data.allGoogleSheetSpeakersRow.nodes;
    let sessions = this.props.data.allGoogleSheetTeamUpExtractRow.nodes;
    sessions = this.mergeSpeakersToSessions(speakers, sessions);

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
                  This is the final list of sessions for SAP Online Track.
              Check out the complete schedule view for the event on our <a href="https://teamup.com/ks9xjppwq4sm4d291a" target="_blank">teamup page</a> put together by the awesome
              Srikanth Peri
              <br />
              Click on the track name to navigate to the YouTube the session link. Note it will not start until the scheduled time.
            </div>
                <div>

                  <Tabs className='sessions-tabs'>
                    <TabList>
                      <Tab>All</Tab>
                      <Tab>Track 1</Tab>
                      <Tab>Track 2</Tab>
                      <Tab>Track 3</Tab>
                    </TabList>

                    <TabPanel>
                      <SessionsTable sessions={sessions.all}></SessionsTable>
                    </TabPanel>
                    <TabPanel>
                      <SessionsTable sessions={sessions.track1}></SessionsTable>
                    </TabPanel>
                    <TabPanel>
                      <SessionsTable sessions={sessions.track2}></SessionsTable>
                    </TabPanel>
                    <TabPanel>
                      <SessionsTable sessions={sessions.track3}></SessionsTable>
                    </TabPanel>
                  </Tabs>
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
  allGoogleSheetSpeakersRow(sort: {fields: track}) {
    totalCount
    nodes {
      sessionid
      twitterhandle
      useronthesapcommunity
      titleofthesession
      track
      blogurl
      confirmed
    }
  }
  allGoogleSheetTeamUpExtractRow (sort: {fields: sessioncode}) {
    totalCount
    nodes {
      sessionid
      sessioncode
      who
      subject2
      description
      startdate
      starttime
      enddate
      endtime
      calendarname
      calendarlink
      streaminglink
    }
  }
}
`;


export default SessionsPage;
