import React from 'react'
import '../bootstrap.min.css'
import '../css/home.css'
import {useState,useEffect,useContext} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from 'react-router-dom'
import img1 from '../assets/img1.jfif'
import {View} from './View'
import { context } from './Context'

export const Home=()=>{
    const navigate=useNavigate()
    const [title,setTitle]=useState("")
    const[datas,setDatas]=useState([])
    const det=useContext(context)
    useEffect(()=>{
        window.scrollTo({top:0,behaviour:'Smooth'})
        axios.get("http://localhost:5000/profile/getAllPosts").then((res)=>{
            setDatas(res.data.msg)
        })
    },[])

    const search=()=>{
        axios.get(`http://localhost:5000/search/title/${title}`).then(async(res)=>{
            if(res.data.message){
                navigate('/filterpics')
            }
            else{
                await det.setSearchDetails(res.data.msg)
                navigate('/filterpics')
            }
            
        })
    }

    const view=(x)=>{
        det.setViewDetails(x)
        navigate("/view")
    }
    return(
        <div class="container-fluid">
            <br></br>
            <br></br>
            <br></br>
            <h1 id="home_title">Pics World</h1>
            <br></br>
            <div className='row'>
                <div className='col-md-4 mt-3'></div>
                <div className='col-md-4 mt-3'>
                    <input className="form-control" placeholder='Search Pics' type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                </div>
                <div className='col-md-4 mt-3'>
                    <button onClick={search} className='btn btn-success'>Search</button>
                </div>
            </div>
            <br></br>
            <br></br>
            {datas.map((x,index)=><div className="posts">
                    {index%2==0?<div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4 mt-3">
                            <img src={img1} width="450" height="300"/>
                        </div>
                        <div className='col-md-4 mt-3'>
                            <br></br>
                            <p><span>Title : </span>{x.Title}</p>
                            <p><span>Category : </span>{x.Category}</p>
                            <p><span>Posted By : </span>{x.PostedBy}</p>
                            <p><span>Posted Date : </span>{x.PostedDate.substring(0,10)}</p>
                            <button onClick={()=>{view(x)}} className="btn btn-outline-success">View Post</button>
                        </div>
                        <div className="col-md-2"></div>
                        
                    </div>
                    <br></br>
                    <div className="division">
                    </div>
                    <br></br>
                    </div>:<div>
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className='col-md-4 mt-3'>
                            <br></br>
                            <p><span>Title : </span>{x.Title}</p>
                            <p><span>Category : </span>{x.Category}</p>
                            <p><span>Posted By : </span>{x.PostedBy}</p>
                            <p><span>Posted Date : </span>{x.PostedDate.substring(0,10)}</p>
                            <button onClick={()=>{view(x)}} className="btn btn-outline-success">View Post</button>
                        </div>
                        <div className="col-md-4 mt-3">
                            <img src={img1} width="450" height="300"/>
                        </div>
                        <div className="col-md-2"></div>
                        
                    </div>
                    <br></br>
                    <div className="division">
                    </div>
                    <br></br>
                    </div>}
                    
            </div>)}
            <div className="footer_button">
                    <button className="btn btn-success" onClick={()=>window.scrollTo({top:0,behaviour:'Smooth'})}>Go Top</button>
            </div>
        </div>
    )
}