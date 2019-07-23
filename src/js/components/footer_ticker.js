import React, { Component } from "react";
import Ticker from "react-ticker";

class FooterTicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickerText: "test",
      seconds: 0,
      mouseX: 0,
      mouseY: 0
    };
  }

  setMouseData = e => {
    const { mouseX, mouseY } = this.state;
    this.setState({
      mouseX: e.pageX,
      mouseY: e.pageY
    });
  };

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  render() {
    const { seconds, mouseX, mouseY } = this.state;
    return (
      <div className="footer-ticker">
        <div className="footer-ticker__inner">
          <Ticker direction="toRight" offset="run-in" speed={10}>
            {index => <h1>{`You were at ${mouseX} ${mouseY}`}</h1>}
          </Ticker>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
    window.addEventListener("mousemove", this.setMouseData);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default FooterTicker;
