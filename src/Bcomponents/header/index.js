import React, { Component } from "react";
import Asidenav from "./asidenav";
import Sidenav from "./sidenav";
export default class index extends Component {
  render() {
    return (
      <div>
        <Sidenav />
        <Asidenav />
      </div>
    );
  }
}
