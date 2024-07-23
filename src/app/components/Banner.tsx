"use client";
import React, { useEffect, useState } from "react";
import SignUp from "./SignUp";
import { getUser } from "../supabase/helpers";

const Banner = ({imageUrl,title}:{imageUrl:string,title:string}) => {
  const [isSignUpVisible, setIsSignUpVisible] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [profile, setProfile] = useState<any>({});
  const bgurl = "https://s.ltrbxd.com/static/img/content-bg.2f106e08.png"
  useEffect(()=>{
    async function fetchData(){
      const user = await getUser();
      // console.log(user);
      if(user?.session){
        console.log(user);
        
        setIsSignedIn(true)
      }
      setProfile(user)
    }
    fetchData()
  },[])
  return (
    <div className="mt-[2rem] md:mt-[5rem]">
      {!isSignedIn && 
      <div>
      <div
        style={{ backgroundImage: `url(${imageUrl})` }}
        className={`w-[100vw] md:w-[80vw] h-[26vh] md:h-[76vh] mt-0 m-auto bg-[length:100%_100%] bg-center-top bg-no-repeat shadow-[0px_-40px_40px_40px_#14181c_inset] md:shadow-[0px_0px_100px_100px_#14181c_inset]`}
      >
        <p className="absolute z-0 right-[0.5rem] top-[6rem] md:right-[12rem] md:top-[26rem] -rotate-90 text-[13px]">
          <a >
            {title}
          </a>
        </p>
      </div>
      <div className="text-center">
        <h1 className="font-Tiempos text-[20px] md:text-[36px] text-center mt-[-2rem] md:mt-[-4rem]">
          Track films you&apos;ve watched.
          <br />
          Save those you want to see.
          <br />
          Tell your friends what&apos;s good.
        </h1>
        <button
          className="bg-[#00ac1c] px-4 py-2 mt-8 rounded-md font-Graphik"
          onClick={() => setIsSignUpVisible(true)}
        >
          Get started - It&apos;s free!
        </button>
      </div>

      {isSignUpVisible && <SignUp setShow={setIsSignUpVisible} />}
      </div>
    }
    {isSignedIn && <div className="mb-[6rem] w-screen text-center">
      <h1 className="text-[26px] font-GraphikLight text-[#AABBCC]">Welcome back, <span className="text-white underline">{profile?.session?.user?.user_metadata?.username}</span>. Here&apos;s what we have been watching</h1>
      </div>}
    </div>

  );
};

export default Banner;
