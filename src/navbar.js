import React from 'react';
import './navbar.css';
import { Navbar } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
//import 'fdlogo.jpeg' from '../images/fdlogo.jpeg'


function Navigation() {
    return(
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">
            <img
                alt=""
                src="https://ibb.co/tq1fvb3"
                width="30"
                height="30"
                className="d-inline-block align-top"
            />{' '}
                Ferrer Drywall
            </Navbar.Brand>
        </Container>
      </Navbar>
    )
}

export default Navigation;