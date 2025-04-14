import React from 'react'
import Image from 'next/image'
import Icon from '@/public/Community/Vector.png'
import Icon1 from '@/public/Community/Vector1.png'
import Icon2 from '@/public/Community/Vector3.png'



const DataIcon = [
  {
    id:1,
    icon: Icon,
    title: "Membership Organisations",
    description: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    id:2,
    icon: Icon1,
    title: "National Associations",
    description: "Our membership management software provides full automation of membership renewals and payments",
  },
  {
    id:3,
    icon: Icon2,
    title: "Clubs And Groups",
    description: "Our membership management software provides full automation of membership renewals and payments",
  },
]

function Community() {
  return (
    <div className=' space-y-5 container mx-auto my-7' >
      {/* Title and Description Section */}
      <div className='max-w-[430px] mx-auto space-y-3'>
        {/* title */}
        <h1
        className=' h1  text-center'
        >Manage your entire community  in a single system</h1>
        {/* Description */}
        <p
          className='text-text_title text-xs md:text-base text-center '
        >Who is Nextcent suitable for? </p>
      </div>
      {/* items list section */}
      {/* <div className='mx-auto'> */}
      <div 
        className='grid md:grid-cols-3 gap-y-8  place-items-center '
      >
        {DataIcon.map((item)=>(
            <div 
              key={item.id}
              className=' relative md:h-56   md:max-w-72 flex shadow flex-col gap-2 justify-center px-6 py-4  '
            >
              <div className='space-y-3' >
                {/* Icon */}
                <div className='relative' >
                  <Image src={item.icon} alt='' 
                    width={30} 
                    height={30}  
                    className='h-10 w-10  object-contain mb-5 mx-auto'
                    />
                </div>
                  {/* <div className=' absolute hidden lg:block top-2 rounded-s-lg rounded-e rounded-l rounded-b-xl right-0 left-[47.5%] w-10 h-10 bg-[#E8F5E9]/50 ' >
                </div> */}
              {/* title item */}
              <h2 
                className='text-center font-bold  text-xl'>
                {item.title}
              </h2>
              </div>
              {/* description item */}
              <p
                className='text-center text-text_lambda text-sm w-full'
              >
                {item.description}
              </p>
            </div>
        ))}
        </div>

    {/* </div> */}
      </div>
  )
}

export default Community
