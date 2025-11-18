import Link from 'next/link';
import React from 'react'
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FaHome } from "react-icons/fa";

export default function navbar() {

   const Sidebar = ({href,icon,text})=>{
      return(
      <Link 
      href={href} className='flex '>
      <div className='mt-1'>{icon}</div>
       <span className='ml-2'>{text}</span>
      </Link>
      )
   }

  return (
    <aside className='bg-[#393E46] p-4 h-screen md:w-64 w-44  justify-between '>
  <div className='border-2 m-4 text-2xl p-2 text-center rounded-xl'>
    <Link href="/">
    <h1>Chat-App</h1>
    </Link>
  </div>
        
        <div> 
            <ul className='p-4  '>
                
            <li className='header-list '>
                <Sidebar href="/chat" icon={<IoChatbubbleEllipses/>} text="Message"/>
                </li>
            <li className='header-list'>
               <Sidebar href="/setting" icon={<IoMdSettings/>} text="Setting"/>
                </li>
            </ul>
        </div>
    </aside>
  )
}
