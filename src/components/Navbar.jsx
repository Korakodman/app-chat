"use client";
import Link from "next/link";
import React from "react";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { useUserLogin, } from "@/state/Login";
import { useMessage } from "@/state/message";
import { useRouter } from "next/navigation";
export default function navbar() {
  const { setUser, logout, user, setLogin } = useUserLogin();
   const { messages, addMessage,hide,changehide } = useMessage();
   
  const Sidebar = ({ href, icon, text }) => {
    return (
      <Link href={href} className="flex ">
        <div className="mt-1">{icon}</div>
        <span className="ml-2 hidden md:block">{text}</span>
      </Link>
    );
  };
  let route = useRouter();
 async function BtnLogut  ()  {
    //   setLogin(null);
    //   logout();
    //  await fetch("http://localhost:3000/api/Logout",{
    //    method: "GET",
    //   credentials: "include",
    //  });
    //   route.push("/login"); 
     changename()
    };
  function Logout({ name }) {

    return (
      <button
        onClick={BtnLogut}
        className=" font-bold border-2 h-fit p-2 md:p-4  border-[#948979] rounded-xl   hover:cursor-pointer"
      >
        {name}
      </button>
    );
  }
   function changename(){
    if(localStorage.getItem("user")){
      localStorage.setItem("user","")
      route.push("/enter-name")
      changehide(false)
    }
   }
  

  return (
    <aside className="bg-[#393E46] wd:p-4 p-4 h-screen md:w-64   justify-between grid ">
      <div className="border-2 m-4 md:text-2xl md:p-2 p-2 text-center rounded-xl h-fit">
        <Link href="/">
          <h1 className=" ">Chat-App</h1>
        </Link>
      </div>

      <div className="h-[250px] -mt-[100px]">
        <ul className="p-4  ">
          <li className="header-list ">
            <Sidebar
              href="/chat"
              icon={<IoChatbubbleEllipses />}
              text="Message"
            />
          </li>
          <li className="header-list">
            <Sidebar href="/setting" icon={<IoMdSettings />} text="Setting" />
          </li>
        </ul>
      </div>
      <div className="grid justify-center mt-[250px] ">
        <div className=" font-bold border-2 h-fit p-2 md:p-4  border-[#948979] rounded-xl   hover:cursor-pointer" onClick={changename}>เปลี่ยนชื่อ</div>
        <Logout name="Logout"></Logout>
      </div>
    </aside>
  );
}
