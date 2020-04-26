import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function MainNav(props) {

  return (
    <>
      <Navbar collapseOnSelect bg="dark" variant="dark" sticky="top" >
        <Nav className="mr-auto">
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }} > FashionTalks </Link>
        </Nav>
        <Nav id="login">
          <Link to="/login" style={{ color: 'white', textDecoration: 'none' }} > Sign In </Link>
        </Nav>
        <Nav id="signup">
          <Link to="/signup" style={{ color: 'white', textDecoration: 'none' }} > Sign Up </Link>
        </Nav>
      </Navbar>
    </>
  )
}