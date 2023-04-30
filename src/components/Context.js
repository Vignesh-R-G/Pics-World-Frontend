import React from 'react'
import {useState} from 'react'

export const context=React.createContext()

export const Context=(props)=>{
    const [searchdetails,setSearchDetails]=useState([])
    const [viewdetails,setViewDetails]=useState([])
    const [verifylogin,setVerifyLogin]=useState(false)
    const [username,setUserName]=useState("")
    const [useremail,setUserEmail]=useState("")
    const [followersinfo,setFollowersInfo]=useState([])
    const [followinginfo,setFollowingInfo]=useState([])
    const [profileurl,setProfileUrl]=useState("")

    
    return(
        <div>
            <context.Provider value={{setSearchDetails,searchdetails,viewdetails,setViewDetails,verifylogin,setVerifyLogin,username,setUserName,useremail,setUserEmail,followersinfo,setFollowersInfo,followinginfo,setFollowingInfo,profileurl,setProfileUrl}}>{props.children}</context.Provider>
        </div>
    )
}