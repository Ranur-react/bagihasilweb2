import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-icons/bs";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
export default class index extends Component {
  render() {
    const userIcons = (
      <>
        <Icon.BsFillPersonFill className="me-1"></Icon.BsFillPersonFill>
        JhonDoe
      </>
    );
    return (
      <div>
        <Navbar className="navbar-dark" bg="dark" expand="lg">
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
                  <Icon.BsFillGridFill className="me-1"></Icon.BsFillGridFill>
                  Dashboard
                </Nav.Link>
                <Nav.Link
                  className="d-flex align-items-center justify-content-center"
                  href="#link"
                >
                  <Icon.BsServer className="me-1"></Icon.BsServer>
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
                {/* <DropdownButton variant="dark" drop="down" title={userPicture}>
                  <Dropdown.Item eventKey="4">User Options</Dropdown.Item>
                  <Dropdown.Divider />
                  <Dropdown.Item eventKey="4">LogOut</Dropdown.Item>
                </DropdownButton> */}
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
