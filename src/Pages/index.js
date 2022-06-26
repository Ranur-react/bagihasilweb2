import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";

export default class Pages extends Component {
  render() {
    return (
      <div>
        <>
          <Header></Header>
          <Content></Content>
          <Footer></Footer>
        </>
      </div>
    );
  }
}
