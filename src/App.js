import React, { Component } from "react";
import * as Hcom from "./Hcomponents";

export default class App extends Component {
  render() {
    return (
      <div>
        <Hcom.Header AppTitle={null} AppIcons={"BAGIH"} />
        <Hcom.Navbar />
        <Hcom.Content />
        <Hcom.Footer />
      </div>
    );
  }
}
