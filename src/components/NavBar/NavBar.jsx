import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { saveUser } from '../../redux/actions'
import { useDispatch } from 'react-redux';

const NavBar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleLogOut = ()=>{
        localStorage.clear()
        dispatch(saveUser())
        navigate('/')
    }

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/home">Home</Nav.Link>
          <Nav.Link href="#link">Visitas</Nav.Link>
          <Nav.Link href="#link">Perfil</Nav.Link>
          <button onClick={handleLogOut} >LogOut</button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;

