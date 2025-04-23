import React from 'react'
import Image from 'next/image'
import { BsArrowRight } from 'react-icons/bs'

export default function Card({img,title, description}) {
  return (
      <div className="container mx-auto overflow-hidden ">
    <div className="flex  items-center justify-center">
  <div className="relative flex w-full md:flex-row flex-col justify-center bg-white bg-clip-border text-gray-700 shadow-md">
    <div className="relative h-96 md:w-2/5 w-[90%] shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-bodrder">
    <Image 
      src={img} alt="" 
      fill
      className='object-contain'
    />
    </div>

    {/* Right Section */}
    
    <div className="p-6 max-w-[600px] ">
      {/* Title */}
      <h4 className="mb-2 text-center  h1 ">
        {title}
      </h4>
      {/* Description */}
      <p className="mb-3 font-sans w-full text-base font-normal leading-relaxed text-gray-700 antialiased">
        {description}
      </p>
        <button
          className="btn janimate_btn "
          type="button"
        >
          Learn More          
        </button>

    </div>
  </div>
</div>
    </div>
  )
}
