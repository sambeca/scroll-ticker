import React, { Component } from "react";
import Ticker from "react-ticker";

class HeaderTicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      tickerText: "test"
    };
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 10);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { seconds } = this.state;
    return (
      <div className="header-ticker">
        <div className="header-ticker__inner">
          <Ticker direction="toRight" offset="run-in" speed={10}>
            {index => <h1>{seconds}</h1>}
          </Ticker>
        </div>
      </div>
    );
  }
}

export default HeaderTicker;
