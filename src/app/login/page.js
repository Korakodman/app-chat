"use client";
import React, { useEffect, useRef, useState } from "react";
import { useUserLogin } from "@/state/Login";
import { useForm } from "@/hook/UseForm";
import { FormLogin } from "@/components/FormLoginUI";
import { FormRegister } from "@/components/FormRegisterUI";
import { FetchLoginAPI } from "@/app/auth/FetchLogin";
import { FetchRegisterAPI } from "../auth/FetchRegister";
import { useRouter } from "next/navigation";
export default function page() {

  
  // State Controll 
  const {setUser,logout,user} = useUserLogin()

// API Fetch DATA 


 useEffect(()=>{
   async function FetchData(params) {
      try {
     const data = await fetch("http://localhost:3000/api/UserAPI",)
     const users = await data.json()
      } catch (error) {
          console.log(error)
      }
    }
    FetchData()
 },[user])


  // ButtonFormChange
  const [Form, setForm] = useState(true);
  const FormControll = () => {
    if (Form) {
      setForm(false);
      formLoginState.username = ""
      formLoginState.password = ""
    } else {
      setForm(true);
      formRegisterState.username = ""
      formRegisterState.password = ""
      formRegisterState.repeatpass = ""

    }
  };

  
  // onChangeHandle
  const onChange = (e) => {
    const { name, value } = e.target;
    if (Form) {
      setFormLogin((prev) => ({ ...prev, [name]: value }));
    
    } else {
      setFormRegister((prev) => ({ ...prev, [name]: value }));
      
    }
  };

  // Button UI Form
  const BtnControllChange = ({ text, style }) => {
    return (
      <button className={style} onClick={FormControll}>
        {text}
      </button>
    );
  };



 // StateLogin

  const [formLoginState, setFormLogin] = useState({
    username: "",
    password: "",
  });

  // StateRegister
  const [formRegisterState, setFormRegister] = useState({
    username: "",
    password: "",
    repeatpass: "",
  });

  let router = useRouter()

  // SubmitFormLogin

 async function formLoginSubmit (e)  {
    e.preventDefault();
  if(formLoginState.username === ""){
        alert("ใส่ชื่อด้วย")
  }else if(formLoginState.password === ""){
        alert("ใส่รหัสผ่านด้วย")
  }
  else{
   const respone =  await FetchLoginAPI("http://localhost:3000/api/LoginAPI",formLoginState);
   if(respone === "login fail"){
     alert("รหัสผิด")
   }
   setFormLogin.username = ""
   setFormLogin.password = ""
   setUser(respone)
   if(respone){
    router.push("/chat")
   }
  }

};
  

  // SubmitFormRegister
  async function formRegisterSubmit  (e) {
    e.preventDefault();
      if(formRegisterState.password === formRegisterState.repeatpass){
        console.log("Correct Password")
        const respone = await FetchRegisterAPI("http://localhost:3000/api/RegistAPI",formRegisterState)
      }else{
        alert("Wrong Password")
        return
      }
  };
  // Form Register UI
  return (
    <div className="h-screen w-screen p-2 flex justify-center items-center">
      <div>
        {Form ? (
          <FormLogin
            onChange={onChange}
            formLoginState={formLoginState}
            BtnControllChange={BtnControllChange}
            formLoginSubmit={formLoginSubmit}
          />
        ) : (
          <FormRegister
            onChange={onChange}
            BtnControllChange={BtnControllChange}
            formRegisterState={formRegisterState}
            formRegisterSubmit={formRegisterSubmit}
          />
        )}
      </div>
    </div>
  );
}
