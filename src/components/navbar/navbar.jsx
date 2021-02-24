import React, { useState } from "react";
import Logo from "../../images/TrackR@2x.png";
import {
  NavbarContainer,
  NavbarWrapper,
  NavbarLogo,
  NavbarMenu,
  NavbarList,
  NavbarLinks,
  NavbarButton,
  NavbarMenuIcon,
  NavbarClosedIcon
} from "./navbarElements";
const Navbar = () => {
  const [show, setShow] = useState(false);

  const handleShowClosed = () => {
    setShow(false);
  };
  return (
    <NavbarContainer>
      <NavbarWrapper>
        <NavbarLogo to="/">
          <img src={Logo} alt="logo" />
        </NavbarLogo>
        <NavbarMenu show={show}>
          <NavbarList>
            <NavbarLinks to="/about" onClick={handleShowClosed}>
              About
            </NavbarLinks>
          </NavbarList>
          <NavbarList>
            <NavbarLinks to="/about" onClick={handleShowClosed}>
              Testimonial
            </NavbarLinks>
          </NavbarList>
          <NavbarList>
            <NavbarLinks to="/about" onClick={handleShowClosed}>
              Contact Us
            </NavbarLinks>
          </NavbarList>
          <NavbarList>
            <NavbarButton to="start" onClick={handleShowClosed}>
              Start for free
            </NavbarButton>
          </NavbarList>
        </NavbarMenu>
        {!show ? (
          <NavbarMenuIcon onClick={() => setShow(!show)} />
        ) : (
          <NavbarClosedIcon onClick={() => setShow(!show)} />
        )}
      </NavbarWrapper>
    </NavbarContainer>
  );
};

export default Navbar;
