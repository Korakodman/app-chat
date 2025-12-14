"use client";
import Link from "next/link";
import React from "react";
import { IoChatbubbleEllipses } from "react-icons/io5";
import { IoMdSettings } from "react-icons/io";
import { FaHome } from "react-icons/fa";
import { useUserLogin } from "@/state/Login";
import { useRouter } from "next/navigation";
export default function navbar() {
  const { setUser, logout, user, setLogin } = useUserLogin();

  const Sidebar = ({ href, icon, text }) => {
    return (
      <Link href={href} className="flex ">
        <div className="mt-1">{icon}</div>
        <span className="ml-2">{text}</span>
      </Link>
    );
  };
  let route = useRouter();
 async function BtnLogut  ()  {
      setLogin(null);
      logout();
     await fetch("http://localhost:3000/api/Logout",{
       method: "GET",
      credentials: "include",
     });
      route.push("/login");
      
    };
  function Logout({ name }) {

    return (
      <button
        onClick={BtnLogut}
        className=" font-bold border-2 h-fit p-4 border-[#948979] rounded-xl -mb-60 hover:cursor-pointer"
      >
        {name}
      </button>
    );
  }
  return (
    <aside className="bg-[#393E46] p-4 h-screen md:w-64 w-44  justify-between grid ">
      <div className="border-2 m-4 text-2xl p-2 text-center rounded-xl h-fit">
        <Link href="/">
          <h1>Chat-App</h1>
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
      <div className="flex justify-center mt-[250px]">
        <Logout name="Logout"></Logout>
      </div>
    </aside>
  );
}
