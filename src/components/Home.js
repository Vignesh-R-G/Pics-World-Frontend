import React from 'react'
import '../bootstrap.min.css'
import '../css/home.css'
import {BarLoader, HashLoader} from 'react-spinners'
import {useState,useEffect,useContext} from 'react'
import axios from "../axios/Axios";
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from 'react-router-dom'
import {View} from './View'
import { context } from './Context'
import picsworld_logo from '../assets/picsworld_logo.png'
import { NavigationBar } from './Navbar'
import {MdAddAPhoto} from 'react-icons/md'

export const Home=()=>{
    const navigate=useNavigate()
    const [loading,setLoading]=useState(true)
    const [title,setTitle]=useState("")
    const[datas,setDatas]=useState([])
    const [searchbutton,setSearchButton]=useState(false)
    const [slicedlst,setSlicedLst]=useState([])
    const [start,setStart]=useState(0)

    const det=useContext(context)
    useEffect(()=>{
        setTimeout(()=>{
            if(localStorage.getItem("picsworld_token")){
                axios.get("/profile/getAllPosts").then((res)=>{
                    setDatas(res.data.msg)
                    setLoading(false)
                    var st=0
                    var en=start+5
                    setSlicedLst(res.data.msg.slice(st,en))
                })
            }
            else{
                setLoading(false)
                setTimeout(()=>{
                    navigate("/login")
                },3000)
            }
        },1000)
        det.setSearchDetails([])
    },[])

    const searchpost=()=>{
        axios.get(`/search/title/${title}`).then(async(res)=>{
            if(res.data.message){
                navigate('/filterpics')
            }
            else{
                await det.setSearchDetails(res.data.msg)
                navigate('/filterpics')
            }
            setSearchButton(false)
        })
        
    }
    
    const searchuser=()=>{
        axios.get(`/search/filterbyuser/${title}`).then(async(res)=>{
            if(res.data.status){
                det.setSearchDetails(res.data.msg)
                navigate('/userfilter')
            }
            else{
                navigate('/userfilter')
            }
            setSearchButton(false)
            
        })
    }

    const view=(x)=>{
        det.setViewDetails(x)
        navigate("/view")
    }


    const nextpage=()=>{
        if(start+5<datas.length){
            var st=start+5
            var en=start+10
            setSlicedLst(datas.slice(st,en))
            setStart(start+5)
            window.scrollTo({top:0,behaviour:'Smooth'})
        }
    }
    const prevpage=()=>{
        if(start-5>=0){
            var st=start-5
            var en=start
            setSlicedLst(datas.slice(st,en))
            setStart(start-5)
            window.scrollTo({top:0,behaviour:'Smooth'})
        }
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
            {localStorage.getItem("picsworld_token")?<div>
            <div className='row'>
                <div className='col-md-4 mt-3'></div>
                <div className='col-md-4 mt-3'>
                    <input className="form-control" placeholder='Search Post(Title) / User(Email)' type="text" value={title} onChange={(e)=>setTitle(e.target.value)}></input>
                </div>
                <div className='col-md-4 mt-3'>
                    {searchbutton?<div>
                    <button onClick={searchpost} className='btn btn-success'>Search Post</button>
                    <button onClick={searchuser} style={{position:"relative",left:"3px"}}className='btn btn-success'>Search User</button>
                    </div>:
                    <button onClick={()=>setSearchButton(true)} className='btn btn-success'>Search</button>}
                </div>
            </div>
            <br></br>
            <br></br>
            {slicedlst.map((x,index)=><div className="posts">
                    {index%2==0?<div className="posts_even">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4 mt-4 image">
                            <img className="img-fluid image1" src={x.photo} width="450" height="300"/>
                        </div>
                        <div className='col-md-4 mt-4 details'>
                            <br></br>
                            <p><span>Title : </span>{x.Title}</p>
                            <p><span>Category : </span>{x.Category}</p>
                            <p><span>Posted By : </span>{x.PostedBy}</p>
                            <p><span>Posted Date : </span>{x.PostedDate.substring(0,10)}</p>
                            <button onClick={()=>{view(x)}} className="btn btn-success">View Post</button>
                        </div>
                        <div className="col-md-2"></div>
                        
                    </div>
                    <br></br>
                    </div>:<div className="posts_odd">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className='col-md-4 mt-4'>
                            
                            <br></br>
                            <p><span>Title : </span>{x.Title}</p>
                            <p><span>Category : </span>{x.Category}</p>
                            <p><span>Posted By : </span>{x.PostedBy}</p>
                            <p><span>Posted Date : </span>{x.PostedDate.substring(0,10)}</p>
                            <button onClick={()=>{view(x)}} className="btn btn-success">View Post</button>
                            
                        </div>
                        <div className="col-md-4 mt-4 image">
                            <img className="img-fluid image2" src={x.photo} width="450" height="300"/>
                        </div>
                        <div className="col-md-2"></div>
                        
                    </div>
                    <br></br>
                    
                    </div>}
                    
            </div>)}
            <br></br>
            <div className="footer_button">
                    {start-5<0?"":
                    <button className="btn btn-primary" onClick={prevpage}>Previous Page</button>}
                    {start+5<datas.length?
                    <button className="btn btn-primary" onClick={nextpage} style={{position:"relative",left:"5px"}}>Next Page</button>:""}
            </div>
            <br></br>
            <div className="footer">
                <div className='container-fluid'>
                <br></br>
                <div className="about_pics">
                <h1>About Pics World</h1>
                </div>
                <br></br>
                <div className="line"></div>
                <br></br>
                <div className="row">
                <div className="about_pics_desc col-md-6">
                    <p>PicsWorld - A social media web appication which allows the users to upload their posts,comment the posts of others
                        and like the posts of others.It also allows the user to set their profile and add their bio in the profile page.
                    </p>
                    <br></br>
                </div>
                <div className='about_pics_desc col-md-6'>
                    <p>Please contact us if you have any questions or concerns about the content on PicsWorld <a href="mailto:picsworld@gmail.com">picsworld@gmail.com</a></p>
                </div>
                <br></br>
                </div>
                <div className="line"></div>
                <br></br>
                <p style={{textAlign:"center",color:"greenyellow"}}>CopyRight © 2023 PicsWorld.All Rights Reserved</p>
                </div>
                
            </div>
            <br></br>
            </div>:<div><h2 className='no_pics'>Please Login to Proceed !</h2>
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
    )
}