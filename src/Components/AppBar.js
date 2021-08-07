import React, { Component } from "react";
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
} from "mdbreact";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-scroll";

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <MDBNavbar
        style={{
          backgroundColor: "#003F63",
          fontWeight: "bolder",
          paddingTop: "10px",
          paddingBottom: "10px",
          paddingLeft: "70px",
          paddingRight: "70px",
          boxShadow: "none",
        }}
        expand="md"
        fixed="true"
      >
        <MDBNavbarBrand>
          <strong
            className="white-text"
            style={{ fontSize: "22pt", fontWeight: "bolder" }}
          >
            Verior
          </strong>
        </MDBNavbarBrand>
        <MDBNavbarToggler
          onClick={this.toggleCollapse}
          className="text-white shadow-lg border-white"
        />
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar>
          <MDBNavbarNav right>
            <MDBNavItem active className="text-white">
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                style={{ fontSize: "12pt", fontWeight: "bolder" }}
              >
                About Us
              </Link>
            </MDBNavItem>
            &nbsp; &nbsp; &nbsp;
            <MDBNavItem className="text-white">
              <Link
                activeClass="active"
                to="wwd"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                style={{ fontSize: "12pt", fontWeight: "bolder" }}
              >
                What We Do
              </Link>
            </MDBNavItem>
            &nbsp; &nbsp; &nbsp;
            <MDBNavItem className="text-white">
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={50}
                duration={500}
                style={{ fontSize: "12pt", fontWeight: "bolder" }}
              >
                Contact Us
              </Link>
            </MDBNavItem>
            <MDBNavItem></MDBNavItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBNavbar>
    );
  }
}

export default NavbarPage;
