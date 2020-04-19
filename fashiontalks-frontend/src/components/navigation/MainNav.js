import React from 'react';
import { Nav, Navbar, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom'

export default function MainNav(props) {

  return (
    <>
    {console.log('props', props)}
      <Navbar collapseOnSelect bg="dark" variant="dark" sticky="top" >
        <Nav className="mr-auto" onClick={() => props.filterBy('')}>
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }} > FashionTalks </Link>
        </Nav>
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
        <Form inline className="mr-auto">
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        </Form>
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