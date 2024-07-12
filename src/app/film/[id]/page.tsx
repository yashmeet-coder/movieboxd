import MovieDetails from '@/app/components/MovieDetails';
import React from 'react'
import { ToastContainer } from 'react-toastify';

const Page = async({ params }: { params: { id: string } }) => {
    const res = await fetch("https://api.themoviedb.org/3/movie/"+params.id,{
        headers: {
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        },
        method: "GET"
    });
    const movie_data = await res.json();
    
    const res2 = await fetch("https://api.themoviedb.org/3/movie/"+params.id+"/credits",{
        headers: {
            "Authorization": `Bearer ${process.env.NEXT_PUBLIC_TMDB_API_KEY}`
        },
        method: "GET"
    });
    const credits_data = await res2.json();
  return (
    <div>
      <ToastContainer
          position="top-left"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      <MovieDetails movie={movie_data} credits={credits_data} />
    </div>
  )
}

export default Page
