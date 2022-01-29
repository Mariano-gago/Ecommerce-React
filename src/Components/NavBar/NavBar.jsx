import React from 'react'
import  Container from 'react-bootstrap/Container'
import  Nav from 'react-bootstrap/Nav'
import Navbar  from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import { ImgCarrito } from './ImgCarrito'


const NavBar = () => {
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
                <Container>
                    <NavLink className='text-black' to=''>
                    Las Delicias de Maria Cecilia
                    </NavLink>
                
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                    <NavLink className='text-black m-3' to='/categoria/alfajores'>Alfajores</NavLink>
                    <NavLink className='text-black m-3' to='/categoria/conitos'>Conitos</NavLink>
                    <NavLink className='text-black m-3' to='/categoria/barras'>Barras de Cereal</NavLink>
                    </Nav>
                    <Nav>
                    
                    <NavLink className='text-black' to='/cart'>
                        <ImgCarrito/>
                    </NavLink>
                    </Nav>
                </Navbar.Collapse>
                </Container>
                </Navbar>
        </div>
    )
}

export default NavBar
