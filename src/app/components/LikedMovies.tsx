"use client"
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LikedMovies = ({
  likedMovies,
}: {
  likedMovies: { movie_id: string; user_id: string,poster_path:string }[];
}) => {
  // console.log(likedMovies);
    const pathname = usePathname();
  return (
    <div className="mt-16 w-[630px]">
      <div className="flex justify-between">
        <h3 className="font-GraphikLight tracking-wider text-[0.9rem] text-[#9ab] uppercase">
          Liked Movies
        </h3>
        <Link href={`${pathname}/likes/`}>
        <h3 className="font-GraphikLight tracking-wider text-[0.9rem] text-[#9ab] uppercase">All</h3>
        </Link>
      </div>
      <hr className="my-[0.6rem]"></hr>
      <div className="grid lg:grid-rows-1 lg:grid-cols-4 gap-x-4">
        {likedMovies?.map((movie) => (
          <div key={movie.movie_id}>
            <Image
              src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              className="rounded-md hover:border-2 hover:border-green-400 cursor-pointer"
              alt="movie"
              width={150}
              height={225}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LikedMovies;
