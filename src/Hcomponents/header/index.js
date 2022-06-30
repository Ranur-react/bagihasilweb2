import React, { Component } from "react";
import { titleTeks, titleLogo } from "./HeaderLogo";

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* Header */}
        <div id="header">
          <div className="color-line"></div>
          <div id="logo" className="light-version">
            {this.props.AppTitle != null
              ? titleTeks(this.props.AppTitle)
              : this.props.AppIcons != null
              ? titleLogo(this.props.AppIcons)
              : titleTeks("No Brand")}
          </div>
          <nav role="navigation">
            <div className="header-link hide-menu">
              <i className="fa fa-bars" />
            </div>
            <div className="small-logo">
              {this.props.AppTitle != null
                ? titleTeks(this.props.AppTitle)
                : this.props.AppIcons != null
                ? titleLogo(this.props.AppIcons)
                : titleTeks("No Brand")}
            </div>
            <form
              role="search"
              className="navbar-form-custom"
              method="post"
              action="#"
            >
              <div className="form-group">
                <input
                  type="text"
                  placeholder="Search something special"
                  className="form-control"
                  name="search"
                />
              </div>
            </form>
          </nav>
        </div>
        {/* Navigation */}
      </div>
    );
  }
}
