import React from 'react'
import {useState} from 'react'

export const context=React.createContext()

export const Context=(props)=>{
    const [searchdetails,setSearchDetails]=useState([])
    const [viewdetails,setViewDetails]=useState([])
    const [verifylogin,setVerifyLogin]=useState(false)
    const [username,setUserName]=useState("")
    return(
        <div>
            <context.Provider value={{setSearchDetails,searchdetails,viewdetails,setViewDetails,verifylogin,setVerifyLogin,username,setUserName}}>{props.children}</context.Provider>
        </div>
    )
}