import React, { useState } from "react";
import { Link, NavLink as Url} from 'react-router-dom';
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
               <Url to="/"><NavLink>Acceuil</NavLink></Url> 
            </NavItem>
            <NavItem>
               <Url to="/plaintes"><NavLink>Signaler</NavLink></Url> 
            </NavItem>
            <NavItem>
              <Url to="/recherche"><NavLink>Recherche</NavLink></Url> 
            </NavItem>
            <NavItem>
              <Url to="/listes-plaintes"><NavLink>Liste plaintes</NavLink></Url> 
            </NavItem>
            {/* <NavItem>
              <Url to="/formulaire"><NavLink href="/carthographie">Carthographie</NavLink></Url> 
            </NavItem> */}
            <NavItem>
              <Url to="/login"><NavLink>Connexion</NavLink></Url> 
            </NavItem>
            <NavItem>
              <Url to="/signup"><NavLink>S'inscrire</NavLink></Url> 
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </HeaderStyle>
  );
}

export default Header;
