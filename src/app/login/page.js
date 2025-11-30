"use client";
import React, { useRef, useState } from "react";
import { useLogin } from "@/state/Login";
import { useForm } from "@/hook/UseForm";
import { FormLogin } from "@/components/FormLoginUI";
import { FormRegister } from "@/components/FormRegisterUI";
import { FetchLoginAPI } from "@/app/auth/FetchLogin";
import { FetchRegisterAPI } from "../auth/FetchRegister";
export default function page() {
  
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

  // SubmitFormLogin

 async function formLoginSubmit (e)  {
    e.preventDefault();
      const respone = await FetchLoginAPI("http://localhost:3000/api/LoginAPI",formLoginState);
  //     if(formRegisterState.password === formRegisterState.password){
  //       console.log("Correct Password")
  // }else{
  //   alert("Password is Wrong Try again")
  // }
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
