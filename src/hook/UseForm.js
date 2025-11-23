import { useState } from "react";

export function useForm(initialValue){
   const [form,setForm] = useState(initialValue)

   const onChange = (e) =>{
      const {name,value} = e.target
      setForm(prev=>({...prev,[name]:value}))
   }
   return { form, onChange, setForm };
}