import React, { Component } from "react";
import Ticker from "react-ticker";

class FooterTicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickerText: "|||",
      seconds: 0,
      mouseX: 0,
      mouseY: 0,
      width: 0,
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  setMouseData = e => {
    const { mouseX, mouseY } = this.state;
    this.setState({
      mouseX: e.pageX,
      mouseY: e.pageY
    });
    this.setTickerText();
  };

  setTickerText() {
    const { mouseX, mouseY, width, height, tickerText } = this.state;
    this.setState({
      tickerText: `${mouseY < height / 2 ? "top" : "bottom"}  ${
        mouseX < width / 2 ? "left" : "right"
      }`
    });
  }

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const { tickerText } = this.state;
    return (
      <div className="footer-ticker">
        <div className="footer-ticker__inner">
          <Ticker direction="toLeft" offset="run-in" speed={10}>
            {index => <h1>{tickerText}</h1>}
          </Ticker>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
    window.addEventListener("mousemove", this.setMouseData);
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    window.removeEventListener("resize", this.updateWindowDimensions);
  }
}

export default FooterTicker;
