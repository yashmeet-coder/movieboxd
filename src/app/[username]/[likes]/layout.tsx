import Header from '@/app/components/Header'
import React from 'react'
import content from '../../assets/content.png'
import Image from 'next/image'

const layout = ({children}:{children:React.ReactNode}) => {
  const imageUrl = content
  return (
    <div>
      {/* <Image src={content} alt='content' width={200} height={200}/> */}
      {/* <h1>Layout</h1> */}
      <Header />
      {children}
    </div>
  )
}

export default layout
