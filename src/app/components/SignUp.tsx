"use client";
import React, { useEffect,useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import {signup} from '../supabase/helpers'
import { toast } from "react-toastify";

const SignUp = ({ setShow }: { setShow: any }) => {
  const dialog = React.useRef<HTMLDialogElement>(null);
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [username,setUsername] = useState('')

  const handleSignUp = () => {
    signup(username,email,password)
    // if(error.status === 201){
    //   toast.success('Account created successfully')
    // }
    setShow(false)
    if (typeof window !== undefined) window.location.reload()
  }

  useEffect(() => {
    dialog.current?.showModal();
  });
  //   const openDialog = () => {
  //     dialog.current?.showModal();
  //   };
  return (
    <div>
      <dialog
        className="backdrop:bg-black/80 w-[100] md:w-[200] relative rounded-md md:h-[200] bg-[#445566]"
        ref={dialog}
      >
        <div className="flex flex-col gap-4 md:p-10 p-4  justify-start">
          <h1 className="text-[#8696A7] text-xl uppercase">Join LetterBoxd</h1>
          <div className="flex flex-col gap-4 text-black">
            <div className="flex flex-col gap-[0.384rem] text-black">
              <label className="text-[13px] font-Graphik text-white" htmlFor="email">Email Address</label>
              <input
                className="md:w-[400px] w-[300px] bg-[#cde] focus:bg-white px-4 py-2 rounded-lg border-none outline-none"
                type="text"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-[0.384rem]">
              <label className="text-[13px] font-Graphik text-white" htmlFor="username">Username</label>
              <input
                type="text"
                className="w-[300px]  bg-[#cde] focus:bg-white px-4 py-2 rounded-lg border-none outline-none"
                name="username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-[0.384rem]">
              <label className="text-[13px] font-Graphik text-white" htmlFor="password">Password</label>
              <input
                type="password"
                className="w-[300px]  bg-[#cde] focus:bg-white px-4 py-2 rounded-lg border-none outline-none"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="flex items-center mt-8">
                {/* <i className="substitute"></i> */}
            <input className="mr-2 w-6 h-6" type="checkbox" name="terms" id="terms" />
            <label htmlFor="terms" className="text-white">I agree to the terms and conditions</label>
            </div>
          </div>
        </div>
          <button className="ml-10 mb-10 px-4 py-2 rounded-md bg-[#00AC1C] text-white text-[0.9rem] tracking-widest hover:bg-[#00981A] font-Graphik uppercase" onClick={handleSignUp}>Sign Up</button>
          <RiCloseLargeFill className="absolute top-4 right-4 md:top-10 md:right-10 w-6 h-6 text-[#8696A7] hover:text-white cursor-pointer" onClick={() => setShow(false)} />
      </dialog>
    </div>
  );
};

export default SignUp;
