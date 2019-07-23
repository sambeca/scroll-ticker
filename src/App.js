import React, { Component } from "react";
import "./App.css";
import HeaderTicker from "./js/components/header_ticker";
import FooterTicker from "./js/components/footer_ticker";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <HeaderTicker />
        <FooterTicker />
      </div>
    );
  }
}

export default App;
