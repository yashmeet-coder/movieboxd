"use client";
import React, { useState, useEffect, FormEvent } from "react";
import letterboxd_logo from "../assets/letterboxd_logo.png";
import phone_logo from "../assets/logo_mobile.png";
import Image from "next/image";
import SignUp from "./SignUp";
import { getUser, signOut } from "../supabase/helpers";
import { CiMenuFries, CiUser } from "react-icons/ci";
import { useMediaQuery } from "react-responsive";
import { useRouter } from "next/navigation";
import Link from "next/link";
// import { createClient } from "../supabase/client";
import SignIn from "./SignIn";
import SearchBar from "./SearchBar";
import { FaSearch } from "react-icons/fa";

const Navbar: React.FunctionComponent = () => {
  // const supabase = createClient();
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [show, setShow] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  const [profile, setProfile] = useState<any>({});
  const [showSignIn, setShowSignIn] = useState(false);

  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const router = useRouter();

  const user = async () => {
    const data = await getUser();
    // console.log(data.session?.user.user_metadata.username);
    setProfile(data);
  };

  useEffect(() => {
    async function getUser() {
      // const user = await supabase.auth.getSession();
      // console.log(user);
      await user()

      // if (profile) {
      //   setProfile(?.data?.session);
      // }
    }
    getUser();
  }, []);

  const handleSignOut = async () => {
    await signOut();
    // window.location.reload();
    history.go(0);
    // router.refresh();
  };

  return (
    <div className="absolute top-0 m-auto md:w-[950px]">
      {/* <div className="w-[950px] m-auto bg-transparent"> */}
      <div className="w-screen md:hidden flex justify-between h-[1.5rem] gap-2 p-2 items-center">
        <Link href="/">
          <Image src={phone_logo} width={35} alt="logo" />
        </Link>
        <div className="flex gap-2">
          <CiMenuFries
            onClick={() => {
              setIsMenuVisible(!isMenuVisible);
            }}
          />
          <CiUser onClick={() => setShowSignIn(true)} />
          <FaSearch onClick={()=>{setShowSearch(!showSearch)}}/>
        </div>
      </div>
            {showSearch && <SearchBar />}
      <div className="flex items-center md:pt-4 relative m-auto">
        <Link href="/">
          <section className="md:flex invisible md:visible">
            {/* <h1 className='text-white'>HelloWorld</h1> */}
            <Image src={letterboxd_logo} alt="Letterboxd Logo" width={240} />
          </section>
        </Link>
        <div className={`${showSignIn ? "" : "flex items-center"} `}>
        
          <ul className="max-sm:hidden md:flex gap-4 ml-16 cursor-pointer items-center">
            {!profile?.session && (
              <div className="flex gap-4">
                <li
                  className="font-Graphik text-[13px] uppercase tracking-widest py-4"
                  onClick={() => {
                    setShowSignIn(true);
                    console.log(showSignIn);
                  }}
                >
                  Sign In
                </li>

                <li
                  className="font-Graphik text-[13px] uppercase tracking-widest py-4"
                  onClick={() => {
                    setShow(!show);
                  }}
                >
                  Create Account
                </li>
              </div>
            )}
            {profile?.session && (
              <div className="group hover:bg-[#89a] py-4 pl-[15px] pr-[40px]">
                <p className="font-Graphik text-[13px] uppercase tracking-widest">
                  Hi, {profile?.session?.user?.user_metadata?.username}!
                </p>
                <form action={handleSignOut}>
                  <ul className=" bg-[#89a] invisible h-0 group-hover:visible py-4 group-hover:h-auto absolute z-20 top-[4.3rem] left-[32%] space-y-2 border-t-2">
                    <li className="font-GraphikRegular text-[12px] pl-[15px] pr-[56px] pt-[6px] hover:bg-[#88a] pb-[6px] leading-4 text-black tracking-wide">
                      Home
                    </li>
                    <Link href={`/${profile?.session?.user?.user_metadata?.username}`}>
                      <li className="font-GraphikRegular text-[12px] pl-[15px] pr-[71px] pt-[6px] text-black hover:bg-[#88a] pb-[6px] leading-4 tracking-wide">
                        Profile
                      </li>
                    </Link>
                    <li className="font-GraphikRegular text-[12px] pl-[15px] pr-[71px] pt-[6px] text-black hover:bg-[#88a] pb-[6px] leading-4 tracking-wide">
                      Films
                    </li>
                    <li className="font-GraphikRegular text-[12px] pl-[15px] pr-[71px] pt-[6px] text-black hover:bg-[#88a] pb-[6px] leading-4 tracking-wide">
                      Reviews
                    </li>
                    <li className="font-GraphikRegular text-[12px] pl-[15px] pr-[71px] pt-[6px] text-black hover:bg-[#88a] pb-[6px] leading-4 tracking-wide">
                      Watchlist
                    </li>
                    <li className="font-GraphikRegular text-[12px] pl-[15px] pr-[71px] pt-[6px] text-black hover:bg-[#88a] pb-[6px] leading-4 tracking-wide">
                      Settings
                    </li>
                    <button type="submit">
                      <li className="font-GraphikRegular text-[12px] pl-[15px] pr-[71px] pt-[6px] text-black hover:bg-[#88a] pb-[6px] leading-4 tracking-wide">
                        Sign out
                      </li>
                    </button>
                  </ul>
                </form>
              </div>
            )}
            <li className="font-Graphik text-[13px] uppercase tracking-widest py-4">
              Films
            </li>
            <li className="font-Graphik text-[13px] py-4 uppercase tracking-widest">
              Lists
            </li>
            <li className="font-Graphik text-[13px] py-4 uppercase tracking-widest">
              Members
            </li>
            {/* <li className="font-Graphik text-[13px] py-4 uppercase tracking-widest">
              <SearchBar />
              </li> */}
              <SearchBar />
          </ul>
          {isMobile && (
            <div
              className={`flex box-border relative z-10 flex-col w-screen transition-all cubic-bezier(0.37, 0, 0.63, 1) duration-200 bg-slate-500 ${
                isMenuVisible ? "max-h-0 overflow-hidden" : "max-h-[8rem]"
              }`}
            >
              <ul className="m-4">
                {!profile?.session && (
                  <div className="flex gap-4">
                    <li
                      className="font-Graphik text-[13px] uppercase tracking-widest"
                      onClick={() => {
                        setShow(!show);
                      }}
                    >
                      Create Account
                    </li>
                  </div>
                )}
                {profile?.session && (
                  <li className="font-Graphik text-[13px] uppercase tracking-widest">
                    Hi, {profile?.session?.user.user_metadata.username}!
                  </li>
                )}
                <li className="font-Graphik text-[13px] uppercase tracking-widest">
                  Films
                </li>
                <li className="font-Graphik text-[13px] uppercase tracking-widest">
                  Lists
                </li>
                <li className="font-Graphik text-[13px] uppercase tracking-widest">
                  Members
                </li>
                <li
                  className="font-Graphik text-[13px] uppercase tracking-widest"
                  onClick={handleSignOut}
                >
                  Sign Out
                </li>
              </ul>
            </div>
          )}
        </div>
        {showSignIn && !profile?.session && <SignIn setShowSignIn={setShowSignIn} />}
        {show && <SignUp setShow={setShow} />}
      </div>
     </div>
  );
};

export default Navbar;
