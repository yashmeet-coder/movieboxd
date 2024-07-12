"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaEye, FaHeart } from "react-icons/fa";
import Link from "next/link";

const MovieCard = ({
  movie,
  movie_stats,
}: {
  movie: any;
  movie_stats: any;
}) => {
  //  const [stats,setStats] = useState<{'likes':Number,'watches':Number}>({'likes':0,'watches':0});
  //   // console.log(movie);
  //   useEffect(()=>{

  //   },[])
  useEffect(() => {
    console.log(movie_stats);

    // console.log(movie_stats?.movie.id?.likes);
  }, []);
  // console.log(movie_stats?.movie.id?.likes);

  return (
    <div className="w-[114px] h-[170px] md:h-[225px] md:w-[150px] rounded-md relative group cursor-pointer border-[1px] hover:border-green-500 hover:border-[3px]">
      <Link href={`/film/${movie?.id}`}>
        <img
          className="rounded-md"
          src={`http://image.tmdb.org/t/p/original${movie?.poster_path}`}
          alt={movie?.original_title}
        />
        <div className="bg-black invisible h-[150px] w-[80px] md:h-[175px] md:w-[100px] m-auto absolute top-[5%] left-[5%] md:top-[15%] md:left-[15%] opacity-[0.6] group-hover:visible flex flex-col gap-2 justify-center">
          <div className="flex flex-col justify-center text-center opacity-100">
            <FaEye className="text-white text-4xl m-auto" />
            <p>{movie_stats?.watches}</p>
          </div>
          <div className="flex flex-col justify-center text-center opacity-100">
            <FaHeart className="text-white text-4xl m-auto" />
            <p>{movie_stats?.likes}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
