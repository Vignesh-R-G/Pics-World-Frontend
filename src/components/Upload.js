import React from "react";
import '../bootstrap.min.css'
import '../css/upload.css'
import {useState,useEffect,useContext} from 'react'
import axios from "../axios/Axios";
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from 'react-router-dom'
import {BarLoader, HashLoader} from 'react-spinners'
import {context} from './Context'
import { NavigationBar } from "./Navbar";

export const Upload=()=>{
    
    const navigate=useNavigate()
    const[title,setTitle]=useState("")
    const[description,setDescription]=useState("")
    const[category,setCategory]=useState("")
    const cont=useContext(context)
    const [loading,setLoading]=useState(false)
    const[file,setFile]=useState("")
    
    useEffect(()=>{
        if(!localStorage.getItem("picsworld_token")){
            setTimeout(()=>{
                navigate("/login")
            },3000)
        }
    },[])

    const handleChange=((e)=>{
        e.preventDefault()
        setFile(e.target.value)
        
    })

    const upload=(e)=>{
        setLoading(true)
        const datas={
            image:file,
            description:description,
            category:category,
            postedby:cont.username,
            postedemail:cont.useremail,
            title:title
        }

        axios.post("/profile/upload",datas).then((res)=>{
            if(res.data.status){
                console.log(res.data)
                toast.success(res.data.msg)
            }
            else{
                toast.warning(res.data.msg)
            }
            setLoading(false)
        })
        e.preventDefault()
    }

    return(
        <div className="background">
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
            <br></br>
            {localStorage.getItem("picsworld_token")?<div>
            <div className="row">
            <div className="col-md-4"></div>
            <div className="col-md-4">
                <h1 id="upload_photos">Upload Post</h1>
                <div className="upload-class">
                <form onSubmit={upload}>
                    <div className="form-group">
                        <label >Title :</label>
                        <input type="text" value={title} onChange={(e)=>setTitle(e.target.value)} className="form-control" required></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Description :</label>
                        <input type="text" value={description} className="form-control" onChange={(e)=>setDescription(e.target.value)}  required></input>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Select Category :</label>
                        <select value={category} className="form-control" onChange={(e)=>setCategory(e.target.value)} required>
                            <option>Choose Category</option>
                            <option>Travel</option>
                            <option>News</option>
                            <option>Walpaper</option>
                            <option>Food</option>
                            <option>Nature</option>
                            <option>Sports</option>
                            <option>Technology</option>
                            <option>Quotes</option>
                            <option>Pets</option>
                            <option>Blog</option>
                        </select>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Image:</label>
                        <input type="url" placeholder="Enter the URL" className="form-control" onChange={handleChange} required></input>
                    </div>
                    <br></br>
                    <div className="upload_button">
                        <button className="btn btn-outline-warning" type="submit">Upload Post</button>
                    </div>
                    <br></br>
                    <div className="upload_button">
                        <button className="btn btn-outline-warning" onClick={()=>navigate("/")}>Go back</button>
                    </div>
                </form>
                </div>
            </div>
            <div className="col-md-4"></div>
            </div>
            </div>
            :<div><h2 className='no_pics'>Please Login to Proceed !</h2>
            <br></br>
            <h2 className='no_pics'>Redirecting to Login Page</h2>
            <br></br>
            <br></br>
            <div className="bar_loading">
                    <BarLoader
                    size={100}
                    color="green"
                    />
            </div></div>}
            </div>}
        </div>
        <ToastContainer/>
        </div>
    )
}