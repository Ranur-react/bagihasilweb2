import React, { Component } from "react";
import * as Bcom from "./Bcomponents";

export default class App extends Component {
  render() {
    return (
      <div>
        <Bcom.Header />
        <Bcom.Content />
        <Bcom.Footer />
      </div>
    );
  }
}
