import React from "react";
import "./PageCharity.css";
class PageCharity extends React.Component {
    render() {
        const { text, url, imgUrl } = this.props;
        if (text) {
            return <h2 className="page-charity"><div></div><a className="page-charity" href={url}><div><img border="0" alt="Donate to Girls Who Code" src={imgUrl}/></div></a></h2>;
        }
        return null;
    }
}
export default PageCharity;
