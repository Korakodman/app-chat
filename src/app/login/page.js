"use client"
import React, { useRef, useState } from 'react'
import { useLogin } from "@/state/Login";
import { useForm } from '@/hook/UseForm';
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
  const BtnControllChange = ({ text, style }) => {
    return (
      <button className={style} onClick={FormControll}>
        {text}
      </button>
    );
  };
 
// FormLoginControl

   const FormLoginRef = useRef()
   
   const {form,onChange} = useForm({
    username: "",
    password: ""
   })

     const formLogin = (e) => {
      e.preventDefault();
  console.log(  FormLoginRef.current)
    };
  // FormLogin UI
  const FormLogin = ({}) => {
    return (
      <form
        className=" border-2 grid p-4 rounded-tl-2xl rounded-bl-2xl"
        onSubmit={(e) => formLogin(e)}
        ref={FormLoginRef}
      >
        <label className="label-text">Username</label>
        <input
          className="input-bar"
          placeholder="Yourname"
          type="text"
          name="username"
          onChange={onChange}
          value={form.username}
        ></input>
        <label className="label-text">Password</label>
        <input
          className="input-bar"
          placeholder="Password"
          type="password"
          name="password"
          onChange={onChange}
          value={form.password}
        ></input>
        <div className="grid p-4">
          <button className=" bg-[#948979] p-2 font-bold text-xl" type="submit">
            Login
          </button>
          <label className="mt-2">
            Don't have a account?
            <BtnControllChange
              text="Register"
              style="text-blue-500 hover:text-blue-400 ml-2 hover:cursor-pointer"
            />
          </label>
        </div>
      </form>
    );
  };
  // Form Register UI
  const FormRegister = ({}) => {
    const formRegister = (e) => {
      e.preventDefault();
      console.log("Register");
    };
    return (
      <form
        className=" border-2 grid p-4 rounded-tl-2xl rounded-bl-2xl"
        onSubmit={(e) => formRegister(e)}
      >
        <label className="label-text">Username</label>
        <input className="input-bar" placeholder="Yourname"></input>
        <label className="label-text" id="password">
          Password
        </label>
        <input
          className="input-bar"
          placeholder="Password"
          type="password"
        ></input>
        <label className="label-text">Repeat Password</label>
        <input
          className="input-bar"
          placeholder="Repeat Password"
          type="password"
        ></input>
        <div className="grid p-4">
          <button className=" bg-[#948979] p-2 font-bold text-xl">
            Register
          </button>
          <label className="mt-2">
            Already Have a account?
            <BtnControllChange
              text="Login"
              style="text-blue-500 hover:text-blue-400 ml-2 hover:cursor-pointer"
            />
          </label>
        </div>
      </form>
    );
  };

  return (
    <div className="h-screen w-screen p-2 flex justify-center items-center">
      <div>{Form ? <FormLogin /> : <FormRegister />}</div>
    </div>
  );
}
