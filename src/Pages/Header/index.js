import React, { Component } from "react";
import Navbar from "./Navbar";
export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuLeft: [
        { lable: "Dashboard", icon: "grid-fill", destLink: "/home",subMenu: [] },
        {
          lable: "Master",
          icon: "hdd-stack",
          destLink: "",
          subMenu: [
            {
              lable: "Input data Mahasiswa",
              icon: "people-fill",
              destLink: "/user",
            },
            {
              lable: "Input data Jurusan",
              icon: "people-fill",
              destLink: "/univer",
            },
          ],
        },
        { lable: "Other", icon: "infinity", destLink: "",subMenu: [] },
        { lable: "About", icon: "info-circle", destLink: "",subMenu: [] },
      ],
      menuRight: [{ lable: "Jhone Doe", type: "Drop", icon: "person-circle" }],
    };
  }
  render() {
    return (
      <div>
        <Navbar
          lmenu={this.state.menu}
          rmenu={this.state.menuRight}
          theme="primary"
          themeF="dark"
        />
      </div>
    );
  }
}
