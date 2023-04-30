import React from 'react'
import '../bootstrap.min.css'
import '../css/home.css'
import {useState,useEffect,useContext} from 'react'
import axios from "../axios/Axios";
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from 'react-router-dom'
import {HashLoader,BarLoader} from 'react-spinners'
import { context } from './Context'
import { NavigationBar } from './Navbar'
import {MdAddAPhoto} from 'react-icons/md'

export const FilterPics=()=>{
    const navigate=useNavigate()
    const det=useContext(context)
    const details=det.searchdetails
    const [loading,setLoading]=useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])
    const view=(x)=>{
        det.setViewDetails(x)
        det.setSearchDetails([])
        navigate("/view")
    }

    return(
        <div className="container-fluid">
            {loading?
                <div className="loading">
                    <HashLoader
                    size={100}
                    color="green"
                    />
                </div>
            :
            <div>
            <NavigationBar/>
            <br></br>
            <br></br>
            <div className="title_background">
            <br></br>
            <h1 id="home_title"><MdAddAPhoto/> Pics World</h1>
            <br></br>
            </div>
            <br></br>
            {(details.length==0)?<div className="no_pics"><h3>No Posts Found</h3><br></br></div>:details.map((x,index)=><div className="posts_even">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4">
                            <img className="img-fluid" src={x.photo} width="450" height="300"/>
                        </div>
                        <div className='col-md-4'>
                            <br></br>
                            <p><span>Title : </span>{x.Title}</p>
                            <p><span>Category : </span>{x.Category}</p>
                            <p><span>Posted By : </span>{x.PostedBy}</p>
                            <p><span>Posted Date : </span>{x.PostedDate.substring(0,10)}</p>
                            <button onClick={()=>view(x)} className="btn btn-success">View Post</button>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <br></br>
            </div>)}
            <br></br>
            <div className='footer_button'>
                <button className="btn btn-primary" onClick={()=>{det.setSearchDetails([]);navigate("/")}}>Go Back</button>
            </div>
            <ToastContainer/>
            <br></br>
            </div>}
        </div>
    )
}