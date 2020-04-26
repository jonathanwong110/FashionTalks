import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function MainNav(props) {

  return (
    <>
      <Navbar collapseOnSelect bg="dark" variant="dark" sticky="top" >
        <Nav className="mr-auto" onClick={() => props.filterBy('clothing')}>
          <Link to="/sections/clothing" style={{ color: 'white', textDecoration: 'none' }} > Clothing </Link>
        </Nav>
        <Nav className="mr-auto" onClick={() => props.filterBy('shoes')}>
          <Link to="/sections/shoes" style={{ color: 'white', textDecoration: 'none' }} > Shoes </Link>
        </Nav>
        <Nav className="mr-auto" onClick={() => props.filterBy('entertainment')}>
          <Link to="/sections/entertainment" style={{ color: 'white', textDecoration: 'none' }} > Entertainment </Link>
        </Nav>
        <Nav className="mr-auto" onClick={() => props.filterBy('tech')}>
          <Link to="/sections/tech" style={{ color: 'white', textDecoration: 'none' }} > Tech </Link>
        </Nav>
      </Navbar>
    </>
  )
}

