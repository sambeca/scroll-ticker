import React, { Component } from "react";
import Ticker from "react-ticker";

class HeaderTicker extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div class="header-ticker">
        <div className="header-ticker__inner">
          <Ticker direction="toRight" offset="100%" speed={10}>
            {index => <h1>Test</h1>}
          </Ticker>
        </div>
      </div>
    );
  }
}

export default HeaderTicker;
