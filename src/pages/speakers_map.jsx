import React, { Component } from "react";
import { graphql } from 'gatsby'
import Helmet from "react-helmet";
import config from "../../data/SiteConfig";
import Drawer from "../components/Drawer/Drawer";
import SEO from "../components/SEO/SEO";
import Navigation from "../components/Navigation/Navigation";
import SiteWrapper from "../components/SiteWrapper/SiteWrapper";
import MainHeader from "../components/MainHeader/MainHeader";
import MainNav from "../components/MainNav/MainNav";
import BlogLogo from "../components/BlogLogo/BlogLogo";
import MenuButton from "../components/MenuButton/MenuButton";
import Footer from "../components/Footer/Footer";
import Layout from "../components/layout";
import {Map, TileLayer, Marker, Popup} from 'react-leaflet';
import L from 'leaflet';


import "./speakers_map.css";

class SpeakersMapPage extends Component {
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

  /*
  sapOnlineTrackLogo = new L.Icon({
    iconUrl: '../static/logos/suitcaseIcon.svg',
    iconRetinaUrl: '../assets/suitcaseIcon.svg',
    iconAnchor: [20, 40],
    popupAnchor: [0, -35],
    iconSize: [40, 40]
  });*/

  //Nomatim rules have changed and API calls must be 1 second apart, which is lame
  /*convertLocationtoLatLon = location =>{
    fetch('https://nominatim.openstreetmap.org/search?country=' + location + '&format=json', {mode:'no-cors'})
    .then( response => response.json())
    .then( locationInfo => console.log(locationInfo))  
  };*/
  
  getMappingPins = speakerLocations =>{
    
    const uniqueLocations = [];
    const mapPins = [];
    speakerLocations.forEach(location =>{
      if(uniqueLocations.includes(location.location) === false){
        uniqueLocations.push(location.location);
        var mapPin = new Object();
        mapPin.location = location.location;
        mapPin.position = [ parseFloat(location.latstring.replace(/'/g,'')), parseFloat(location.lonstring.replace(/'/g,''))];
        mapPin.speakers = [];
        mapPin.speakers.push(location.who);
        mapPins.push(mapPin);
      }else{
        mapPins.forEach(pin =>{
          if(pin.location === location.location){
            if(pin.speakers.includes(location.who) === false){
              pin.speakers.push(location.who);
            }
          }
        });
      }
    });
    
    return mapPins;
  }


  render() {
    const locations = this.props.data.allGoogleSheetSpeakerLocationsRow.nodes;
    const mappingPins = this.getMappingPins(locations);
    const centrePosition = [51.505, -0.09]; 
    const { nodes } = this.props.pageContext;
    
    
    return (
      <div className="speakers-map-container">
        <Helmet title={`Speakers Map | ${config.siteTitle}`} />
        <Layout location={this.props.location}>
        <Drawer className="speakers-map-template" isOpen={this.state.menuOpen}>
          <Helmet title={`Speakers Map | ${config.siteTitle}`} />
          <SEO postEdges={nodes} />

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
            <div className='speakers-map-page'>
            <h2>Map of Speakers</h2>
            <div className='speakers-map-text'>
              We are amazed at the diversity of all the speaker sessions we have lined up.  
              This map pin points all locations of the countries being represented for our latest session.
            </div>  
            <div>
            
            <Map center={centrePosition} zoom={2} className="speaker-map">
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"/>
              
              {mappingPins.map((pin, i) =>
                <Marker position={pin.position} key={i} >
                  <Popup>
                    <h5>{pin.location}</h5>
                    <table className="speaker-pin-table">
                    <tbody>
                    {pin.speakers.map((speaker, j) =>
                      <tr key={j}><td>{speaker}</td></tr>
                    )}
                    </tbody>
                    </table>
                  </Popup>
                </Marker>
              )}
            </Map>
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
  allGoogleSheetSpeakerLocationsRow {
    nodes {
      location
      who
      latstring
      lonstring
    }
    group(field: location) {
      edges {
        node {
          id
        }
      }
    }
  }
}
`;


export default SpeakersMapPage;
