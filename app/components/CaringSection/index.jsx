import React from 'react'
import { BsArrowRight } from 'react-icons/bs'
import Image from 'next/image'
// externals files
import img1 from "@/public/CaringSection/image 18.png"
import img2 from "@/public/CaringSection/image 19.png"
import img3 from "@/public/CaringSection/image 20.png"

const DataCard = [
    {
        id: 1,
        img: img1,
        description:"Creating Streamlined Safeguarding Processes with OneRen"
    },
    {
        id: 2,
        img: img2,
        description:"What are your safeguarding responsibilities and how can you manage them?"
    },
    {
        id: 3,
        img: img3,
        description:"Revamping the Membership Model with Triathlon Australia"
    },
]


function CaringSection() {
  return (
    <div className='container mx-auto space-y-9' >
        {/* Title section */}
      <div className=' space-y-3'>
        {/* title */}
        <h1 className='h1 text-center ' >Caring is the new marketing</h1>
        <p className='text-text_lambda max-w-[550px] text-center mx-auto' >The Nextcent blog is the best place to read about the latest membership insights, trends and more. See who's joining the community, read about how our community are increasing their membership income and lot's more. </p>
      </div>
      {/* card section */}
      <div className='grid gap-y-36 lg:grid-cols-3 grid-cols-1 md:grid-cols-2 place-items-center justify-items-center items-center gap-x-60  px-32 '>
        {
            DataCard.map((item)=>(
                <div
                    key={item.id}
                    className='w-80 h-52 relative '
                >
                    {/* Image Card */}
                    <div id="img" className='rounded-lg'>
                        <Image src={item.img} alt="" className='w-full h-full' />
                    </div>
                    {/* Description Card */}
                    <div id="box" className='absolute top-[80%] left-1/2 transform -translate-x-1/2 z-50 p-4  shadow-lg text-center bg-background flex flex-col items-center w-64  gap-3 rounded-lg '>
                        <p className='text-text_lambda font-semibold text-lg '>{item.description}</p>
                        <button className='flex gap-2 items-center font-semibold text-lg text-primary' >Readmore <BsArrowRight/></button> 
                    </div>
                    
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default CaringSection
