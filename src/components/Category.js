import React from 'react'
import '../bootstrap.min.css'
import '../css/home.css'
import {useState,useEffect,useContext} from 'react'
import axios from "../axios/Axios";
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from 'react-router-dom'
import {View} from './View'
import { context } from './Context'
import { NavigationBar } from './Navbar'
import {HashLoader,BarLoader} from 'react-spinners'
import {MdAddAPhoto} from 'react-icons/md'

export const Technology=()=>{
    const[datas,setDatas]=useState([])
    const det=useContext(context)
    const navigate=useNavigate()
    const[loading,setLoading]=useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            if(localStorage.getItem("picsworld_token")){
                axios.get("/search/filter/Technology").then((res)=>{
                    if(res.data.status){
                        setDatas(res.data.msg)
                    }
                    setLoading(false)
                })
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

    return(
        <div className='container-fluid'>
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
            <h1 style={{color:"white",textAlign:"center"}}>Technology</h1>
            <br></br>
            {localStorage.getItem("picsworld_token")?<div>
            {datas.length===0?<h2 className='no_pics'>No Posts Found</h2>:<div>
            {datas.map((x,index)=><div className="posts">
                    {index%2==0?<div className="posts_even">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4 mt-3">
                            <img className="img-fluid" src={x.photo} width="450" height="300"/>
                        </div>
                        <div className='col-md-4 mt-3'>
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
                        <div className='col-md-4 mt-3'>
                            <br></br>
                            <p><span>Title : </span>{x.Title}</p>
                            <p><span>Category : </span>{x.Category}</p>
                            <p><span>Posted By : </span>{x.PostedBy}</p>
                            <p><span>Posted Date : </span>{x.PostedDate.substring(0,10)}</p>
                            <button onClick={()=>{view(x)}} className="btn btn-success">View Post</button>
                        </div>
                        <div className="col-md-4 mt-3">
                            <img className="img-fluid" src={x.photo} width="450" height="300"/>
                        </div>
                        <div className="col-md-2"></div>
                        
                    </div>
                    <br></br>
                    
                    </div>}
                    
            </div>)}
            </div>}
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

export const Blog=()=>{
    const[datas,setDatas]=useState([])
    const det=useContext(context)
    const navigate=useNavigate()
    const[loading,setLoading]=useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            if(localStorage.getItem("picsworld_token")){
                axios.get("/search/filter/Blog").then((res)=>{
                    if(res.data.status){
                        setDatas(res.data.msg)
                    }
                    setLoading(false)
                })
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

    return(
        <div className='container-fluid'>
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
            <h1 style={{color:"white",textAlign:"center"}}>Blog</h1>
            <br></br>
            {localStorage.getItem("picsworld_token")?<div>
            {datas.length===0?<h2 className='no_pics'>No Posts Found</h2>:<div>
            {datas.map((x,index)=><div className="posts">
                    {index%2==0?<div className="posts_even">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4 mt-3">
                            <img className="img-fluid" src={x.photo} width="450" height="300"/>
                        </div>
                        <div className='col-md-4 mt-3'>
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
                        <div className='col-md-4 mt-3'>
                            <br></br>
                            <p><span>Title : </span>{x.Title}</p>
                            <p><span>Category : </span>{x.Category}</p>
                            <p><span>Posted By : </span>{x.PostedBy}</p>
                            <p><span>Posted Date : </span>{x.PostedDate.substring(0,10)}</p>
                            <button onClick={()=>{view(x)}} className="btn btn-success">View Post</button>
                        </div>
                        <div className="col-md-4 mt-3">
                            <img className="img-fluid" src={x.photo} width="450" height="300"/>
                        </div>
                        <div className="col-md-2"></div>
                        
                    </div>
                    <br></br>
                    </div>}
                    
            </div>)}
            </div>}
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

export const News=()=>{
    const[datas,setDatas]=useState([])
    const det=useContext(context)
    const[loading,setLoading]=useState(true)
    const navigate=useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            if(localStorage.getItem("picsworld_token")){
                axios.get("/search/filter/News").then((res)=>{
                    if(res.data.status){
                        setDatas(res.data.msg)
                    }
                    setLoading(false)
                })
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

    return(
        <div className='container-fluid'>
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
            <h1 style={{color:"white",textAlign:"center"}}>News</h1>
            <br></br>
            {localStorage.getItem("picsworld_token")?<div>
            {datas.length===0?<h2 className='no_pics'>No Posts Found</h2>:<div>
            {datas.map((x,index)=><div className="posts">
                    {index%2==0?<div className="posts_even">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4 mt-3">
                            <img className="img-fluid" src={x.photo} width="450" height="300"/>
                        </div>
                        <div className='col-md-4 mt-3'>
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
                        <div className='col-md-4 mt-3'>
                            <br></br>
                            <p><span>Title : </span>{x.Title}</p>
                            <p><span>Category : </span>{x.Category}</p>
                            <p><span>Posted By : </span>{x.PostedBy}</p>
                            <p><span>Posted Date : </span>{x.PostedDate.substring(0,10)}</p>
                            <button onClick={()=>{view(x)}} className="btn btn-success">View Post</button>
                        </div>
                        <div className="col-md-4 mt-3">
                            <img className="img-fluid" src={x.photo} width="450" height="300"/>
                        </div>
                        <div className="col-md-2"></div>
                        
                    </div>
                    <br></br>
                    
                    </div>}
                    
            </div>)}
            </div>}
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

export const Walpaper=()=>{
    const[datas,setDatas]=useState([])
    const det=useContext(context)
    const[loading,setLoading]=useState(true)
    const navigate=useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            if(localStorage.getItem("picsworld_token")){
                axios.get("/search/filter/Walpaper").then((res)=>{
                    if(res.data.status){
                        setDatas(res.data.msg)
                    }
                    setLoading(false)
                })
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

    return(
        <div className='container-fluid'>
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
            <h1 style={{color:"white",textAlign:"center"}}>Walpaper</h1>
            <br></br>
            {localStorage.getItem("picsworld_token")?<div>
            {datas.length===0?<h2 className='no_pics'>No Posts Found</h2>:<div>
            {datas.map((x,index)=><div className="posts">
                    {index%2==0?<div className="posts_even">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4 mt-3">
                            <img className="img-fluid" src={x.photo} width="450" height="300"/>
                        </div>
                        <div className='col-md-4 mt-3'>
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
                        <div className='col-md-4 mt-3'>
                            <br></br>
                            <p><span>Title : </span>{x.Title}</p>
                            <p><span>Category : </span>{x.Category}</p>
                            <p><span>Posted By : </span>{x.PostedBy}</p>
                            <p><span>Posted Date : </span>{x.PostedDate.substring(0,10)}</p>
                            <button onClick={()=>{view(x)}} className="btn btn-success">View Post</button>
                        </div>
                        <div className="col-md-4 mt-3">
                            <img className="img-fluid" src={x.photo} width="450" height="300"/>
                        </div>
                        <div className="col-md-2"></div>
                        
                    </div>
                    <br></br>
                    
                    </div>}
                    
            </div>)}
            </div>}
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

export const Food=()=>{
    const[datas,setDatas]=useState([])
    const det=useContext(context)
    const[loading,setLoading]=useState(true)
    const navigate=useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            if(localStorage.getItem("picsworld_token")){
                axios.get("/search/filter/Food").then((res)=>{
                    if(res.data.status){
                        setDatas(res.data.msg)
                    }
                    setLoading(false)
                })
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

    return(
        <div className='container-fluid'>
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
            <h1 style={{color:"white",textAlign:"center"}}>Food</h1>
            <br></br>
            {localStorage.getItem("picsworld_token")?<div>
            {datas.length===0?<h2 className='no_pics'>No Posts Found</h2>:<div>
            {datas.map((x,index)=><div className="posts">
                    {index%2==0?<div className="posts_even">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4 mt-3">
                            <img className="img-fluid" src={x.photo} width="450" height="300"/>
                        </div>
                        <div className='col-md-4 mt-3'>
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
                        <div className='col-md-4 mt-3'>
                            <br></br>
                            <p><span>Title : </span>{x.Title}</p>
                            <p><span>Category : </span>{x.Category}</p>
                            <p><span>Posted By : </span>{x.PostedBy}</p>
                            <p><span>Posted Date : </span>{x.PostedDate.substring(0,10)}</p>
                            <button onClick={()=>{view(x)}} className="btn btn-success">View Post</button>
                        </div>
                        <div className="col-md-4 mt-3">
                            <img className="img-fluid" src={x.photo} width="450" height="300"/>
                        </div>
                        <div className="col-md-2"></div>
                        
                    </div>
                    <br></br>
                    
                    </div>}
                    
            </div>)}
            </div>}
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

export const Nature=()=>{
    const[datas,setDatas]=useState([])
    const det=useContext(context)
    const[loading,setLoading]=useState(true)
    const navigate=useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            if(localStorage.getItem("picsworld_token")){
                axios.get("/search/filter/Nature").then((res)=>{
                    if(res.data.status){
                        setDatas(res.data.msg)
                    }
                    setLoading(false)
                })
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

    return(
        <div className='container-fluid'>
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
            <h1 style={{color:"white",textAlign:"center"}}>Nature</h1>
            <br></br>
            {localStorage.getItem("picsworld_token")?<div>
            {datas.length===0?<h2 className='no_pics'>No Posts Found</h2>:<div>
            {datas.map((x,index)=><div className="posts">
                    {index%2==0?<div className="posts_even">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4 mt-3">
                            <img className="img-fluid" src={x.photo} width="450" height="300"/>
                        </div>
                        <div className='col-md-4 mt-3'>
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
                        <div className='col-md-4 mt-3'>
                            <br></br>
                            <p><span>Title : </span>{x.Title}</p>
                            <p><span>Category : </span>{x.Category}</p>
                            <p><span>Posted By : </span>{x.PostedBy}</p>
                            <p><span>Posted Date : </span>{x.PostedDate.substring(0,10)}</p>
                            <button onClick={()=>{view(x)}} className="btn btn-success">View Post</button>
                        </div>
                        <div className="col-md-4 mt-3">
                            <img className="img-fluid" src={x.photo} width="450" height="300"/>
                        </div>
                        <div className="col-md-2"></div>
                        
                    </div>
                    <br></br>
                    
                    </div>}
                    
            </div>)}
            </div>}
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

export const Sports=()=>{
    const[datas,setDatas]=useState([])
    const det=useContext(context)
    const[loading,setLoading]=useState(true)
    const navigate=useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            if(localStorage.getItem("picsworld_token")){
                axios.get("/search/filter/Sports").then((res)=>{
                    if(res.data.status){
                        setDatas(res.data.msg)
                    }
                    setLoading(false)
                })
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

    return(
        <div className='container-fluid'>
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
            <h1 style={{color:"white",textAlign:"center"}}>Sports</h1>
            <br></br>
            {localStorage.getItem("picsworld_token")?<div>
            {datas.length===0?<h2 className='no_pics'>No Posts Found</h2>:<div>
            {datas.map((x,index)=><div className="posts">
                    {index%2==0?<div className="posts_even">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4 mt-3">
                            <img className="img-fluid" src={x.photo} width="450" height="300"/>
                        </div>
                        <div className='col-md-4 mt-3'>
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
                        <div className='col-md-4 mt-3'>
                            <br></br>
                            <p><span>Title : </span>{x.Title}</p>
                            <p><span>Category : </span>{x.Category}</p>
                            <p><span>Posted By : </span>{x.PostedBy}</p>
                            <p><span>Posted Date : </span>{x.PostedDate.substring(0,10)}</p>
                            <button onClick={()=>{view(x)}} className="btn btn-success">View Post</button>
                        </div>
                        <div className="col-md-4 mt-3">
                            <img className="img-fluid" src={x.photo} width="450" height="300"/>
                        </div>
                        <div className="col-md-2"></div>
                        
                    </div>
                    <br></br>
                    </div>}
                    
            </div>)}
            </div>}
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

export const Quotes=()=>{
    const[datas,setDatas]=useState([])
    const det=useContext(context)
    const[loading,setLoading]=useState(true)
    const navigate=useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            if(localStorage.getItem("picsworld_token")){
                axios.get("/search/filter/Quotes").then((res)=>{
                    if(res.data.status){
                        setDatas(res.data.msg)
                    }
                    setLoading(false)
                })
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

    return(
        <div className='container-fluid'>
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
            <h1 style={{color:"white",textAlign:"center"}}>Quotes</h1>
            <br></br>
            {localStorage.getItem("picsworld_token")?<div>
            {datas.length===0?<h2 className='no_pics'>No Posts Found</h2>:<div>
            {datas.map((x,index)=><div className="posts">
                    {index%2==0?<div className="posts_even">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4 mt-3">
                            <img className="img-fluid" src={x.photo} width="450" height="300"/>
                        </div>
                        <div className='col-md-4 mt-3'>
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
                        <div className='col-md-4 mt-3'>
                            <br></br>
                            <p><span>Title : </span>{x.Title}</p>
                            <p><span>Category : </span>{x.Category}</p>
                            <p><span>Posted By : </span>{x.PostedBy}</p>
                            <p><span>Posted Date : </span>{x.PostedDate.substring(0,10)}</p>
                            <button onClick={()=>{view(x)}} className="btn btn-success">View Post</button>
                        </div>
                        <div className="col-md-4 mt-3">
                            <img className="img-fluid" src={x.photo} width="450" height="300"/>
                        </div>
                        <div className="col-md-2"></div>
                        
                    </div>
                    <br></br>
                    
                    </div>}
                    
            </div>)}
            </div>}
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

export const Pets=()=>{
    const[datas,setDatas]=useState([])
    const det=useContext(context)
    const[loading,setLoading]=useState(true)
    const navigate=useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            if(localStorage.getItem("picsworld_token")){
                axios.get("/search/filter/Pets").then((res)=>{
                    if(res.data.status){
                        setDatas(res.data.msg)
                    }
                    setLoading(false)
                })
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

    return(
        <div className='container-fluid'>
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
            <h1 style={{color:"white",textAlign:"center"}}>Pets</h1>
            <br></br>
            {localStorage.getItem("picsworld_token")?<div>
            {datas.length===0?<h2 className='no_pics'>No Posts Found</h2>:<div>
            {datas.map((x,index)=><div className="posts">
                    {index%2==0?<div className="posts_even">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4 mt-3">
                            <img className="img-fluid" src={x.photo} width="450" height="300"/>
                        </div>
                        <div className='col-md-4 mt-3'>
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
                        <div className='col-md-4 mt-3'>
                            <br></br>
                            <p><span>Title : </span>{x.Title}</p>
                            <p><span>Category : </span>{x.Category}</p>
                            <p><span>Posted By : </span>{x.PostedBy}</p>
                            <p><span>Posted Date : </span>{x.PostedDate.substring(0,10)}</p>
                            <button onClick={()=>{view(x)}} className="btn btn-success">View Post</button>
                        </div>
                        <div className="col-md-4 mt-3">
                            <img className="img-fluid" src={x.photo} width="450" height="300"/>
                        </div>
                        <div className="col-md-2"></div>
                        
                    </div>
                    <br></br>
                    
                    </div>}
                    
            </div>)}
            </div>}
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

export const Travel=()=>{
    const[datas,setDatas]=useState([])
    const det=useContext(context)
    const[loading,setLoading]=useState(true)
    const navigate=useNavigate()
    useEffect(()=>{
        setTimeout(()=>{
            if(localStorage.getItem("picsworld_token")){
                axios.get("/search/filter/Travel").then((res)=>{
                    if(res.data.status){
                        setDatas(res.data.msg)
                    }
                    setLoading(false)
                })
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

    return(
        <div className='container-fluid'>
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
            <h1 style={{color:"white",textAlign:"center"}}>Travel</h1>
            <br></br>
            {localStorage.getItem("picsworld_token")?<div>
            {(datas.length===0)?<h2 className='no_pics'>No Posts Found</h2>:<div>
            {datas.map((x,index)=><div className="posts">
                    {index%2==0?<div className="posts_even">
                    <div className="row">
                        <div className="col-md-2"></div>
                        <div className="col-md-4 mt-3">
                            <img className="img-fluid" src={x.photo} width="450" height="300"/>
                        </div>
                        <div className='col-md-4 mt-3'>
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
                        <div className='col-md-4 mt-3'>
                            <br></br>
                            <p><span>Title : </span>{x.Title}</p>
                            <p><span>Category : </span>{x.Category}</p>
                            <p><span>Posted By : </span>{x.PostedBy}</p>
                            <p><span>Posted Date : </span>{x.PostedDate.substring(0,10)}</p>
                            <button onClick={()=>{view(x)}} className="btn btn-success">View Post</button>
                        </div>
                        <div className="col-md-4 mt-3">
                            <img className="img-fluid" src={x.photo} width="450" height="300"/>
                        </div>
                        <div className="col-md-2"></div>
                        
                    </div>
                    <br></br>
                   
                    </div>}
                    
            </div>)}
            </div>}
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

