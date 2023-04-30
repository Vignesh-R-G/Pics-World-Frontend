import React from 'react'
import '../bootstrap.min.css'
import '../css/register.css'
import {useState,useEffect} from 'react'
import axios from "../axios/Axios";
import { ToastContainer, toast } from 'react-toastify'
import "react-toastify/dist/ReactToastify.css"
import { useNavigate } from 'react-router-dom'
import { NavigationBar } from './Navbar'
import {BarLoader, HashLoader} from 'react-spinners'

export const Register=()=>{

    const navigate=useNavigate()
    const[name,setName]=useState("")
    const[email,setEmail]=useState("")
    const[mno,setMno]=useState("")
    const[age,setAge]=useState("")
    const[password,setPassword]=useState("")
    const[loading,setLoading]=useState(true)
    
    useEffect(()=>{
        setTimeout(()=>{
            setLoading(false)
        },1000)
    },[])

    const signup=(e)=>{
        const datas={
            name:name,
            email:email,
            mno:mno,
            age:age,
            password:password
        }
        axios.post("/user/register",datas).then((res)=>{
            if(res.data.status){
                toast.success(res.data.msg)
                navigate("/login")
            }
            else{
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
            <div className="row">
                <div className="col-md-4"></div>
                <div className="col-md-4 bg bg-dark"> 
                        <div className="signup_body">  
                            <div className='signup_inner'>
                            <div className='signup'>
                                <h1>SignUp</h1>
                                <br></br>
                            </div>
                            <form onSubmit={signup}>
                                <div className="form-group">
                                    <label>Name :</label>
                                    <input type="text" value={name} placeholder="Eg:Vignesh R G" onChange={(e)=>setName(e.target.value)} className="form-control" required></input>
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <label>Email :</label>
                                    <input type="email" value={email} placeholder="Eg:vigneshrg.20cse@kongu.edu" onChange={(e)=>setEmail(e.target.value)} className="form-control" required></input>
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <label>Mobile Number :</label>
                                    <input type="number" value={mno} placeholder="Eg:1234567890" onChange={(e)=>setMno(e.target.value)} className="form-control" required></input>
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <label>Age :</label>
                                    <input type="number" value={age} placeholder="Eg:20" onChange={(e)=>setAge(e.target.value)} className="form-control" required></input>
                                </div>
                                <br></br>
                                <div className="form-group">
                                    <label>Password :</label>
                                    <input type="password" placeholder="Enter a strong Password" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" required></input>
                                </div>
                                <br></br>
                                <div className="signup_button">
                                    <button className="btn btn-primary" type="submit">SignUp</button>
                                </div>
                                <br></br>
                                <p id="register_footer">Already a user?&ensp; &ensp;<button onClick={()=>navigate("/login")} className="btn btn-success">Login</button></p>
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