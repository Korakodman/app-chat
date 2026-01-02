'use client'
import { useRef } from 'react'
import { useRouter } from 'next/navigation'
export default function page() {
  const username = useRef()
  const route = useRouter()
 const inputHandle= (e)=>{ 
    if(e.key ==="Enter"){
         localStorage.setItem("user",username.current.value)
      route.push("/chat")
    }
 }
  return (
    <div className=' flex items-center w-full justify-center  h-screen'>
        <div className=''>
            <p className='p-2'>Insert Your Name</p>
            <input  onKeyDown={inputHandle} ref={username} className=' border-2 p-2 rounded-xl' type='text' placeholder='Your Name'></input>
        </div>
     
        </div>
  )
}
