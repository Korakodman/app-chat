"use client"
import React, { useRef, useState } from 'react'

export default function page() {

   const [Form, setForm] = useState(true)
   const FormControll = () =>{
    if(Form){
        setForm(false)
    }else{
        setForm(true)
    }
  }

  const BtnControllChange = ({text,style}) =>{
    return(
        <button className={style} onClick={FormControll}>{text}</button>
    )
  }

// FormLogin UI
    const FormLogin = ({})=>{
        
   const formLogin = (e) =>{
    e.preventDefault()
    console.log("Login")
   }
        return(
            <form className=' border-2 grid p-4 rounded-tl-2xl rounded-bl-2xl' onSubmit={(e)=>formLogin(e)}>
                <label className='label-text'>Username</label>
                 <input className='input-bar' placeholder='Your'></input>
                <label className='label-text'>Password</label>
                <input className='input-bar' placeholder='Password'></input>
<div className='grid p-4'>
                
                <button className=' bg-[#948979] p-2 font-bold text-xl'>Login</button>
                <label className='mt-2'>Don't have a account?
                      <BtnControllChange text="Register" style="text-blue-500 hover:text-blue-400 ml-2 hover:cursor-pointer"/>
                </label>
</div>
            </form>
        )
    }
// Form Register UI
     const FormRegister = ({})=>{
    const formRegister = (e) =>{
    e.preventDefault()
    console.log("Register")
   }
        return(
           
            <form className=' border-2 grid p-4 rounded-tl-2xl rounded-bl-2xl' onSubmit={(e)=>formRegister(e)}>

                <label className='label-text'>Username</label>
                 <input className='input-bar' placeholder='Your'></input>
                <label className='label-text'>Password</label>
                <input className='input-bar' placeholder='Password'></input>
                 <label className='label-text'>Repeat Password</label>
                <input className='input-bar' placeholder='Repeat Password'></input>
              <div className='grid p-4'>
                
                <button className=' bg-[#948979] p-2 font-bold text-xl'>Register</button>
                <label className='mt-2'>Already Have a account?
                    <BtnControllChange text="Login" style="text-blue-500 hover:text-blue-400 ml-2 hover:cursor-pointer"/>
                </label>
             </div>
            </form>
        )
    }

  return (
    <div className='h-screen w-screen p-2 flex justify-center items-center'>
        <div>{Form ? <FormLogin/> : <FormRegister/>}</div>
        </div>
  )
}
