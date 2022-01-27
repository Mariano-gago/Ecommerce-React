import React from 'react'
import  Container from 'react-bootstrap/Container'
import  Nav from 'react-bootstrap/Nav'
import Navbar  from 'react-bootstrap/Navbar'
import { ImgCarrito } from './ImgCarrito'





const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                <Navbar.Brand href="#home">Mariano Gago</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <Nav.Link href="#Alfajores">Alfajores</Nav.Link>
                    <Nav.Link href="#Conitos">Conitos</Nav.Link>
                    <Nav.Link href="#Barras">Barras de Cereal</Nav.Link>
                    </Nav>
                    <Nav>
                    
                    <Nav.Link href="#cart">
                        <ImgCarrito/>
                    </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    )
}

export default NavBar
