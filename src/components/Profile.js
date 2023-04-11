import React from 'react'
import '../bootstrap.min.css'
import '../css/profile.css'
import {useState,useEffect,useContext} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from 'react-router-dom'
import user_image from '../assets/user_image.png'
import { context } from './Context'

export const Profile=()=>{
    const navigate=useNavigate()
    const [datas,setDatas]=useState([])
    const det=useContext(context)
    const [post,setPost]=useState(false)
    const [file, setFile] = useState(null);

    useEffect(()=>{
        getposts()
    },[])

    const view=(x)=>{
        det.setViewDetails(x)
        navigate("/view")
    }
    const getposts=()=>{
        axios.get(`http://localhost:5000/user/posts/${det.username}`).then((res)=>{
            if(res.data.status){
                setDatas(res.data.msg)
                setPost(true)
            }
            else{
                setPost(false)
            }
        })
    }
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
                    <img src={user_image} className="user_photo" width="200px" height="250px"></img>
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-5 about_user'>
                    <h1>About</h1>
                    <div className="line"></div>
                </div>
            </div>
            <br></br>
            <div className="newpost_button">
                <button className="btn btn-primary" onClick={()=>navigate('/upload')}>New Post</button>
            </div>
            <br></br>
            <br></br>
            <h2 id="posts_title">All Posts</h2>
            <br></br>
            {post?
            <div className="row">
                {datas.map((x,index)=>
                <div className="col-md-4 mt-3 posts">
                    <img src={`http://localhost:5000/Uploads/${x.photo}`} width="450" height="300"/>
                    <p><span>Title : </span>{x.Title}</p>
                    <p><span>Category : </span>{x.Category}</p>
                    <p><span>Posted By : </span>{x.PostedBy}</p>
                    <p><span>Posted Date : </span>{x.PostedDate.substring(0,10)}</p>
                    <button onClick={()=>{view(x)}} className="btn btn-outline-success">View Post</button>
                </div>
                
                )}
            </div>
            :<h2 id="nopics">No Posts have been uploaded !</h2>}
            <br></br>
        </div>
    )
}