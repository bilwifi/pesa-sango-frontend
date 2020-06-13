import React, { useState } from "react";

import styled from "styled-components";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

import logo from "../images/logo.png";
const HeaderStyle = styled.header`
  width: 100%;

  img {
    width: 50px;
  }
  .nav-bar {
    box-shadow: 5px 10px 10px 5px #ccc;
  }
  .nav {
    display: flex;
    justify-content: flex-end;
  }
  .nav-link{
    font-family: Comfortaa;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 16px;
  }
  .collapse,
  .navbar-toggle {
    &:focus {
      outline: none;
    }
  }
`;

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <HeaderStyle>
      <Navbar color="white" light expand="sm" fixed="top">
        <NavbarBrand href="/">
          <img src={logo} alt="logo" />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto text-center" navbar>
            <NavItem>
              <NavLink href="/">Acceuil</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/plaintes">Signaler</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/recherche">Recherche</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/listes-plaintes">Liste plaintes</NavLink>
            </NavItem>
            {/* <NavItem>
              <NavLink href="/carthographie">Carthographie</NavLink>
            </NavItem> */}
            <NavItem>
              <NavLink href="/login">Connexion</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/signup">S'inscrire</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </HeaderStyle>
  );
}

export default Header;
