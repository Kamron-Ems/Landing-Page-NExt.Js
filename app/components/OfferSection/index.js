import React from 'react'
import Image from 'next/image'
import Logo1 from '@/public/OfferSection/Logo1.png'
import Logo2 from '@/public/OfferSection/Logo2.png'
import Logo3 from '@/public/OfferSection/Logo3.png'
import Logo4 from '@/public/OfferSection/Logo4.png'
import Logo5 from '@/public/OfferSection/Logo5.png'
import Logo6 from '@/public/OfferSection/Logo6.png'


const DataIcon = [
  {
    id:1,
    icon: Logo1,
  },
  {
    id:2,
    icon: Logo2,
  },
  {
    id:3,
    icon: Logo3,
  },
  {
    id:4,
    icon: Logo4,
  },
  {
    id:5,
    icon: Logo5,
  },
  {
    id:6,
    icon: Logo6,
  },
  {
    id:7,
    icon: Logo3,
  },
]

function OfferSection() {
  return (
    <div className=' space-y-5 container mx-auto my-7' >
      {/* Title and Description Section */}
      <div>
        {/* title */}
        <h1
        className=' h1 text-center '
        >Our Clients</h1>
        {/* Description */}
        <p
          className='text-text_title text-xs md:text-base text-center '
        >We have been working with some Fortune 500+ clients</p>
      </div>
      {/* Icon section */}
      <div 
        className='grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-y-6 place-items-center items-center pyh-8 justify-between '
      >
        {DataIcon.map((item)=>(
          <div 
            key={item.id}
            className=' flex justify-center relative h-10 w-10 '
          >
          <Image src={item.icon} alt='' 
            // width={30} 
            // height={30} 
            fill
            className='object-contain mb-5 '
          />
          </div>
        ))}
      </div>
    </div>
  )
}

export default OfferSection
