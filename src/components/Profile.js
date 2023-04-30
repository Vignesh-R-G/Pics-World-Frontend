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

export const Profile=()=>{
    const navigate=useNavigate()
    const [datas,setDatas]=useState([])
    const det=useContext(context)
    const [post,setPost]=useState(false)
    const [loading,setLoading]=useState(true)
    const [aboutuser,setAboutUser]=useState("")
    const [inputflag,setInputFlag]=useState(false)
    const [newbio,setNewBio]=useState(true)
    const [imageflag,setImageFlag]=useState(false)
    const [profileurl,setProfileUrl]=useState("")
    const [bioid,setBioId]=useState("")
    const [file, setFile] = useState("")
    const [followers,setFollowers]=useState([])
    const [following,setFollowing]=useState([])
    const [viewfollowers,setViewFollowers]=useState(false)
    const [viewfollowing,setViewFollowing]=useState(false)
    const [followerloading,setFollowerLoading]=useState(true)
    const [followingloading,setFollowingLoading]=useState(true)

    useEffect(()=>{
        setTimeout(async()=>{
            if(localStorage.getItem("picsworld_token")){
                console.log(det.username)
                getbio()
                getprofile()
                getposts()
                getfollowers()
                getfollowing()
            }
            else{
                setLoading(false)
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
        axios.get(`/user/getprofile/${det.useremail}`).then((res)=>{
            if(res.data.status){
                setProfileUrl(res.data.msg)
                console.log(res.data.msg)
            }
            else{
                setProfileUrl("")
            }
            setFollowingLoading(false)
            setFollowerLoading(false)
        })
    }

    const getposts=()=>{
        axios.get(`/user/posts/${det.useremail}`).then((res)=>{
            if(res.data.status){
                setDatas(res.data.msg)
                setPost(true)
            }
            else{
                setPost(false)
            }
            setLoading(false)
        })
    }

    const addbio=()=>{
        const datas={
            name:det.username,
            email:det.useremail,
            bio:aboutuser
        }
        axios.post("/user/addbio",datas).then((res)=>{
            if(res.data.status){
                setInputFlag(false)
                getbio()
                toast.success('Bio Saved successfully !')
            }
        })
    }

    const editbio=()=>{
        const datas={
            id:bioid,
            bio:aboutuser
        }
        axios.put("/user/editbio",datas).then((res)=>{
            if(res.data.status){
                setInputFlag(false)
                getbio()
                toast.success('Bio Saved successfully !')
            }
        })
    }

    const getbio=()=>{
        axios.get(`/user/getbio/${det.useremail}`).then((res)=>{
            if(res.data.status){
                setAboutUser(res.data.msg.Bio)
                setBioId(res.data.msg._id)
                setNewBio(false)
            }
        })
        
    }

    const deletepost=(x)=>{
        axios.delete(`/profile/deletepost/${x._id}`).then((res)=>{
            if(res.data.status){
                toast.success('Post Deleted Successfully !')
                getposts()
            }
            else{
                toast.warning('Error occured in deleting the post!')
            }
        })
    }

    const handleChange=((e)=>{
        setFile(e.target.value)
        e.preventDefault()
    })

    const addimage=(e)=>{
        setFollowingLoading(true)
        setFollowerLoading(true)
        const datas={
            name:det.username,
            email:det.useremail,
            image:file
        }

        axios.post("/user/uploadprofile",datas).then((res)=>{
            if(res.data.status){
                console.log(res.data)
                getprofile()
                toast.success("Profile Picture Uploaded SuccessFully!")
            }
            else{
                toast.warning(res.data.msg)
            }
        })
        setImageFlag(false)
        e.preventDefault()
    }

    const editimage=(e)=>{
        setFollowingLoading(true)
        setFollowerLoading(true)
        const datas={
            image:file,
            email:det.useremail
        }
        
        axios.put("/user/uploadprofile",datas).then((res)=>{
            if(res.data.status){
                console.log(res.data)
                getprofile()
                toast.success("Profile Picture Updated SuccessFully!")
            }
            else{
                toast.warning(res.data.msg)
            }
        })
        setImageFlag(false)
        e.preventDefault()
    }


    const getfollowers=()=>{
        axios.get(`/follow/getfollowers/${det.useremail}`).then((res)=>{
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
        axios.get(`/follow/getfollowing/${det.useremail}`).then((res)=>{
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
                 <h1>Profile</h1>
            </div>
            <br></br>
            {localStorage.getItem("picsworld_token")?<div>
            <div className="row">
                <div className='col-md-1'></div>
                <div className='col-md-4 user_image'>
                    <br></br>
                    <img src={profileurl} className="user_photo" width="200px" height="200px"></img>
                    <br></br>
                    <br></br>
                    {imageflag?<div>
                        <form>
                        <div className="form-group">
                        <label style={{color:"white"}}>Image:</label>
                        <input type="url" className="form-control" placeholder='Enter the URL' onChange={handleChange} required></input>
                        </div>
                        <br></br>
                        {profileurl===""?
                        <button type="submit" onClick={addimage} className='btn btn-success'>Set Profile</button>:
                        <button type="submit" onClick={editimage} className='btn btn-success'>Set Profile</button>}
                        </form>
                        </div>:
                    <div className="button_image">
                        {profileurl===""?
                        <button onClick={()=>setImageFlag(true)} className="btn btn-success">Add Profile</button>:
                        <button onClick={()=>setImageFlag(true)} className="btn btn-success">Edit Profile</button>}
                    </div>}
                    <br></br>
                    <div>
                        <button className="btn btn-secondary" onClick={()=>navigate("/followers")}><FaUserFriends/> {followers.length} Followers</button>
                        <button className="btn btn-secondary" onClick={()=>navigate("/following")} style={{position:"relative",left:"5px"}}><FaUserFriends/> {following.length} Following</button>
                    </div>
                </div>
                <div className='col-md-1'></div>
                <div className='col-md-5 about_user'>
                    <h1>About</h1>
                    <div className="line"></div>
                    <br></br>
                    {inputflag?<div>
                        <input type="text" className='form-control' value={aboutuser} onChange={(e)=>setAboutUser(e.target.value)} required/>
                        <br></br>
                        {aboutuser!=""?<div>
                        {newbio?
                        <button onClick={addbio} className='btn btn-success'>Save</button>:
                        <button onClick={editbio} className='btn btn-success'>Save</button>
                        }</div>:""}
                        </div>:<div>
                    <h4 id="profile_username">{det.username}</h4>
                    <br></br>
                    <h3 id="about_description">{aboutuser}</h3>
                    <br></br>
                    {newbio?
                    <div className='bio_button'>
                    <button className="btn btn-success" onClick={()=>{setInputFlag(true);setNewBio(true)}}>Add Bio</button>
                    </div>:
                    <div className='bio_button'>
                    <button className="btn btn-success" onClick={()=>setInputFlag(true)}>Edit Bio</button>
                    </div>}
                    </div>
                    }
                    <br></br>
                </div>
            </div>
            <br></br>
            <div className="newpost_button">
                <button className="btn btn-primary" onClick={()=>navigate('/upload')}>New Post</button>
            </div>
            <br></br>
            <br></br>
            <div className='bg-success'>
            <br></br>
            <h2 id="posts_title">All Posts</h2>
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
                    {localStorage.getItem("picsworld_token")?
                    <button style={{position:"relative",left:"5px"}} onClick={()=>deletepost(x)} className='btn btn-outline-success'>Delete Post</button>
                    :""}
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
        </div>
    )
}