'use server'
import { NextResponse } from "next/server"
// import { supabase } from "./client"
import { createBrowClient } from "./client"
import { createClient } from "./server"
import { toast } from "react-toastify"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"
// import { count } from "console"
// import { count } from "console"
// import { log } from "console"

export const signup = async (username, email, password) => {
  const supabase = createClient()
  let { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        username: username,
      },
    },
  })

  //  if(error===null){
  //    return NextResponse.json({status:200})
  //  }

  redirect("/")
}

export const getUser = async () => {
  const supabase = createClient()
  const { data, error } = await supabase.auth.getSession();
  console.log(error, data);
  // console.log("user",data);
  return data
}

export const signIn = async (email, password) => {
  const supabase = createClient()

  try {
    let { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    })
    if (error) {
      console.log("error", error.message);
      throw error
    }
  } catch (error) {
    console.log("error rec");
    return { error: error.message }
  }
  revalidatePath("/", "layout")
  // redirect("/")
}

export const signOut = async () => {
  const supabase = createClient()
  let { error } = await supabase.auth.signOut()
  console.log("logged out");
  return redirect("/")
}

export const getUserData = async () => {
  const supabase = createClient()
  const { data: { user } } = await supabase.auth.getUser()
  // console.log("user1",user);
  return user
}

export const likeMovie = async (movieId,poster_path,user_id) => {
  const supabase = createClient();
  // const { data, error1 } = await supabase.auth.getSession()
  // console.log("like", data?.session?.user?.id, movieId)
  try{
  const { data: data1, error } = await supabase
    .from('likedMovies')
    .insert(
      { user_id: user_id, movie_id: movieId, poster_path: poster_path }).select('*')
    console.log("data",data1,error);
    if(error){
      throw error
    }
  }
  catch(error){
    console.log(error);
    return {error:error.message}
  }
}

export const addToWatchlist = async (movieId,poster_path) => {
  const supabase = createClient();
  const { data, error1 } = await supabase.auth.getSession()
  // console.log("like",data?.session?.user?.id,movieId)
  try{
  const { data: data1, error } = await supabase
    .from('watchlist')
    .insert(
      { user_id: data?.session?.user?.id, movie_id: movieId,poster_path:poster_path }).select('*')
  if(error){
    throw error;
  }
    }
    catch(error){
      return {error:error.message}
    }
}

export const setWatched = async (movieId,poster_path) => {
  const supabase = createClient();
  const { data, error1 } = await supabase.auth.getSession()
  // console.log("like",data?.session?.user?.id,movieId)
  try{
  const { data: data1, error } = await supabase
    .from('watched_movies')
    .insert(
      { user_id: data?.session?.user?.id, movie_id: movieId,poster_path:poster_path }).select('*')
      if(error){
        throw error;
      }
    }catch(error){
      return {error:error.message}
    
    }
}

// export const getWatchedMovies = async ({ user_id }) => {
//   const { data: data1, error } = await supabase
//     .from('watchedMovies')
//     .select('movie_id', { count: 'exact', head: true }).eq('user_id', user_id)
//   return data1
// }

export const getMovieStats = async(user_id)=>{
    const supabase = createBrowClient();
    const {data:liked_data,error} = await supabase.from('liked_view').select(`*`)
    const {data:watched_data,error1} = await supabase.from('watched_view').select('*')
    return {liked_data,watched_data}

}

export const getMovies = async()=>{
  const supabase = createClient();
  const {data,error} = await supabase.auth.getSession();
  const {data:liked_movies,error2} = await supabase.from('likedMovies').select('*').eq('user_id',data?.session?.user?.id)
  const {data:watched_movies,error1} = await supabase.from('watchedMovies').select('*').eq('user_id',data?.session?.user?.id)
  const {data:watchlist,error3} = await supabase.from('watchlist').select('*').eq('user_id',data?.session?.user?.id)
  // console.log(liked_number);
  return {liked_movies,watched_movies,watchlist}
}

