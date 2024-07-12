"use client"
import React from 'react'
import MovieCard from './UI/MovieCard'
import { useState,useEffect } from 'react'
import { getMovieStats, getUser } from '../supabase/helpers'

interface stat {'likes':Number,"watches":Number}

interface movieStats {[key:string] : stat}

const HeroSection = ({movies}:{movies:any}) => {
    const [profile, setProfile] = useState<any>({});
    const [moviestats,setStats] = useState<any>({});
    var stats:movieStats = {};
    useEffect(()=>{
      // console.log(movies);
      
      async function fetchData(){
        const user = await getUser();
        console.log(user);
        setProfile(user)
      }

      async function getStats(){
        const {liked_data,watched_data} = await getMovieStats(profile?.session?.user?.id);
        // console.log(liked_data,watched_data);
        movies?.forEach((movie:any)=>{
          // console.log(liked_data?.find(e => e.movie_id == movies[0].id as string),movies[0].id);
          
          const likes = liked_data?.find(e => e.movie_id == movie.id as string)?.count || 0;
          const watches = watched_data?.find(e => e.movie_id == movie.id as string)?.count || 0;
          stats[movie.id] = {'likes':likes,'watches':watches}
        
      })
      console.log(stats);
      setStats(stats)
      
      
    }
    
    fetchData()
    getStats();
    },[])
  return (
    <div className='mt-16 grid grid-cols-3 grid-rows-2 md:grid-cols-6 md:grid-rows-1 gap-y-4 max-w-[950px] place-items-center m-auto'>
      {
        movies.map((movie:any)=>{
            return Object.keys(moviestats).length!==0 && <MovieCard movie={movie} key={movie.id} movie_stats={moviestats[movie.id]}/> 
        })
      }
    </div>
  )
}

export default HeroSection
