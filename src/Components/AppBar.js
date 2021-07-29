// import React from "react";
// import { Link } from "react-scroll";
// import "./Styles/AppBar.css";

// export default function AppBar() {
//   return (
//     <div className="w-full">
//       {/* <div className="nav p-15" >
//         <input type="checkbox" id="nav-check" />
//         <div className="nav-header">
//           <div className="nav-title">
//             Verior
//           </div>
//         </div>
//         <div className="nav-btn">
//           <label htmlFor="nav-check">
//             <span />
//             <span />
//             <span />
//           </label>
//         </div>
//         <div className="nav-links">
//           <a><Link activeClass="active" to="about" spy={true} smooth={true} offset={50} duration={500}>About Us</Link></a>
//           <a ><Link activeClass="active" to="wwd" spy={true} smooth={true} offset={50} duration={500}>What We Do</Link></a>
//           <a ><Link activeClass="active" to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact Us</Link></a>
//         </div>
//       </div> */}
//       <div className="header header-fixed">
//         <div className="navbar container">
//           <div className="logo">
//             <a href="">VERIOR</a>
//           </div>
//           <input type="checkbox" id="navbar-toggle" />
//           <label htmlFor="navbar-toggle">
//             <i />
//           </label>
//           <nav className="menu">
//             <ul>
//               <li>
//                 <a>
//                   <Link
//                     activeClass="active"
//                     to="about"
//                     spy={true}
//                     smooth={true}
//                     offset={50}
//                     duration={500}
//                   >
//                     About Us
//                   </Link>
//                 </a>
//               </li>
//               <li>
//                 <a>
//                   <Link
//                     activeClass="active"
//                     to="wwd"
//                     spy={true}
//                     smooth={true}
//                     offset={50}
//                     duration={500}
//                   >
//                     What We Do
//                   </Link>
//                 </a>
//               </li>
//               <li>
//                 <a>
//                   <Link
//                     activeClass="active"
//                     to="contact"
//                     spy={true}
//                     smooth={true}
//                     offset={50}
//                     duration={500}
//                   >
//                     Contact Us
//                   </Link>
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </div>
//     </div>
//   );
// }

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
import {Link} from "react-scroll"

class NavbarPage extends Component {
  state = {
    isOpen: false,
  };

  toggleCollapse = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      // <Router>
        <MDBNavbar style={{backgroundColor:"#003F63",fontWeight:"bolder",paddingTop:"10px",paddingBottom:"10px",paddingLeft:"70px",paddingRight:"70px",boxShadow:"none"}}  expand="md" fixed="true">
          <MDBNavbarBrand>
            <strong className="white-text" style={{fontSize:"22pt",fontWeight:"bolder"}}>Verior</strong>
          </MDBNavbarBrand>
          <MDBNavbarToggler onClick={this.toggleCollapse}  className="text-white shadow-lg border-white"/>
          <MDBCollapse id="navbarCollapse3" isOpen={this.state.isOpen} navbar >
            <MDBNavbarNav right>
              <MDBNavItem active className="text-white">
                <Link
                  activeClass="active"
                  to="about"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  style={{fontSize:"12pt",fontWeight:"bolder"}}
                >
                  About Us
                </Link>
              </MDBNavItem>
              &nbsp;
              &nbsp;
              &nbsp;
              <MDBNavItem className="text-white">
                <Link
                  activeClass="active"
                  to="wwd"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  style={{fontSize:"12pt",fontWeight:"bolder"}}
                >
                  What We Do
                </Link>
              </MDBNavItem>
              &nbsp;
              &nbsp;
              &nbsp;
              <MDBNavItem className="text-white">
                <Link
                  activeClass="active"
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={50}
                  duration={500}
                  style={{fontSize:"12pt",fontWeight:"bolder"}}
                >
                  Contact Us
                </Link>
              </MDBNavItem>
              <MDBNavItem>
                {/*               
              <MDBDropdown>
                <MDBDropdownToggle nav caret>
                  <span className="mr-2">Dropdown</span>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem href="#!">Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Another Action</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                  <MDBDropdownItem href="#!">Something else here</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
           */}
              </MDBNavItem>
            </MDBNavbarNav>
            {/*           
          <MDBNavbarNav right>
            <MDBNavItem>
              <MDBFormInline waves>
                <div className="md-form my-0">
                  <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                </div>
              </MDBFormInline>
            </MDBNavItem>
          </MDBNavbarNav>
      */}
          </MDBCollapse>
        </MDBNavbar>
      // </Router>
    );
  }
}

export default NavbarPage;
