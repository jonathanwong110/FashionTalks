import React, {Component} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'
// import Sections from '../sections/Sections'

class MainNav extends Component {

  render() {
    
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Nav className="mr-auto">
              <Link to="/" className="white-logo">FashionTalks</Link>
            </Nav>
            <Nav className="mr-auto">
              <Link to="/clothing" className="white-logo"> Clothing </Link>
            </Nav>
            <Nav className="mr-auto">
              <Link to="/shoes" className="white-logo">Shoes</Link>
            </Nav>
            <Nav className="mr-auto">
            <Link to="/entertainment" className="white-logo">Entertainment</Link>
            </Nav>
            <Nav className="mr-auto">
            <Link to="/tech" className="white-logo">Tech</Link>
            </Nav>
        </Navbar>
        <br></br>
        <br></br>
      </>
    )
  }
}

export default MainNav;