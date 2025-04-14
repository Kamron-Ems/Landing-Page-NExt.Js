import React from 'react'
import Image from 'next/image'


function Informations({title,img,description}) {

  return (
    <div className=' container px-20 mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-0 justify-between'>
      {/* Left Section */}
      <div className=' h-96 max-w-[500px] '>
        <Image 
          src={img} alt="" height={301} width={307} 
          className='object-contain w-full h-full '
        />  
      </div>
      {/* Right Section */}
      <div
        className="space-y-[22px] max-w-[590px] "
      >
        <div className='space-y-[11px]'>
          {/* Title */}
          <h1 className='h1'>
            {title}
          </h1>
          {/* Description */}
          <p className='text-text_lambda texdt-sm '>
            {description}
          </p>
        </div>
          <button className='btn' >Learn More</button>
      </div>
    </div>
  )
}

export default Informations
