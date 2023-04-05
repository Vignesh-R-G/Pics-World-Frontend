import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../bootstrap.min.css'

export const NavigationBar=()=> {
  return (
    <Navbar bg="light" expand="lg" fixed="top">
      <div className='container-fluid'>
      <LinkContainer to="/">
        <Navbar.Brand>Pics World</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/upload">
            <Nav.Link>Profile</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Pics" id="basic-nav-dropdown">
            <LinkContainer to="/category/cars">
              <NavDropdown.Item>Cars</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/bikes">
              <NavDropdown.Item>Bikes</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/fitness">
              <NavDropdown.Item>Fitness</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/walpaper">
              <NavDropdown.Item>Walpaper</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/food">
              <NavDropdown.Item>Food</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/nature">
              <NavDropdown.Item>Nature</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/art">
              <NavDropdown.Item>Art</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/travel">
              <NavDropdown.Item>Travel</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/quotes">
              <NavDropdown.Item>Quotes</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/cats">
              <NavDropdown.Item>Cats</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/dogs">
              <NavDropdown.Item>Dogs</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
            {localStorage.getItem("picsworld_username")?<div>
            <LinkContainer to="/logout">
                <Nav.Link>Logout</Nav.Link>
            </LinkContainer></div>:
            <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            }
            {localStorage.getItem("picsworld_username")?"":
            <LinkContainer to="/register">
                <Nav.Link>SignUp</Nav.Link>
            </LinkContainer>
            }
            {localStorage.getItem("picsworld_username")?<span id="username">Hello {localStorage.getItem("picsworld_username")}</span>:""}
        </Nav>
        
      </Navbar.Collapse>
      </div>
    </Navbar>
  );
}




