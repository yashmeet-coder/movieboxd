"use client"
import React from 'react'
import { Movie } from './MovieDetails'
import MovieSearchCard from './UI/MovieSearchCard'

const SearchResults = ({movies}:{movies:Movie[]}) => {
  console.log(movies);
  return (
    <div className='mt-20 pt-10 w-[80%] lg:w-[950px] mx-auto'>
      <p className='font-GraphikLight text-[#9ab] text-[1rem] tracking-widest mb-2 uppercase'>Search Results</p>
      <hr></hr>
        {
            movies?.map((movie) => (
                <div key={movie.id}>
                    <MovieSearchCard movie={movie}></MovieSearchCard>
                </div>
            ))
        }
    </div>
  )
}

export default SearchResults
