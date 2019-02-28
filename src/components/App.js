import React, { Component } from "react";
import "../styles/App.css";
import Activity from './Activity';

// import ResourceList from "./ResourceList";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div>Activities</div>
        </header>
        <Activity />
      </div>
    );
  }
}

export default App;
