'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect,} from "react";
import { useUserLogin } from "@/state/Login";
export default function Home() {

// Page Controll Login
let router = useRouter()
  const {setUser,logout,user} = useUserLogin()
  
  
useEffect(()=>{
  // GET sessionStorage Login
//  const islogin = 
//     Boolean(user) || sessionStorage.getItem("Login") === true

//    if(islogin){
//    if(router.pathname !== "/chat"){
//        router.push("/chat")
//     }
//    }else{
//    if(router.pathname !== "/login"){
//     router.push("/login")}
//    }
})
  return (


    <div className="md:h-screen md:w-screen p-2">
      <main className="">
        <div>
          Main Web
        </div>
      </main>
    </div>
  );
}
