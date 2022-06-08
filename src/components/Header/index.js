import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom'
import { signout } from '../../action';


const Header = () => {

  const auth=useSelector(state=>state.auth)
  const dispatch =useDispatch();


  const logout=()=>{
    dispatch(signout())
  }

  const renderforNonLogedInUser = () => {
    
    return( <Nav>
      <li className="nav-item">
        <NavLink to="signin" className="nav-link">
          Signin
        </NavLink>
      </li>
      <li className="nav-item">
        <NavLink to="signup" className="nav-link">
          Signup
        </NavLink>
      </li>
    </Nav>
    )
  }



  const renderLogedinLinks = () => {
    return (
      <Nav>
      <li className="nav-item">
        <span className="nav-link" onClick={logout}>
          Signout
        </span>
      </li>
    </Nav>
    )
  }




  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ zIndex: 1 }}>
      <Container fluid>
        <Link to='/' className="navbar-brand">Admin DashBoard</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>

           {auth.authenticate ? renderLogedinLinks():renderforNonLogedInUser()}

        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header