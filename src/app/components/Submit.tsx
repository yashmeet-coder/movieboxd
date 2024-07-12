"use client"
// import { log } from 'console';
import React from 'react'
import { useFormStatus } from "react-dom";
import UseAnimations from "react-useanimations";
import loading from "react-useanimations/lib/loading";

const Submit = () => {
    const {pending} = useFormStatus()
    // console.log(pending);
    
  return (
    <div>
      <button type='submit' disabled={pending}
              className="pb-[7px] pt-[6px] px-[8px] mt-[10px] md:mt-0 rounded-md bg-[#00AC1C] text-white text-[0.7rem] tracking-widest hover:bg-[#00981A] font-Graphik uppercase"
            >
              {pending ? <UseAnimations animation={loading} size={20}/> : "Sign In"}
            </button>
    </div>
  )
}

export default Submit
