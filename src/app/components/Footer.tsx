import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Footer = () => {
    const links = ["about","news","contact","careers","support","privacy","terms"]
  return (
    <div className='bg-[#2c3440] py-8 mt-16 px-6'>
     <div className='flex justify-between max-w-[950px] m-auto'>
        <ul className='flex gap-4 flex-wrap'>
            {
                links.map((link)=>{
                    return <li className='text-[1.05384615rem] capitalize text-[#9ab] cursor-pointer font-Graphik hover:text-white' key={link}>{link}</li>
                })
            }
        </ul>
        <FaGithub className='h-10 w-20' />
     </div>
     <p className='max-w-[950px] m-auto mt-4'>© Yashmeet Singh. Film data from TMDb. Inspired by Letterboxd.</p>
    </div>
  )
}

export default Footer
