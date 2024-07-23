"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { RiCloseLargeFill } from "react-icons/ri";
import { signIn } from "../supabase/helpers";
import { toast } from "react-toastify";
import Submit from "./Submit";
import { useRouter } from "next/navigation";

const SignIn = ({
  setShowSignIn,
}: {
  setShowSignIn: (value: boolean) => void;
}) => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const handleSignIn = async () => {
    // e.preventDefault();
    console.log("clicked");

    const res: any = await signIn(email, password);
    const data = await res;
    if (data?.error) {
      console.log("error occured");

      (document.getElementById("signinform") as HTMLFormElement)?.reset();
      toast.error(data.error);
    }

    if (!data?.error) {
      toast.success("Signed In Successfully");
      setShowSignIn(false);
    }
    // console.log(res);
    // router.refresh()
    //  window.location.href = window.location.href;
    history.go(0);
  };

  return (
    <div>
      <div
        className={`absolute top-0 md:right-4 z-10 right-0 w-screen md:w-auto flex-col md:flex md:flex-row gap-4 items-center md:pl-[30px] px-2 py-4 bg-[#14181C]`}
      >
        <RiCloseLargeFill
          className="absolute top-2 md:top-10 right-2 md:left-2 w-4 h-4 text-[#8696A7] hover:text-white cursor-pointer"
          onClick={() => setShowSignIn(false)}
        />
        <form
          id="signinform"
          action={handleSignIn}
          className="flex flex-col gap-4 md:flex-row"
        >
          <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="flex flex-col max-sm:w-[90%]">
              <label
                className="text-[12px] font-Graphik text-[#667788] mb-[.38461538rem]"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="px-[7px] py-[3.5px] font-GraphikLight text-[12px] text-black outline-none focus:bg-white rounded-md bg-[#2C3440]"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </div>
            <div className="flex flex-col max-sm:w-[90%]">
              <label
                htmlFor="password"
                className="text-[12px] font-Graphik text-[#667788] mb-[.38461538rem]"
              >
                Password
              </label>
              <input
                type="password"
                name="password"
                required
                className="px-[7px] text-black font-GraphikLight text-[12px] py-[3.5px] outline-none rounded-md focus:bg-white bg-[#2C3440]"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
          </div>
          <Submit />
        </form>
      </div>
    </div>
  );
};

export default SignIn;
