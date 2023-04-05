import React from 'react'
import {useState} from 'react'

export const context=React.createContext()

export const Context=(props)=>{
    const [searchdetails,setSearchDetails]=useState([])
    const [viewdetails,setViewDetails]=useState([])
    return(
        <div>
            <context.Provider value={{setSearchDetails,searchdetails,viewdetails,setViewDetails}}>{props.children}</context.Provider>
        </div>
    )
}