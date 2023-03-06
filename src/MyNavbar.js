import React from 'react';
import { LinkContainer } from 'react-router-bootstrap'
//bootstrap
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';

const MyNavbar = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark" className='fixed-top'>
                <Container>
                    <Navbar.Brand href="/">Charles Cantin</Navbar.Brand>
                    <Nav className="me-auto">
                        <LinkContainer to='/'>
                            <Nav.Link>Home</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/gallery'>
                            <Nav.Link>Gallery</Nav.Link>
                        </LinkContainer>

                        <LinkContainer to='/rates'>
                            <Nav.Link>Rates</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='/contact'>
                            <Nav.Link>Contact</Nav.Link>
                        </LinkContainer>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
}

export default MyNavbar;