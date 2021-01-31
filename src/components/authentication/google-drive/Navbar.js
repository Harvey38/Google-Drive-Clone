import React from 'react'
import {Navbar,Nav} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import './navbar.css';  
import Drive from '../../../assets/drive.png'
export default function NavbarComponent() {

    return (
<Navbar bg="light" expand="sm" className='navbar_styles'>
    <Navbar.Brand as={Link} to="/"><img className='imgst' src={Drive} alt="Logo"/>PEP Drive</Navbar.Brand> 
    <Nav>
        <Nav.Link as={Link} to="/user">
            Profile
        </Nav.Link>
    </Nav>
</Navbar>
    )
}
