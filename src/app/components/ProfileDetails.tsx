"use client";
import React, { useEffect } from "react";
import { getMovies } from "../supabase/helpers";
// import { getWatchedMovies } from "../supabase/helpers";

const ProfileDetails = ({ userProfile }: { userProfile: any }) => {
  const [likedMovies, setLikedMovies] = React.useState<any>(0);
  const [watchedMovies, setWatchedMovies] = React.useState<any>(0);

  useEffect(() => {
    async function getLikedMovies() {
      const { liked_movies, watched_movies } = await getMovies(
        userProfile?.user?.id
      );
      // const watched = await getWatchedMovies(userProfile?.user?.id)
      setWatchedMovies(watched_movies);
      setLikedMovies(liked_movies);
    }
    getLikedMovies();
  }, []);

  return (
    <div className=" mx-auto w-[950px] mt-28 p-8">
      <div className="top_bar flex justify-between items-center">
        <div className="flex gap-4">
          <h1 className="font-Graphik text-[1.69230769rem] inline-flex max-w-[450px] mr-8">
            {userProfile?.user?.user_metadata?.username}
          </h1>
          <button className="bg-[#678] text-[.84615385rem] text-center font-GraphikRegular uppercase tracking-widest text-white px-[15px] rounded-md">
            Edit Profile
          </button>
        </div>
        <div className="film_stats flex">
          <div className=" text-center p-2 after:w-[0.1rem] after:h-[3rem] after:bg-white after:float-right after:ml-[6rem] after:mt-[-3rem]">
            <span className="font-Tiempos text-[1.61538462rem]">{likedMovies?.length}</span>
            <p className="text-[#678] hover:text-[#40bcf4] uppercase tracking-wider text-[.76923077rem] font-GraphikLight tra">Liked</p>
          </div>
          <div className="flex flex-col text-center p-2">
            <span className="font-Tiempos text-[1.61538462rem]">{watchedMovies?.length}</span>
            <p className="text-[#678] hover:text-[#40bcf4] uppercase tracking-wider text-[.76923077rem] font-GraphikLight">Watched</p>
          </div>
        </div>
      </div>
      <div className="liked_movies">  
        <h3>Liked Movies</h3>
      </div>
    </div>
  );
};

export default ProfileDetails;
