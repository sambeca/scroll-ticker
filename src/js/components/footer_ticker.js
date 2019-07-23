import React, { Component } from "react";
import Ticker from "react-ticker";
import "../../styles/styles.scss";

class footerTicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickerText: "test"
    };
  }

  render() {
    const { tickerText } = this.state;
    return (
      <div className="footer-ticker">
        <div className="footer-ticker__inner">
          <Ticker direction="toRight" offset="100%" speed={10}>
            {index => <h1>{tickerText}</h1>}
          </Ticker>
        </div>
      </div>
    );
  }
}

export default footerTicker;
