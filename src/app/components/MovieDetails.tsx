"use client"
import React from "react";
import FilmTab from "./FilmTab";
import Image from "next/image";
import { FaClock, FaEye, FaHeart } from "react-icons/fa";
import { addToWatchlist, getUser, likeMovie, setWatched } from "../supabase/helpers";
import { toast } from "react-toastify";

export type Movie = {
  adult: boolean;
  backdrop_path: string;
  belongs_to_collection: string;
  budget: number;
  genres: Array<{ id: number; name: string }>;
  homepage: string;
  id: number;
  imdb_id: string;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: Array<{
    id: number;
    logo_path: string;
    name: string;
    origin_country: string;
  }>;
  production_countries: Array<{ iso_3166_1: string; name: string }>;
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: Array<{ english_name: string; iso_639_1: string }>;
  status: string;
  tagline: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type Credits = {
  id: number;
  cast: Array<{
    adult: boolean;
    gender: string;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    cast_id: number;
    character: string;
    credit_id: string;
    order: number;
  }>;
  crew: Array<{
    adult: boolean;
    gender: string;
    id: number;
    known_for_department: string;
    name: string;
    original_name: string;
    popularity: number;
    profile_path: string;
    credit_id: string;
    department: string;
    job: string;
  }>;
};

const MovieDetails = ({
  movie,
  credits,
}: {
  movie: Movie;
  credits: Credits;
}) => {
  // console.log(credits);

  const handleLike = async()=>{
    const isSignedIn = await getUser();
    console.log(isSignedIn);
    
    if(isSignedIn.session===null){
      toast.error('Please sign in to like a movie')
      return;
    }
    const res = await likeMovie(movie.id,isSignedIn?.session?.user?.id)
    const data = await res;
    console.log(data);
    
    if(data?.error){
      if(data.error.includes('duplicate key value violates unique constraint')){
      toast.error("Movie already liked")
      return;
    }}
    toast.success('Movie liked successfully')
  }

  const handleWatchlist = async()=>{
    const isSignedIn = await getUser();
    console.log(isSignedIn);
    
    if(isSignedIn.session===null){
      toast.error('Please sign in to watchlist a movie')
      return;
    }
    await addToWatchlist(movie.id)
  }

  const handleaddToWatched = async()=>{
    const isSignedIn = await getUser();
    console.log(isSignedIn);
    
    if(isSignedIn.session===null){
      toast.error('Please sign in to watchlist a movie')
      return;
    }
    await setWatched(movie.id)
  }



  const backdrop_image =
    "http://image.tmdb.org/t/p/original" + movie?.backdrop_path;
  const directed_by = credits?.crew?.filter(
    (crew) => crew.job === "Director"
  )[0]?.name;
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${backdrop_image})` }}
        className={`w-[100vw] max-sm:mt-6 md:w-[80vw] h-[26vh] md:h-[76vh] m-auto bg-[length:100%_100%] bg-center-top bg-no-repeat shadow-[0px_-40px_40px_40px_#14181c_inset] md:shadow-[0px_0px_100px_100px_#14181c_inset]`}
      ></div>
      <div className="flex md:w-[950px] m-auto mt-[-95px] p-8">
        <div className="side_poster max-sm:hidden">
          <Image
            className="sticky top-[10px] rounded-md border-2 border-[rgba(245, 245, 245, .5)]"
            src={`http://image.tmdb.org/t/p/original${movie?.poster_path}`}
            width={500}
            height={500}
            alt={movie?.original_title}
          />
          <h3>{movie?.original_title}</h3>
        </div>
        <div className="flex w-[670px]">
          <div className="middle_content md:m-[20px] md:ml-[50px] flex flex-col gap-[2rem] justify-between">
            <div className="flex flex-wrap max-w-[35rem] gap-2 items-center">
              <h1 className="font-Tiempos text-[32px] ">
                {movie?.original_title}
              </h1>
              <p className="font-Graphik-light text-[17px] text-[#DDEEFF] underline">
                {movie.release_date.slice(0, 4)}
              </p>
              <p>
                Directed by{" "}
                <span className="font-Graphik-light text-[17px] text-[#DDEEFF] underline font-light">
                  {directed_by}
                </span>
              </p>
            </div>
            <h2 className="font-GraphikRegular text-[13px] text-[#99AABB] uppercase">
              {movie?.tagline}
            </h2>
            <p className="font-GraphikRegular text-[16px] text-[#99AABB]">
              {movie?.overview}
            </p>
            <FilmTab movie={movie} credits={credits} />
          </div>
          {/* <div className='last_content invisible md:visible md:w-[40rem] ml-[6rem] text-center items-center '>
            <div className='flex flex-col bg-[#445566] align-center text-[13px] font-GraphikRegular text-[#BBCCDD]'>
                <button className='px-[10px] py-[10px]'>Sign In or log in to rate or review the movie</button>
                <div className='border-t-2 py-[10px]'>Share</div>
            </div>
        </div> */}
          <aside className="bg-[#445566] max-sm:hidden md:visible h-fit rounded-sm ml-[5rem]">
            {/* <div className="flex flex-col bg-[#445566] align-center text-[13px] font-GraphikRegular text-[#BBCCDD]">
              <button className="px-[10px] py-[10px]">
                Sign In or log in to rate or review the movie
              </button>
              <div className="border-t-2 py-[10px]">Share</div>
            </div> */}
            <div className="text-center w-[265px]">
              <div className="actions flex justify-center items-center py-[10px] gap-8 border-b-2 border-[#2c3440] cursor-pointer">
                <div className="flex flex-col items-center gap-2">
                  <FaEye className="text-[2rem] text-[#99AABB]" onClick={handleaddToWatched}/>
                  <span>Watch</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <FaHeart onClick={handleLike} className="text-[2rem] text-[#99AABB]" />
                  <span>Like</span>
                </div>
                <div className="flex flex-col gap-2 items-center">
                  <FaClock onClick={handleWatchlist} className="text-[2rem] text-[#99AABB]" />
                  <span>Watchlist</span>
                </div>
              </div>
              <div className="border-b-2 px-[10px] py-[10px] border-[#2c3440]">
                <p className="text-[13px] font-GraphikRegular">Show your activity</p>
              </div>
              <div className="border-b-2 px-[10px] py-[10px] border-[#2c3440]">
                <p className="text-[13px] font-GraphikRegular">Reviews or log</p>
              </div>
              <div className="px-[10px] py-[10px]">
                <p className="text-[13px] font-GraphikRegular">Add to list</p>
              </div>
            </div>
            <div className="text-center bg-[#14181C]">
              <span className="font-Graphik text-[1.25rem]">{movie?.vote_average}/10</span>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
