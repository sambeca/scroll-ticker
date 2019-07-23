import React, { Component } from "react";
import Ticker from "react-ticker";

class HeaderTicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickerText: "test",
      scrollY: 0,
      seconds: 0,
      mouseX: 0,
      mouseY: 0
    };
  }

  onMouseMove = e => {
    this.setState({
      mouseX: e.nativeEvent.offsetX,
      mouseY: e.nativeEvent.offsetY
    });
  };

  setScroll = e => {
    const { scrollTop } = this.state;
    this.setState({ scrollY: window.scrollY });
  };

  tick() {
    this.setState(prevState => ({
      seconds: prevState.seconds + 1
    }));
  }

  render() {
    const { seconds, mouseX, mouseY, scrollY } = this.state;
    return (
      <div className="header-ticker" onMouseMove={this.onMouseMove.bind(this)}>
        <div className="header-ticker__inner">
          <Ticker direction="toRight" offset="run-in" speed={10}>
            {index => <h1>{scrollY}</h1>}
          </Ticker>
        </div>
      </div>
    );
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 10);
    window.addEventListener("scroll", this.setScroll);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }
}

export default HeaderTicker;
