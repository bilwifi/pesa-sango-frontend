import React from "react";
import { bool } from "prop-types";

import { Nav, NavItem, NavLink } from "reactstrap";
import styled from "styled-components";

const media = {
  phone: "@media(min-width: 320px)",
  phonelg: "@media(min-width: 375px)",
  phonebg: "@media(min-width: 425px)",
};

const MenuStyle = styled.div`
  ${media.phone} {
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    transform: ${({ open }) => (open ? "translateX(20%)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
    background: #000;
    opacity: 0.5;
    color: white;
    width: 100%;
    overflow-x: hidden;

    .nav-link {
      font-size: 1.2rem;
      text-transform: uppercase;
      padding: 5rem 0 0 0;
      font-weight: bold;
      letter-spacing: 0.2rem;
      color: white;
      text-decoration: none;
      transition: color 0.3s linear;
      text-align: center;
    }
  }
  ${media.phonebg} {
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    transform: ${({ open }) => (open ? "translateX(20%)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
    background: #000;
    opacity: 0.5;
    color: white;
    width: 100%;
    overflow-x: hidden;

    .nav-link {
      font-size: 1.2rem;
      text-transform: uppercase;
      padding: 5rem 0 0 0;
      font-weight: bold;
      letter-spacing: 0.2rem;
      color: white;
      text-decoration: none;
      transition: color 0.3s linear;
      text-align: center;
    }
  }
`;

function Menu({ open }) {
  return (
    <MenuStyle open={open}>
      <Nav className="text-right" vertical>
        <NavItem>
          <NavLink href=".">Acueil</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/formulaire">Signaler</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/recherche">Recherche</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/listes-plaintes">Liste plaintes</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/carthographie">Carthographie</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/connexion">Connexion</NavLink>
        </NavItem>
      </Nav>
    </MenuStyle>
  );
}

Menu.propTypes = {
  open: bool.isRequired,
};

export default Menu;
