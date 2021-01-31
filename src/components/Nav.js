import React, { useState } from 'react'
import { Nav, Logo, Hamburger, Menu, MenuLink } from './Nav.Style'

const Navbar = (props) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
      <Nav>
        <Logo to="/">
          Fre<span>SS</span>
        </Logo>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLink to="/cart">Cart</MenuLink>
          <MenuLink to="/search">Search</MenuLink>
          <MenuLink to="/fruits">Fruits</MenuLink>
          <MenuLink to="/vegetables">Vegetables</MenuLink>
          
          {

              sessionStorage.getItem('loggedIn') === 'true' ? 
              <>
              <MenuLink to="/profile"><img style={{borderRadius: '50%'}} src={"http://localhost/fress/"+sessionStorage.getItem('image')} als="image" width="30" height="30"/></MenuLink>
              <MenuLink to="/" onClick={props.logout}>Logout</MenuLink>
              </>
              :
              <MenuLink to="/login">Login</MenuLink>
              
          }
        </Menu>
      </Nav>
    );
  };
  
  export default Navbar;