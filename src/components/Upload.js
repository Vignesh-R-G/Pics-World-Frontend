import React from "react";
import '../bootstrap.min.css'
import '../css/upload.css'
import {useState} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from 'react-router-dom'


export const Upload=()=>{
    
    const navigate=useNavigate()
    const[title,setTitle]=useState("")
    const[description,setDescription]=useState("")
    const[category,setCategory]=useState("")
    const[imageurl,setImageurl]=useState("")

    const upload=(e)=>{
        const datas={
            title:title,
            description:description,
            category:category,
            imageurl:imageurl,
            postedby:localStorage.getItem("picsworld_username")
        }
        axios.post("http://localhost:5000/profile/upload",datas).then((res)=>{
            if(res.data.status){
                console.log(res.data)
                toast.success(res.data.msg)
            }
            else{
                toast.warning(res.data.msg)
            }
        })
        e.preventDefault()
    }

    return(
        <div className="background">
        <div className="container-fluid">
            <br></br>
            <br></br>
            <br></br>
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
                            <option>Cars</option>
                            <option>Bikes</option>
                            <option>Fitness</option>
                            <option>Walpaper</option>
                            <option>Food</option>
                            <option>Nature</option>
                            <option>Art</option>
                            <option>Travel</option>
                            <option>Quotes</option>
                            <option>Cats</option>
                            <option>Dogs</option>
                        </select>
                    </div>
                    <br></br>
                    <div className="form-group">
                        <label>Image:</label>
                        <input type="file" className="form-control" onChange={(e)=>{let file=e.target.files[0];setImageurl(URL.createObjectURL(file))}} required></input>
                    </div>
                    <br></br>
                    <div className="upload_button">
                        <button className="btn btn-outline-warning" type="submit">Upload Post</button>
                    </div>
                </form>
                </div>
            </div>
            <div className="col-md-4"></div>
            </div>
        </div>
        <ToastContainer/>
        </div>
    )
}