import React from "react";
import { IndexLinkContainer } from "react-router-bootstrap";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";
import "./NavigationBar.scss";

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="md" variant="light" fixed="top">
      <Navbar.Brand href="/">
        <img
          alt=""
          src="./assets/images/logo.png"
          className="navbar-brand"
          width="250px"
        />
      </Navbar.Brand>

      <Navbar.Toggle />

      <Navbar.Collapse id="navigation-bar">
        <Nav className="mx-auto">
          <IndexLinkContainer to="/" href="/">
            <Nav.Link className="text-uppercase">Home</Nav.Link>
          </IndexLinkContainer>

          <NavDropdown title="The Academy" id="dropdown-menu-1">
            <IndexLinkContainer to="/about-us" href="/about-us">
              <NavDropdown.Item>About us</NavDropdown.Item>
            </IndexLinkContainer>
            <IndexLinkContainer to="/the-staff" href="/the-staff">
              <NavDropdown.Item>The staff</NavDropdown.Item>
            </IndexLinkContainer>
            <IndexLinkContainer to="/gallery" href="/gallery">
              <NavDropdown.Item>Gallery</NavDropdown.Item>
            </IndexLinkContainer>
            <IndexLinkContainer to="/explore-around" href="/explore-around">
              <NavDropdown.Item>Explore around</NavDropdown.Item>
            </IndexLinkContainer>
            <IndexLinkContainer to="/partners" href="/partners">
              <NavDropdown.Item>Partners</NavDropdown.Item>
            </IndexLinkContainer>
          </NavDropdown>

          <NavDropdown title="The Program" id="dropdown-menu-2">
            <IndexLinkContainer to="/accomodations" href="/accomodations">
              <NavDropdown.Item>accomodations</NavDropdown.Item>
            </IndexLinkContainer>
            <IndexLinkContainer to="/food" href="/food">
              <NavDropdown.Item>The food</NavDropdown.Item>
            </IndexLinkContainer>
            <IndexLinkContainer to="/faq" href="/faq">
              <NavDropdown.Item>FAQ</NavDropdown.Item>
            </IndexLinkContainer>
            <IndexLinkContainer to="/testimonials" href="/testimonials">
              <NavDropdown.Item>Testimonials</NavDropdown.Item>
            </IndexLinkContainer>
          </NavDropdown>

          <IndexLinkContainer to="/Contact" href="/Contact">
            <Nav.Link className="text-uppercase">Contact</Nav.Link>
          </IndexLinkContainer>

          <IndexLinkContainer to="/covid-19" href="/covid-19">
            <Nav.Link className="text-uppercase">Covid 19</Nav.Link>
          </IndexLinkContainer>
        </Nav>
        <IndexLinkContainer
          to="/contact"
          href="/contact"
          className="btn btn-success btn-lg rounded-0"
        >
          <Button>
            <span>Book your spot</span>
          </Button>
        </IndexLinkContainer>
      </Navbar.Collapse>
    </Navbar>
  );
};

// @ts-ignore
export default NavigationBar;