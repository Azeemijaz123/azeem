import React, { useState } from 'react'
import { toast } from 'react-toastify'



const Counter =()=>{
const [Counter,setCounter]=useState(0)

const add=()=>{
    if(Counter<10){
        setCounter(Counter+1)
    }
    else{
        toast.info('you cannot add more products!',{
            position:"top-right",
            autoClose: 5000,
            pauseOnHover:false,
            draggable: false,
            theme: "dark",
        })
        
    }
}

const sub=()=>{
    if(Counter>0){
        setCounter(Counter-1)
    }
}

  return (
    <div className='d-flex justify-content-center align-items-center'>
        <button className='btn btn-danger' onClick={sub}>-</button>
        <h1>{Counter}</h1>
        <button className='btn btn-primary' onClick={add}>+</button>
    </div>

  )
}

export default Counter