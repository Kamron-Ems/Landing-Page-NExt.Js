import React from 'react'
// biblioteque interne
import Image from 'next/image'
// external files
import image from "@/public/SecondBanner/image 9.png"
import Logo from "@/public/SecondBanner/Vector7.png"
import Logo2 from "@/public/OfferSection/Logo2.png"
import Logo3 from "@/public/OfferSection/Logo3.png"
import Logo4 from "@/public/OfferSection/Logo4.png"
import Logo5 from "@/public/OfferSection/Logo5.png"
import Logo6 from "@/public/OfferSection/Logo6.png"
// Icon
import { BsArrowRight, BsMenuButtonFill } from 'react-icons/bs'

const DataIcons =[
  {
    id: 1,
    icon: Logo
  },
  {
    id: 2,
    icon: Logo2,
  },
  {
    id: 3,
    icon: Logo3,
  },
  {
    id: 4,
    icon: Logo4,
  },
  {
    id: 5,
    icon: Logo5,
  },
  {
    id: 6,
    icon: Logo6,
  },
]

function SecondBanner() {
  return (
    <div className=' container px-10 mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-0 justify-between'>
      {/* Left Section */}
      <div className=' h-96 max-w-[500px] '>
        <Image 
          src={image} alt="" height={301} width={307} 
          className='object-contain w-full h-full '
        />  
      </div>
      {/* Right Section */}
      <div
        className="space-y-[22px] max-w-[690px] "
      >
        <div className='space-y-[11px]'>
          {/* Description */}
          <p className='text-text_lambda '>
          Maecenas dignissim justo eget nulla rutrum molestie. Maecenas lobortis sem dui, vel rutrum risus tincidunt ullamcorper. Proin eu enim metus. Vivamus sed libero ornare, tristique quam in, gravida enim. Nullam ut molestie arcu, at hendrerit elit. Morbi laoreet elit at ligula molestie, nec molestie mi blandit. Suspendisse cursus tellus sed augue ultrices, quis tristique nulla sodales. Suspendisse eget lorem eu turpis vestibulum pretium. Suspendisse potenti. Quisque malesuada enim sapien, vitae placerat ante feugiat eget. Quisque vulputate odio neque, eget efficitur libero condimentum id. Curabitur id nibh id sem dignissim finibus ac sit amet magna.
          </p>
          {/* Title */}
          <div className='space-y-[6px]' >
            <h1 className=' font-semibold text-primary text-lg '>
              Tim Smith
            </h1>
            <h3 className='text-text_lambda' >British Dragon Boat Racing Association</h3>
          </div>
        </div>
        {/* List Icon */}
          <div className='flex gap-10 items-center  ' >
            {
              DataIcons.map((item)=>(
                <div
                  key={item.id}
                >
                  <Image src={item.icon} alt=''  />
                </div>
              ))
            }
            <button className='flex gap-2 items-center font-semibold text-lg text-primary' >Meet all customers <BsArrowRight/></button>
          </div>
      </div>
    </div>
  )
}

export default SecondBanner
