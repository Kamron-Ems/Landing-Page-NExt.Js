import Image from 'next/image'
// Icon
import { BsInstagram } from 'react-icons/bs'
import { CgInstagram } from 'react-icons/cg'
import { CiInstagram } from 'react-icons/ci'
import { FaInstagram } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
// import { FaInstagramFaInstagram } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='bg-[#263238] py-12'>
      <div className='container mx-auto'>
        <div className='py-5 flex flex-wrap sm:flex-row bg-rejd-400 gap-10 lg:gap-56 justify-center ' >

        {/* About Entreprise  */}
        <div className='flex flex-col gap-8 pb-2 h-full ' >
            {/* Logo */}
            <div className='flex' > 
              {/* <Image 
                src="/Logo/Logo1.png" alt="" width={100} height={10}
                className='w-[100] h-[100]'
              />  */}
              <Image src="/Footer/Icon.png" alt='Icon' width={50} height={10} className='ws-[100px] sh-[10px] object-contain '/>
              <Image src="/Footer/Nexcent.png" alt='Icon' width={100} height={10} className='ws-[100px] sh-[10px] object-contain'/>
            </div>
            {/* About */}
            <div className='text-neutral-200 '>
              <h3>Copyright © 2020 Landify UI Kit.</h3>
              <h3>All rights reserved</h3>
            </div>
            {/* Icon */}
            <div className='flex  gap-4 text-white '>
              <div className='bg-zinc-600 w-10 h-10 rounded-full flex justify-center items-center ' >
                <BsInstagram className=" w-5 h-5 " />
              </div>
              <div className='bg-zinc-600 w-10 h-10 rounded-full flex justify-center items-center ' >
                <BsFacebook className=" w-5 h-5 " />
              </div>
              <div className='bg-zinc-600 w-10 h-10 rounded-full flex justify-center items-center '>
                <BsTwitter className=" w-5 h-5 "/>
              </div>
              <div className='bg-zinc-600 w-10 h-10 rounded-full flex justify-center items-center '>
                <BsYoutube className=" w-5 h-5 "/>
              </div>
            </div>
        </div>
        {/* Content page links */}
        <div className=' grid md:grid-col-2 lg:grid-flow-col gap-5 lg:gap-24 flex-wrap'>
          {/* Company */}
          <div className=' space-y-5 '>
            <h2 className='text-white font-semibold text-lg ' >Company</h2>
            <ul className=' text-neutral-200 space-y-3 ' >
              <li>About Us</li>
              <li>Blog</li>
              <li>Contact Us</li>
              <li>Pricing</li>
              <li>Testimonials</li>
            </ul>
          </div>
          {/* Support */}
          <div className=' space-y-5 '>
            <h2 className='text-white font-semibold text-lg' >Support</h2>
            <ul className='text-neutral-200 space-y-3 ' >
              <li>Help center</li>
              <li>Terms of service</li>
              <li>Legal</li>
              <li>Privacy policy</li>
              <li>Status</li>
            </ul>
          </div >
          {/* Stay up to date */}
          <div className=' space-y-5 '>
            <h2 className='text-white font-semibold text-lg ' >Stay up to date</h2>
            <div className='flex flex-row' >
              <input type="text" placeholder='Your Email address' 
                className='text-neutral-200 text-base rounded-lg bg-zinc-600 focus:border-none '
                />
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
