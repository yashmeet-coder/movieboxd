"use client"
import React from "react";
import { Movie } from "../MovieDetails";
import Image from "next/image";
import { useRouter } from "next/navigation";

const MovieSearchCard = ({ movie }: { movie: Movie }) => {
  const router = useRouter();
  return (
    <div className="flex gap-4 my-8 py-2 border-b-2 cursor-pointer border-[#9ab]" onClick={()=>router.push(`/film/${movie.id}`)}>
      <div className="">
        <Image
          src={`http://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
          alt="Image is not yet available"
          width={175}
          height={200}
          className="rounded-md hover:border-2 hover:border-green-500 max-w-[80px] md:max-w-[160px]"
        />
        {/* <img src={`http://image.tmdb.org/t/p/w500/${movie?.poster_path}`} alt="movie" width={200} height={250} className="rounded-md hover:border-2 hover:border-green-500 max-w-[200px]" /> */}
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex gap-4 items-center">
          <h1 className=" font-Tiempos text-[1.3rem] md:text-[1.69230769rem]">{movie?.original_title}</h1>
          <p className="font-GraphikLight text-[1rem] md:text-[1.39230769rem]">{movie?.release_date.slice(0, 4)}</p>
        </div>
        <div className="line-clamp-2 font-GraphikRegular text-[1rem] text-[#9ab]">{movie?.overview}</div>
      </div>
    </div>
  );
};

export default MovieSearchCard;
