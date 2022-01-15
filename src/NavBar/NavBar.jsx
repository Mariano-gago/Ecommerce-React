import React from 'react'
import  Container from 'react-bootstrap/Container'
import  Nav from 'react-bootstrap/Nav'
import Navbar  from 'react-bootstrap/Navbar'
import ImgCarrito  from './ImgCarrito.jsx'




const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Mariano Gago</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#features">Productos</Nav.Link>
                    <Nav.Link href="#pricing">Nosotros</Nav.Link>
                    <Nav.Link href="#pricing">Contacto</Nav.Link>
                </Nav>
                <Nav>
                <Nav.Link eventKey={2} href="#memes">
                    <ImgCarrito />
                </Nav.Link>
                </Nav>
            </Navbar.Collapse>
            </Container>
            </Navbar>
        </div>
    )
}

export default NavBar
