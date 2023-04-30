import React, { useContext } from 'react'
import '../bootstrap.min.css'
import '../css/login.css'
import {useState,useEffect} from 'react'
import axios from "../axios/Axios";
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from 'react-router-dom'
import {context} from './Context'
import {BarLoader, HashLoader} from 'react-spinners'
import { NavigationBar } from './Navbar'

export const Following=()=>{

    const navigate=useNavigate()
    const[loading,setLoading]=useState(true)
    const cont=useContext(context)


    return(
        
        <div className='container-fluid'>
            
            <div>
            <NavigationBar/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 followers_total"> 
                    <div>
                    <span className='followers_length'>{cont.followinginfo.length} Following</span>
                    <button className='btn btn-primary followbut' onClick={()=>navigate(-1)}>X</button>
                    </div>
                    <br></br>
                    <div className='division'></div>
                    <br></br>
                    <br></br>
                    <div className="followers">
                                {cont.followinginfo.length===0?<h1>No Following Found !</h1>:
                                <div>
                                {cont.followinginfo.map((x)=><div>
                                <h4 className="followers">{x.ToName}</h4>
                                <div className='divi'></div>
                                </div>
                                )}
                                </div>}
                                
                    </div>
                </div>
                <div className="col-md-4"> </div>
            </div>
            <ToastContainer/>
            </div>
            </div>
    )
}