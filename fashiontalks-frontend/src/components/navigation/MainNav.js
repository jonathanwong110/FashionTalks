import React, {Component} from 'react';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class MainNav extends Component {

  render() {
    
    return (
      <>
        <Navbar collapseOnSelect bg="dark" variant="dark" sticky="top" >
            <Nav className="mr-auto">
              <Link to="/" style={{ color: 'white', textDecoration: 'none' }} > FashionTalks </Link>
            </Nav>
            <Nav className="mr-auto">
              <Link to="/clothing" style={{ color: 'white', textDecoration: 'none' }} > Clothing </Link>
            </Nav>
            <Nav className="mr-auto">
              <Link to="/shoes" style={{ color: 'white', textDecoration: 'none' }} > Shoes </Link>
            </Nav>
            <Nav className="mr-auto">
              <Link to="/entertainment" style={{ color: 'white', textDecoration: 'none' }} > Entertainment </Link>
            </Nav>
            <Nav className="mr-auto">
              <Link to="/tech" style={{ color: 'white', textDecoration: 'none' }} > Tech </Link>
            </Nav>
            <Form inline className="mr-auto">
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            </Form>
            <Nav id="login">
              <Link to="signup" style={{ color: 'white', textDecoration: 'none' }} > Sign In </Link>
            </Nav>
        </Navbar>
        <br></br>
        <br></br>
      </>
    )
  }
}

export default MainNav;