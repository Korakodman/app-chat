'use client'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation'
import { useMessage } from "@/state/message";
export default function page() {
  const username = useRef() 
  const route = useRouter()
 const {changehide ,hide} = useMessage()
  useEffect(()=>{
    if(localStorage.getItem("user")){
      route.push("/chat")
    }
  })
 const inputHandle= (e)=>{ 
    if(e.key ==="Enter"){
         localStorage.setItem("user",username.current.value)
         changehide(true)
      route.push("/chat")
    }
 }
  return (
    <div className=' grid items-center w-full justify-center  h-screen '>
      <div className=''>
        <p className=' text-3xl'>Welcome To App Chat Basic</p>
        </div>
        <div className='mb-96 ml-10 grid'>
            <p className='p-2 font-bold text-2xl '>Insert Your Name</p>
            <input  onKeyDown={inputHandle} ref={username} className=' border-2 p-2 rounded-xl text-2xl focus:outline-none' type='text' placeholder='Your Name'></input>
            <button className='mt-4 border-2 p-2 hover:cursor-pointer hover:bg-gray-700 font-bold' >Submit</button>
        </div>
     
        </div>
  )
}
