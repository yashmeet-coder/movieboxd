import Movies from '@/app/components/UI/Movies';
import { getMovies } from '@/app/supabase/helpers'
import React from 'react'

type Props = {
  params?: {
    num?: string;
  };
  searchParams?: {
    search?: string;
  };
};

const page = async({params}:{params:{[key:string]:string}}) => {
  const {liked_movies,watched_movies,watchlist} = await getMovies();
  var secondKey = Object.keys(params)[1]
  const active = params[secondKey] as string
  
  return (
    <div className='h-[calc(100vh-13rem)]'>
      {/* Likes page */}
      {/* {likedMovies &&} */}
      {active=="likes" && liked_movies && <Movies movies={liked_movies} />}
      {active=="watched" && watched_movies && <Movies movies={watched_movies} />}
      {active=="watchlist" && watchlist && <Movies movies={watchlist} />}
    </div>
  )
}

export default page
