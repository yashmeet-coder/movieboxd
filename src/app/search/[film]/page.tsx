import SearchResults from "@/app/components/SearchResults";
import React from "react";

const page = async ({
  params,
  searchParams,
}: {
  params: { [key: string]: string  };
  searchParams?: { [key: string]: string | string[] | undefined };
}) => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        `Bearer ${process.env.NEXT_TMDB_KEY}`,
    },
  };
  const {film} = params;
  const data = await fetch(
    `https://api.themoviedb.org/3/search/movie?query=${params['film']}`,options
  );
  const movie = await data.json();
//   console.log(movie);

  return <div>{movie && <SearchResults movies={movie.results} />}</div>;
};

export default page;
