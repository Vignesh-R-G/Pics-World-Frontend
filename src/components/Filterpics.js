import React from 'react'
import '../bootstrap.min.css'
import '../css/home.css'
import {useState,useEffect,useContext} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from 'react-router-dom'
import { context } from './Context'

export const FilterPics=()=>{
    const navigate=useNavigate()
    const det=useContext(context)
    const details=det.searchdetails


    const view=(x)=>{
        det.setViewDetails(x)
        det.setSearchDetails([])
        navigate("/view")
    }

    return(
        <div className="container-fluid">
            <br></br>
            <br></br>
            <br></br>
            <h1 id="home_title">Pics World</h1>
            <br></br>
            <br></br>
            {(details.length==0)?<div className="no_pics"><h3>No Pics Found</h3><br></br></div>:details.map((x,index)=><div className="posts">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4">
                            <img src={`http://localhost:5000/Uploads/${x.photo}`} width="450" height="300"/>
                        </div>
                        <div className='col-md-4'>
                            <br></br>
                            <p><span>Title : </span>{x.Title}</p>
                            <p><span>Category : </span>{x.Category}</p>
                            <p><span>Posted By : </span>{x.PostedBy}</p>
                            <p><span>Posted Date : </span>{x.PostedDate.substring(0,10)}</p>
                            <button onClick={()=>view(x)} className="btn btn-outline-success">View Post</button>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <br></br>
            </div>)}
            <div className='footer_button'>
                <button className="btn btn-success" onClick={()=>{det.setSearchDetails([]);navigate("/")}}>Go Back</button>
            </div>
            <ToastContainer/>
        </div>
    )
}