import React from 'react'
import { FaCalendar } from 'react-icons/fa'
import { IoMdList } from 'react-icons/io'
import { IoEye, IoHeart, IoMenu, IoStar } from 'react-icons/io5'

const FunctionCard = () => {
  return (
    <div className='md:max-w-[950px] max-w-[330px] m-auto mt-[4rem]'>
      <h1 className='text-[1rem] font-GraphikRegular mt-[20px] mb-[10px] uppercase text-[#9ab] tracking-widest'>Letterboxd lets you...</h1>
      <div className='grid md:grid-rows-2 md:grid-cols-3 gap-x-[5rem] gap-y-2'>
        <div className="w-[330px] p-4 text-white bg-[#456] flex gap-2 rounded-md cursor-pointer hover:bg-green-500 font-GraphikRegular">
          <IoEye className='h-10 w-[9.5rem] max-w-[3.5rem]'/>
          <p>Keep track of every film you’ve ever watched (or just start from the day you join)</p>
        </div>
        <div className="w-[330px] p-4 text-white bg-[#456] flex gap-2 rounded-md cursor-pointer hover:bg-orange-400 font-GraphikRegular">
          <IoHeart className='h-10 w-[9.5rem] max-w-[3.5rem]'/>
          <p>Show some love for your favorite films, lists and reviews with a “like”</p>
        </div>
        <div className="w-[330px] p-4 text-white bg-[#456] flex gap-2 rounded-md cursor-pointer hover:bg-blue-300 font-GraphikRegular">
          <IoMenu className='h-10 w-[9.5rem] max-w-[3.5rem]'/>
          <p>Write and share reviews, and follow friends and other members to read theirs</p>
        </div>
        <div className="w-[330px] p-4 text-white bg-[#456] flex gap-2 rounded-md cursor-pointer hover:bg-green-500 font-GraphikRegular">
          <IoStar className='h-10 w-[9.5rem] max-w-[3.5rem]'/>
          <p className='w-[200px]'>Rate each film on a scale of 1-5</p>
        </div>
        <div className="w-[330px] p-4 text-white bg-[#456] flex gap-2 rounded-md cursor-pointer hover:bg-orange-400 font-GraphikRegular">
          <FaCalendar className='h-10 w-[9.5rem] max-w-[3.5rem]'/>
          <p>Log the films you’ve watched, when you watched them, and how you felt about them</p>
        </div>
        <div className="w-[330px] p-4 text-white bg-[#456] flex gap-2 rounded-md cursor-pointer hover:bg-blue-300 font-GraphikRegular">
          <IoMdList className='h-10 w-[9.5rem] max-w-[3.5rem]'/>
          <p>Curate lists of films you love, hate, or want to watch</p>
        </div>
      </div>
    </div>
  )
}

export default FunctionCard
