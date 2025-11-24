"use client";
import React, { useRef, useState } from "react";
import { useLogin } from "@/state/Login";
import { useForm } from "@/hook/UseForm";
import { FormLogin } from "@/components/FormLoginUI";
import { FormRegister } from "@/components/FormRegisterUI";
export default function page() {
  
  // ButtonFormChange
  const [Form, setForm] = useState(true);
  const FormControll = () => {
    if (Form) {
      setForm(false);
    } else {
      setForm(true);
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

  const formLoginSubmit = (e) => {
    e.preventDefault();
    console.log(formLoginState);
  };

  // SubmitFormRegister
  const formRegisterSubmit = (e) => {
    e.preventDefault();
    console.log(formRegisterState);
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
