import React,{useContext, useEffect,useState} from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';

import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import '../bootstrap.min.css'
import {context} from './Context';
import '../css/navbar.css'
import {FiLogIn} from 'react-icons/fi'
import {BiUser} from 'react-icons/bi'
import {BiLogOut} from 'react-icons/bi'
import axios from "../axios/Axios";

export const NavigationBar=()=> {

  const navigate=useNavigate()
  const cont=useContext(context)
  
  useEffect(()=>{
    if(!cont.verifylogin){
      cont.setVerifyLogin(!cont.verifylogin)
      if(localStorage.getItem("picsworld_token")){
        const token_user=localStorage.getItem("picsworld_token")
        axios.get(`/user/verify/${token_user}`).then((res)=>{
          console.log(res.data)
          if(res.data.status){
            cont.setUserName(res.data.username)
            cont.setUserEmail(res.data.useremail)
            getprofile(res.data.useremail)
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
    const getprofile=(useremail)=>{
      axios.get(`/user/getprofile/${useremail}`).then((res)=>{
          if(res.data.status){
              cont.setProfileUrl(res.data.msg)
              console.log(res.data.msg)
          }
          else{
              cont.setProfileUrl("")
          }
      })
  }

   return (
    <div className="container-fluid navbar">
    <Navbar bg="light" expand="lg" fixed="top">
      <div className='container-fluid'>
      <LinkContainer to="/">
        <Navbar.Brand>Pics World</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto my-2 my-lg-0">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/profile">
            <Nav.Link>Profile</Nav.Link>
          </LinkContainer>
          <NavDropdown title="Category" id="basic-nav-dropdown">
            <LinkContainer to="/category/travel">
              <NavDropdown.Item>Travel</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/news">
              <NavDropdown.Item>News</NavDropdown.Item>
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
            <LinkContainer to="/category/sports">
              <NavDropdown.Item>Sports</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/technology">
              <NavDropdown.Item>Technology</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/quotes">
              <NavDropdown.Item>Quotes</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/pets">
              <NavDropdown.Item>Pets</NavDropdown.Item>
            </LinkContainer>
            <LinkContainer to="/category/blog">
              <NavDropdown.Item>Blog</NavDropdown.Item>
            </LinkContainer>
          </NavDropdown>
          </Nav>
          <div className="d-flex gap-3">
            {localStorage.getItem("picsworld_token")?<div>{cont.profileurl===""?"":<img style={{borderRadius:"50%"}} src={cont.profileurl} width="40" height="40"/>}
            <span id="username">Hello {cont.username}</span></div>:""}
            {localStorage.getItem("picsworld_token")?
            <LinkContainer to="/logout" id="logout">
                <Nav.Link><BiLogOut/>Logout</Nav.Link>
            </LinkContainer>:
            <LinkContainer to="/login">
                <Nav.Link><FiLogIn/>Login</Nav.Link>
            </LinkContainer>
            }
            {localStorage.getItem("picsworld_token")?"":
            <LinkContainer to="/register">
                <Nav.Link><BiUser/>SignUp</Nav.Link>
            </LinkContainer>
            }
            
            
            
          </div>
        
      </Navbar.Collapse>
      </div>
      <ToastContainer/>
    </Navbar>
    </div>
  );
}




