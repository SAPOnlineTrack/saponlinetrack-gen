import React from "react";
import "./PageCharity.css";

class PageCharity extends React.Component {
  render() {
    const { text } = this.props;
      if (text) {
          return <br/><h2 className="page-charity"><a className="page-charity" href={url}><img border="0" alt="Donate to Girls Who Code" src={imgUrl}/></a></h2>;
    }
    return null;
  }
}

export default PageCharity;
