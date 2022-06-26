import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import * as Icon from "react-icons/bs";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: !props.theme ? "light" : props.theme,
      themeF: !props.themeF ? this.theme : props.themeF,
      icons: "BsFillGridFill",
    };
  }
  render() {
    const userIcons = (
      <>
        <i class="bi-person-circle me-1"></i>
        JhonDoe
      </>
    );
    return (
      <div>
        <Navbar variant={this.state.themeF} bg={this.state.theme} expand="lg">
          <Container>
            <Navbar.Brand href="#home">
              <img
                src="./assets/logo19.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
                alt=""
              />
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link
                  className="d-flex align-items-center justify-content-center"
                  href="#home"
                >
                  <i class="bi-grid-fill me-1"></i>
                  Dashboard
                </Nav.Link>
                <Nav.Link
                  className="d-flex align-items-center justify-content-center"
                  href="#link"
                >
                  <i class="bi-server me-1"></i>
                  Master
                </Nav.Link>
                <NavDropdown title="Other" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Chart</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Tables</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Form</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.3">
                    Pictures galery
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">
                    Dropdown Pages
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
              <Nav className="ml-auto" activeKey="Users">
                <NavDropdown title={userIcons} id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">
                    User Options
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.1">LogOut</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
