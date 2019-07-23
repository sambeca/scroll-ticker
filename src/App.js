import React, { Component } from "react";
import "./App.css";
import Ticker from "react-ticker";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Ticker direction="toRight" offset="100%" speed={10}>
          {index => <h1>Test</h1>}
        </Ticker>
      </div>
    );
  }
}

export default App;
