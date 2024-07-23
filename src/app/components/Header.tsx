"use client"
import Link from 'next/link';
import { useParams, useSearchParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const Header = () => {
    const params = useParams();
    // console.log(params);
    const [active,setActive] = useState<string>('')
    // const url = window.location.pathname.split('/')[1]
    useEffect(()=>{
        var secondKey = Object.keys(params)[1]
        // console.log(secondKey);
        // console.log(url);
        
        setActive(params[secondKey] as string)
    },[])
    
  return (
    <div className='w-[950px] bg-[#2c3440] m-auto flex justify-between mt-28 items-center px-8'>
      <div>
        <h2 className="font-Tiempos text-[1rem]">{params.username}</h2>
      </div>
      <div>
        <ul className='flex gap-8'>
        <Link href={`/${params.username}/likes`}>
            <li className={`${active=="likes" ? "text-green-500 border-b-2 py-4 border-green-500" : "py-4"}`}>Likes</li>
            </Link>
            <Link href={`/${params.username}/watchlist`}>
            <li className={`${active=="watchlist" ? "text-green-500 border-b-2 py-4 border-green-500" : "py-4"}`}>Watchlist</li>
            </Link>
            <Link href={`/${params.username}/watched`}>
            <li className={`${active=="watched" ? "text-green-500 border-b-2 py-4 border-green-500" : "py-4"}`}>Watched</li>
            </Link>
        </ul>
      </div>
    </div>
  )
}

export default Header
