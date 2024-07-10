import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Timewatch = () => {
    let[min,setMin]=useState(0)
    let[sec,setSec]=useState(0)
    let[hour,setHour]=useState(0)
    let[start,setStart]=useState(false)

    useEffect(()=>{
      let timer = setInterval(()=>{
        if(start){
            setSec(sec+1)
            if(sec==59){
                setSec(0)
                setMin(min+1)
            }
            if(min==59){
                setMin(0)
                setHour(hour+1)
            }
        }
        return()=>{
            setInterval(timer)
        }
      },1000)
    },[start,sec])

  return (
    <div>
        <h1>{hour} : {min} : {sec}</h1>
        <button onClick={()=>setStart(true)}>start</button>
        <button onClick={()=>setStart(false)}>stop</button>
        <button>reset</button>
    </div>
  )
}

export default Timewatch