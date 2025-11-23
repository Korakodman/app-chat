'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect,} from "react";
export default function Home() {

// Page Controll Login
let router = useRouter()
   const ControllPageUser = (login) =>{
   if(login){
     router.push("/chat")
   }else{
    router.push("/login")
   }
   }

  
useEffect(()=>{
  // GET sessionStorage Login
  sessionStorage.setItem("Login",false)
  let isLogin = sessionStorage.getItem("Login")
   if(isLogin === "true"){
    ControllPageUser(true)
   }else{
    ControllPageUser(false)
   }
})
  return (


    <div className="h-screen w-screen p-2">
      <main className="">
        <div>
          Main Web
        </div>
      </main>
    </div>
  );
}
