import React,{useContext, useEffect} from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import '../bootstrap.min.css'
import {context} from './Context';
import '../css/navbar.css'
import axios from 'axios'

export const NavigationBar=()=> {

  const navigate=useNavigate()
  const cont=useContext(context)
  useEffect(()=>{
    if(!cont.verifylogin){
      cont.setVerifyLogin(!cont.verifylogin)
      if(localStorage.getItem("picsworld_token")){
        const token_user=localStorage.getItem("picsworld_token")
        const datas={
          token:token_user
        }
        axios.post("http://localhost:5000/user/verify",datas).then((res)=>{
          console.log(res.data)
          if(res.data.status){
            console.log(res.data.username)
            cont.setUserName(res.data.username)
            navigate("/")
          }
          else{ 
            toast.warning("Session Expired")
            localStorage.removeItem("picsworld_token")
            navigate("/login")
          }
        })
      }
    }
  },[])
  return (
    <div className="container-fluid navbar">
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
          <LinkContainer to="/profile">
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
            {localStorage.getItem("picsworld_token")?<div>
            <LinkContainer to="/logout">
                <Nav.Link>Logout</Nav.Link>
            </LinkContainer></div>:
            <LinkContainer to="/login">
                <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            }
            {localStorage.getItem("picsworld_token")?"":
            <LinkContainer to="/register">
                <Nav.Link>SignUp</Nav.Link>
            </LinkContainer>
            }
            {localStorage.getItem("picsworld_token")?<span id="username">Hello {cont.username}</span>:""}
        </Nav>
        
      </Navbar.Collapse>
      </div>
      <ToastContainer/>
    </Navbar>
    </div>
  );
}




