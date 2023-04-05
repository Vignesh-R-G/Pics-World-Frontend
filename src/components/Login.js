import React from 'react'
import '../bootstrap.min.css'
import '../css/login.css'
import {useState} from 'react'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from 'react-router-dom'

export const Login=()=>{

    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")
    const navigate=useNavigate()

    const signup=(e)=>{
        const datas={
            email:email,
            password:password
        }
        axios.post("http://localhost:5000/user/login",datas).then((res)=>{
            if(res.data.status){
                const jwt=res.data.decoded
                localStorage.setItem("picsworld_username",jwt.name)
                toast.success(res.data.msg)
            }
            else{
                toast.warning(res.data.msg)
            }
        })
        e.preventDefault()
    }

    return(
        
        <div className='container-fluid'>
            <br></br>
            <br></br>
            <br></br>
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4"> 
                        <div className="login_body">  
                            <div className='login_inner'>
                            <div className='login'>
                                <h1>Login</h1>
                                <hr></hr>
                            </div>
                            <form onSubmit={signup}>
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
                                    <button className="btn btn-outline-primary" type="submit">Login</button>
                                </div>
                                <br></br>
                                <p id="login_footer">Not a user?&ensp; &ensp;<button onClick={()=>navigate("/register")} className="btn btn-outline-success">Signup</button></p>
                            </form>
                            </div>
                        </div>
                </div>
                <div className="col-md-4"> </div>
            </div>
            <ToastContainer/>
            </div>
    )
}