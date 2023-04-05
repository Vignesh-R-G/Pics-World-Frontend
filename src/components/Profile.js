import React from 'react'
import '../bootstrap.min.css'
import '../css/profile.css'
import {useState,useEffect} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from 'react-router-dom'
import img1 from '../assets/img1.jfif'

export const Profile=()=>{
    const navigate=useNavigate()
    return(
        <div className="container-fluid">
            <br/>
            <br/>
            <br/>
            <div className="profile_header">
                 <h1>Profile</h1>
            </div>
            <br></br>
            <div className="row">
                <div className='col-md-1'></div>
                <div className='col-md-4'>
                    <img src={img1} className="user_photo" width="300px" height="300px"></img>
                    <br></br>
                    <button id="follow_button" className="btn btn-primary">Follow</button>
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-5 about_user'>
                    <h1>About</h1>
                    <div className="line"></div>
                </div>
            </div>
            
        </div>
    )
}