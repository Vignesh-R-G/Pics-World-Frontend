import React from "react";
import '../bootstrap.min.css'
import '../css/home.css'
import {useState,useContext,useEffect} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import img1 from '../assets/img1.jfif'
import { useNavigate } from 'react-router-dom'
import { context } from "./Context";

export const View=()=>{
    const det=useContext(context)
    const post=det.viewdetails
    const [comments,setComments]=useState([])
    const [postcomment,setPostComment]=useState("")
    const [nocomments,setNoComments]=useState(false)
    const navigate=useNavigate()

    useEffect(()=>{
        getcomments()
    },[])

    const getcomments=()=>{
        axios.get(`http://localhost:5000/comments/getcomments/${post._id}`).then((res)=>{
            if(res.data.status){
                setComments(res.data.msg)
                setNoComments(false)
            }
            else {
                setNoComments(true)
            }
        })
    }

    const addcomment=(e)=>{
        const datas={
            postid:post._id,
            username:localStorage.getItem("picsworld_username"),
            comment:postcomment
        }
        axios.post("http://localhost:5000/comments/postcomments",datas).then((res)=>{
            if(res.data.status){
                getcomments()
                toast.success("Comment Added Successfully !")
            }
        })
        setPostComment("")
    }

    const deletecomment=(id)=>{
        axios.delete(`http://localhost:5000/comments/deletecomment/${id}`).then((res)=>{
                getcomments()
                toast.success("Comment Deleted successfully !")
        })
    }

    return(
        <div className="container-fluid" id="top">
            <br></br>
            <br></br>
            <br></br>
            <h1 id="home_title">Pics World</h1>
            <br></br>
            <br></br>
            {(post.length==0)?<div><h3 className="no_pics">No Post Found</h3><br></br><div className="footer_button">
            <button className="btn btn-success" onClick={()=>navigate("/")}>Go Back</button></div></div>:<div>
            <div className="posts">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4">
                            <img src={img1} width="350" height="300"/>
                        </div>
                        <div className='col-md-4'>
                            <br></br>
                            <p><span>Title : </span>{post.Title}</p>
                            <p><span>Category : </span>{post.Category}</p>
                            <p><span>Posted By : </span>{post.PostedBy}</p>
                            <p><span>Posted Date : </span>{post.PostedDate.substring(0,10)}</p>
                        </div>
                        <div className="col-md-2"></div>
                    </div>
                    <br></br>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 desc_heading">
                    <h3>Description :</h3>
                    <hr></hr>
                </div>
            </div>
            <div className="row">
                <div className="col-md-2"></div>
                <div className="col-md-8 description">
                    <p> {post.Description}</p>
                    <hr></hr>
                </div>
            </div>
            <div className="comment_section">
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-4">
                        <h3 id="comment_heading">Comments :</h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-5">
                        <form>
                            <div className="form-group">
                                <input type="text" placeholder="Add your comments here" className="form-control" value={postcomment} onChange={(e)=>setPostComment(e.target.value)} required></input>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-3">
                        <button className="btn btn-success" onClick={addcomment}>Post Comment</button>
                    </div>
                </div>
                <br></br>
                <div className="row">
                    <div className="col-md-2"></div>
                    <div className="col-md-8">
                        <hr></hr>
                        {nocomments?<div><h3>No comments Found</h3></div>:
                        (comments.map((x)=><div>
                            <h4 id="comment_username">Name : {x.UserName}</h4>
                            <p id="comment_comments">Comment : {x.Comment}</p>
                            {(localStorage.getItem("picsworld_username")===x.UserName)?
                            <button onClick={()=>deletecomment(x._id)} className="btn btn-outline-success">Delete</button>
                            :""}   
                            <hr></hr>
                        </div>))}
                    </div>
                </div>
            </div>
            <br></br>
            <div className="row">
                <div className="col-md-5"></div>
                <div className="col-md-1">
                    <button className="btn btn-success" onClick={()=>{det.setViewDetails([]);navigate("/")}}>Go Back</button>
                </div>
                <div className="col-md-1">
                    <button className="btn btn-success" onClick={()=>window.scrollTo({top:0,behaviour:'Smooth'})}>Go Top</button>
                </div>
            </div>
            <ToastContainer/>
            </div>}
        </div>
    )
}