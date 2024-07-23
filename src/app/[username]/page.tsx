import React from "react";
import { createClient } from "../supabase/server";
import ProfileDetails from "../components/ProfileDetails";
import { redirect } from "next/navigation";

const page = async() => {
  const supabase = createClient();

  const { data, error } = await supabase.auth.getUser();
  if(!data.user){
    redirect("/")
  }
  

//   return <p>Hello {data.user.email}</p>;
  return <div><ProfileDetails userProfile={data}/> </div>;
};

export default page;
