import React, { useContext } from 'react'
import '../bootstrap.min.css'
import '../css/login.css'
import {useState,useEffect} from 'react'
import axios from "../axios/Axios";
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from 'react-router-dom'
import {context} from './Context'
import {BarLoader, HashLoader} from 'react-spinners'
import { NavigationBar } from './Navbar'

export const Login=()=>{

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()
    const[loading,setLoading]=useState(true)
    const cont=useContext(context)
    
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])
    const login=(e)=>{
        const datas={
            email:email,
            password:password
        }
        setLoading(true)
        axios.post("/user/login",datas).then((res)=>{
            if(res.data.status){
                const token=res.data.token
                localStorage.setItem("picsworld_token",token)
                cont.setUserName(res.data.username)
                cont.setUserEmail(res.data.useremail)
                setLoading(false)
                toast.success("Signed in successfuly !")
                navigate("/")
            }
            else{
                setLoading(false)
                toast.warning(res.data.msg)
            }
        })
        e.preventDefault()
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
            :<div>
            <NavigationBar/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 login_borders bg bg-dark"> 
                        <div className="login_body">  
                            <div className='login_inner'>
                            <div className='login'>
                                <h1>Login</h1>
                                <br></br>
                            </div>
                            <form onSubmit={login}>
                                <div className="form-group">
                                    <label>Email :</label>
                                    <input type="email" placeholder="Enter your registered email" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" required></input>
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <label>Password :</label>
                                    <input type="password" placeholder="Enter your registered Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" required></input>
                                </div>
                                <br></br>
                                <div className="login_button">
                                    <button className="btn btn-primary" type="submit">Login</button>
                                </div>
                                <br></br>
                                <p id="login_footer">Not a user?&ensp; &ensp;<button onClick={()=>navigate("/register")} className="btn btn-success">Signup</button></p>
                            </form>
                            </div>
                        </div>
                </div>
                <div className="col-md-4"> </div>
            </div>
            <ToastContainer/>
            </div>}
            </div>
    )
}