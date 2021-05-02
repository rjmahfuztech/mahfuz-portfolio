import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import myLogo from '../../images/Mahfuz.png';

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="md" bg="" variant="dark">
            <Navbar.Brand as={Link} to="/"><img style={{maxWidth: '70px'}} src={myLogo} className="" alt=""/></Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
                <Nav>
                    <Nav.Link className="nav-style" as={Link} to="/home">Home</Nav.Link>
                    <Nav.Link className="nav-style" as={Link} to="/blog">Blog</Nav.Link>
                    <Nav.Link className="nav-style" as={Link} to="/project">Projects</Nav.Link>
                    <Nav.Link className="nav-style" as={Link} to="/about">About Me</Nav.Link>
                    <Nav.Link className="nav-style" as={Link} to="/contact">Contact Us</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default NavigationBar;