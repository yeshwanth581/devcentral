import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="lg" bg="light">
        <Navbar.Brand as={Link} to="/">
          {""}
          <img
            src={logo}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="DevCentral Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-end"
        >
          <Nav>
            <Nav.Link as={Link} to="/learn">
              <span className="headerLink">Interview</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/learn">
              <span className="headerLink">Paths</span>
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              <span className="headerLink">About me</span>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}
