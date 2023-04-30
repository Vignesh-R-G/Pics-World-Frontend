import React from 'react'
import '../bootstrap.min.css'
import '../css/profile.css'
import {useState,useEffect,useContext} from 'react'
import axios from "../axios/Axios";
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from 'react-router-dom'
import user_image from '../assets/user_image.png'
import {HashLoader,BarLoader} from 'react-spinners'
import { context } from './Context'
import { NavigationBar } from './Navbar'
import {FaUserFriends} from 'react-icons/fa'
import {TbFriendsOff} from 'react-icons/tb'

export const User=()=>{
    const navigate=useNavigate()
    const [datas,setDatas]=useState([])
    const det=useContext(context)
    const [post,setPost]=useState(false)
    const [followerloading,setFollowerLoading]=useState(true)
    const [followingloading,setFollowingLoading]=useState(true)
    const [aboutuser,setAboutUser]=useState("")
    const [inputflag,setInputFlag]=useState(false)
    const [newbio,setNewBio]=useState(true)
    const [imageflag,setImageFlag]=useState(false)
    const [profileurl,setProfileUrl]=useState("")
    const [follow,setFollow]=useState(false)
    const [bioid,setBioId]=useState("")
    const [followers,setFollowers]=useState([])
    const [following,setFollowing]=useState([])
    const [viewfollowers,setViewFollowers]=useState(false)
    const [viewfollowing,setViewFollowing]=useState(false)

    const details=det.searchdetails
    useEffect(()=>{
        setTimeout(async()=>{
            if(localStorage.getItem("picsworld_token") && details.length===0){
                console.log('No User Found')
                setFollowerLoading(false)
                setFollowingLoading(false)
            }
            else if(localStorage.getItem("picsworld_token")){
                console.log("Executing")
                getbio()
                getprofile()
                getposts()
                isfollow()
                getfollowers()
                getfollowing()
            }
            else{
                setFollowerLoading(false)
                setFollowingLoading(false)
                setTimeout(()=>{
                    navigate("/login")
                },3000)
            }
        },1000)
    },[])
 

    const view=(x)=>{
        det.setViewDetails(x)
        navigate("/view")
    }

    const getprofile=()=>{
        axios.get(`/user/getprofile/${details[0].Email}`).then((res)=>{
            if(res.data.status){
                setProfileUrl(res.data.msg)
            }
            else{
                setProfileUrl("")
            }
        })
    }

    const getposts=()=>{
        axios.get(`/user/posts/${details[0].Email}`).then((res)=>{
            if(res.data.status){
                setDatas(res.data.msg)
                setPost(true)
            }
            else{
                setPost(false)
            }
        })
    }

    
    
    const getbio=()=>{
        axios.get(`/user/getbio/${details[0].Email}`).then((res)=>{
            if(res.data.status){
                setAboutUser(res.data.msg.Bio)
                setBioId(res.data.msg._id)
                setNewBio(false)
            }
        })
        
    }

    const addfollow=()=>{
        const datas={
            from:det.useremail,
            to:details[0].Email,
            fromname:det.username,
            toname:details[0].Name
        }
        axios.post('/follow/addfollow',datas).then((res)=>{
            if(res.data.status){
                toast.success('Followed successfully !')
                setFollow(true)
                getfollowers()
                getfollowing()
            }
        })
    }

    const isfollow=()=>{
        const datas={
            useremail:det.useremail,
            searchuseremail:details[0].Email
        }
        axios.post("/follow/isfollowing",datas).then((res)=>{
            if(res.data.status){
                setFollow(true)
            }
            else{
                setFollow(false)
            }
        })
        
    }

    const getfollowers=()=>{
        axios.get(`/follow/getfollowers/${details[0].Email}`).then((res)=>{
            console.log(res.data.status)
            if(res.data.status){
                setFollowers(res.data.msg)
                det.setFollowersInfo(res.data.msg)
                setFollowerLoading(true)
            }
            else if(res.data.msg==="No followers found"){
                setFollowers([])
                det.setFollowersInfo([])
                setFollowerLoading(false)
            }
        })
    }

    const getfollowing=()=>{
        axios.get(`/follow/getfollowing/${details[0].Email}`).then((res)=>{
            if(res.data.status){
                setFollowing(res.data.msg)
                det.setFollowingInfo(res.data.msg)
                setFollowingLoading(false)
            }
            else if(res.data.msg==="No following found"){
                setFollowing([])
                det.setFollowingInfo([])
                setFollowingLoading(false)
            }
            
        })
        
    }

    const unfollow=()=>{
        axios.delete(`/follow/unfollow/${det.useremail}/${details[0].Email}`).then((res)=>{
            if(res.data.status){
                toast.success('Unfollowed successfully !')
                isfollow()
                getfollowers()
                getfollowing()
            }
        })
    }

    return(
        <div className="container-fluid">
            {(followerloading && followingloading)?
                <div className="loading">
                    <HashLoader
                    size={100}
                    color="green"
                    />
                </div>
            :
            <div>
            <NavigationBar/>
            <br/>
            <br/>
            <div className="profile_header">
                 <h1>User Details</h1>
            </div>
            <br></br>
            {details.length===0?<h2 className="no_pics">No User Found</h2>:<div>
            {localStorage.getItem("picsworld_token")?<div>
            <div className="row">
                <div className='col-md-1'></div>
                <div className='col-md-4 user_image'>
                    <br></br>
                    <img src={profileurl} className="user_photo" width="200px" height="200px"></img>
                    <br></br>
                    <br></br>
                    <div className='button_image'>
                        {follow?<button className='btn btn-primary' onClick={unfollow}><TbFriendsOff/> Unfollow User</button>:
                        <button className='btn btn-success' onClick={addfollow}><FaUserFriends/> Follow User</button>
                     }
                    </div>
                    <br></br>
                    <div>
                        <button className="btn btn-secondary" onClick={()=>navigate("/followers")}><FaUserFriends/> {followers.length} Followers</button>
                        <button className="btn btn-secondary" onClick={()=>navigate("/following")} style={{position:"relative",left:"5px"}}><FaUserFriends/> {following.length} Following</button>
                    </div>
                    
                    <br></br>
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-5 about_user'>
                    <h1>About</h1>
                    <div className="line"></div>
                    <br></br>
                    <div>
                    <h4 id="profile_username">{details[0].Name}</h4>
                    <br></br>
                    <h3 id="about_description">{aboutuser}</h3>
                    <br></br>
                    </div>
                </div>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className='bg-success'>
            <br></br>
            <h2 id="posts_title">Posts By {details[0].Name}</h2>
            <br></br>
            </div>
            <br></br>
            {post?
            <div className="row">
                {datas.map((x,index)=>
                <div className="col-md-4 mt-3 posts">
                    <img className="img-fluid" src={x.photo} width="450" height="300"/>
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
                <br></br><h2 className='no_pics'>Redirecting to Login Page !</h2>
                    <br></br>
                    <br></br>
                    <div className="bar_loading">
                    <BarLoader
                    size={100}
                    color="green"
                    />
                </div></div>}
        </div>}
        </div>}
        </div>
    )
}