import React from 'react'
import Image from 'next/image'


function Informations({title,img,description}) {

  return (
    <div className=' container px-20 mx-auto w-full flex flex-col md:flex-row items-center  gap-10 md:gap-0 justify-between bg-clip-border text-gray-700'>
      {/* Left Section */}
      <div className=' relative bg-clip-border h-96 md:w-2/5 w-[90%] shrink-0  '>
        <Image 
          src={img} alt="" 
          fill
          className='object-contain '
        />  
      </div>
      {/* Right Section */}
      <div
        className="space-y-[22px] max-w-[590px] "
      >
        <div className='space-y-3'>
          {/* Title */}
          <h1 className='h1 text-center '>
            {title}
          </h1>
          {/* Description */}
          <p className='text-gray-700 text-base leading-relaxed font-sans antialiased '>
            {description}
          </p>
        </div>
          <button type="button" className='btn animate_btn' >Learn More</button>
      </div>
    </div>
  )
}

export default Informations
