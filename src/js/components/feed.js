import React, { Component } from "react";
import "../../styles/styles.scss";

class Feed extends Component {
  constructor(props) {
    super(props);
  }

  handleScroll(e) {
    console.log("scrolling");
  }

  render() {
    return <div className="feed" />;
  }
}

export default Feed;
