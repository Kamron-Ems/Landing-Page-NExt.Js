import React from 'react'
import Image from 'next/image'
// Icons
import { MdPayments } from "react-icons/md";
import { BsCalendarEventFill } from "react-icons/bs";
import { BsCalendar4Event } from "react-icons/bs";
import { LuHandshake } from "react-icons/lu";
import { TbUsers } from "react-icons/tb";
import { GiMeepleGroup } from "react-icons/gi";
import { LiaHandshake } from "react-icons/lia";

{/* <UsersRound /> */}
 const DataBanner= [
    {
        id:1,
        icon: <TbUsers/>,
        numebres: 2245341,
        text: "Members"
    },
    {
        id:2,
        icon: <LiaHandshake/>,
        numebres: 46328,
        text: "Clubs"
    },
    {
        id:3,
        icon: <BsCalendarEventFill/>,
        numebres: 828867,
        text: "Event Bookings"
    },
    // <BsCalendarEventFill />
    {
        id:4,
        icon: <MdPayments/>,
        numebres: 1926436,
        text: "Payments"
        // <CreditCard />
    },
 ]

function Banner() {
  return (
    <div className='bg-[#F5F7FA] py-11'>
      <div className='container mx-auto flex md:flex-row flex-col gap-7 justify-between sm:px-40 px-20 ' >
      {/* Left section */}
      <div className='space-y-[6px] md:w-96 max-w-96'>
        <h1 className='h1' >
            <span>Helping a local</span><br/>
            <span className='text-primary' >business reinvent itself</span>
        </h1>
        <p>
            We reached here with our hard work and dedication
        </p>
      </div>
      {/* Right section */}
      <div className='grid sm:grid-cols-2 gap-y-7 gap-x-10 place-items-start md:w-96 max-w-96 ' >
        {
          DataBanner.map((item)=>(
              <div 
                key={item.id}
                className='flex items-center w-fit gap-3 '
              >
              {/* icon */}
              <div className=' text-primary  text-[33px] ' >{item.icon}</div>
              {/* Information */}
              <div className='flex flex-col' >
                {/* number */}
                <span className='font-bold text-xl text-text_title ' >{item.numebres}</span>
                {/* title */}
                <span className='text-text_lambda text-sm' >{item.text}</span>
              </div>
              </div>
          ))
        }
      </div>
      {/* <TbUsers/><LiaHandshake/><GiMeepleGroup/> */}
    </div>
    </div>
  )
}

export default Banner
