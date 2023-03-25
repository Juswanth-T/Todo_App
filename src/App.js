import React, { Component } from "react";
import "./App.css";
import List from "./Components/List.js";


class App extends Component {
  render() {
    return (
      <div className="App1" >
        <h1 className="App2"><b>LIST OF WORKS</b></h1>
        <List />
      </div>
    )
  }
}
export default App;
