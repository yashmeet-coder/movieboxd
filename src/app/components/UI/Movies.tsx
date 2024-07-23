import React from 'react'

const Movies = ({movies}:{movies:{movie_id:string,user_id:string,poster_path:string}[]}) => {
  return (
    <div className='w-[950px] max-w-[900px] m-auto mt-6 flex gap-2 '>
      {
        movies?.map((movie)=>{
            return (
                <div key={movie.movie_id}>
                <img src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="movie" width={100} height={150}/>
                </div>
            )
        })
      }
    </div>
  )
}

export default Movies
