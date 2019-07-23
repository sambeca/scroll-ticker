import React, { Component } from "react";
import "./App.css";
import HeaderTicker from "./js/components/header_ticker";
import FooterTicker from "./js/components/footer_ticker";
import Feed from "./js/components/feed";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderTicker />
        <Feed />
        <FooterTicker />
      </div>
    );
  }
}

export default App;
