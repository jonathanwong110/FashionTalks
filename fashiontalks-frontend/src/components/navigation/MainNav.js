import React, {Component} from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'

class MainNav extends Component {

  render() {
    
    return (
      <>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Link to="/" className="white-logo">FashionTalks</Link>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
            <Link to="/clothing" className="white-logo"> Clothing </Link>
            <Link to="/shoes" className="white-logo">Shoes</Link>
            <Link to="/entertainment" className="white-logo">Entertainment</Link>
            <Link to="/tech" className="white-logo">Tech</Link>
            </Nav>
            </Navbar.Collapse>
        </Navbar>
        <br></br>
        <br></br>
      </>
    )
  }
}

export default MainNav;