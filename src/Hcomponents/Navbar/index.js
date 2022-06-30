import React, { Component } from "react";
export default class index extends Component {
  render() {
    return (
      <div>
        {/* Navigation */}
        <aside id="menu">
          <div id="navigation">
            <ul className="nav" id="side-menu">
              <li>
                <a href="index.html">
                  <span className="nav-label">
                    <i className="fa fa-dashboard" />
                    &nbsp;Dashboard
                  </span>{" "}
                  <span className="label label-success pull-right">
                    v.1
                  </span>{" "}
                </a>
              </li>

              <li>
                <a href="#">
                  <span className="nav-label">
                    <i className="fa fa-database" />
                    &nbsp;Master
                  </span>
                  <span className="fa arrow" />{" "}
                </a>
                <ul className="nav nav-second-level">
                  <li>
                    <a href="panels.html">
                      <i className="fa fa-edit " />
                      &nbsp; Detail Usaha
                    </a>
                  </li>
                  <li>
                    <a href="typography.html">
                      <i className="fa fa-edit " />
                      &nbsp; Modal Usaha{" "}
                    </a>
                  </li>
                  <li>
                    <a href="buttons.html">
                      <i className="fa fa-edit " />
                      &nbsp; Pemasukan{" "}
                    </a>
                  </li>
                  <li>
                    <a href="buttons.html">
                      <i className="fa fa-edit " />
                      &nbsp; Pengeluaran{" "}
                    </a>
                  </li>
                  <li>
                    <a href="buttons.html">
                      <i className="fa fa-edit " />
                      &nbsp; Laba{" "}
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="logout.html">
                  {" "}
                  <span className="nav-label">
                    <i className="fa fa-sign-in " />
                    &nbsp; Logout
                  </span>{" "}
                </a>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    );
  }
}
