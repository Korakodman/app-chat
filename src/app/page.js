'use client'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect,} from "react";
import { useUserLogin } from "@/state/Login";
export default function Home() {

// Page Controll Login
let router = useRouter()
  const {setUser,logout,user} = useUserLogin()
   const ControllPageUser = (login) =>{
   if(user || sessionStorage.getItem("Login")){
     router.push("/chat")
   }else{
    router.push("/login")
   }
   }

  
useEffect(()=>{
  // GET sessionStorage Login
   if(user){
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
