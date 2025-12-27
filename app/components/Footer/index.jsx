"use client"
import Image from 'next/image'
import { motion } from 'framer-motion'
import { SlideUp } from '../../utility/animation'
// Icon
import { BsInstagram } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsYoutube } from 'react-icons/bs'
// import { FaInstagramFaInstagram } from 'react-icons/fa6'

function Footer() {
  return (
    <div className='bg-[#263238] py-12 antialiased w-full overflow-x-hidden'>
      <div className='container mx-auto'>
        <div className='py-5 flex flex-wrap sm:flex-row bg-rejd-400 gap-10 lg:gap-10 justify-between mx-5 md:ml-0 lg:px-28 ' >

        {/* About Entreprise  */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{type:"spring", stiffness: 100, delay: 0.2 }}
          className='flex flex-col gap-8 pb-2 h-full ' 
        >
            {/* Logo */}
            <div className='flex place-items-center gap-1 cursor-pointer' > 
              <div className='relative w-9 h-9'>
                <Image 
                  src="/Footer/Icon.png" 
                  priority 
                  fill
                  alt='Icon' 
                  // width={50} 
                  // height={10} 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className=' object-contain '
                  />
                </div>
                <div className='relative  w-20 h-16'>
                  <Image 
                    src="/Footer/Nexcent.png" 
                    priority 
                    fill
                    alt='Icon' 
                    // width={100} 
                    // height={10} 
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className='object-contain'
                  />
                </div>
            </div>
            {/* About */}
            <div className='text-neutral-200 '>
              <h3>Copyright © 2020 Landify UI Kit.</h3>
              <h3>All rights reserved</h3>
            </div>
            {/* Icon */}
            <div className='flex  gap-4 text-white '>
              <div className='bg-zinc-600 w-10 h-10 rounded-full flex justify-center items-center animate_btn cursor-pointer ' >
                <BsInstagram className=" w-5 h-5 " />
              </div>
              <div className='bg-zinc-600 w-10 h-10 rounded-full flex justify-center items-center animate_btn cursor-pointer ' >
                <BsFacebook className=" w-5 h-5 " />
              </div>
              <div className='bg-zinc-600 w-10 h-10 rounded-full flex justify-center items-center animate_btn cursor-pointer '>
                <BsTwitter className=" w-5 h-5 "/>
              </div>
              <div className='bg-zinc-600 w-10 h-10 rounded-full flex justify-center items-center animate_btn cursor-pointer '>
                <BsYoutube className=" w-5 h-5 "/>
              </div>
            </div>
        </motion.div>
        {/* Content page links */}
        <motion.div 
          variants={SlideUp(0.6)}
          initial = "hidden"
          whileInView={"visible"}
          viewport={{ once: true }}
          className=' grid grid-cols-2 gap-24 '
        >
          {/* Company */}
          <div className=' space-y-5 '>
            <h2 className='text-white font-semibold text-lg ' >Company</h2>
            <ul className=' text-neutral-200 space-y-3 ' >
              <li className='cursor-pointer'>About Us</li>
              <li className='cursor-pointer'>Blog</li>
              <li className='cursor-pointer'>Contact Us</li>
              <li className='cursor-pointer'>Pricing</li>
              <li className='cursor-pointer'>Testimonials</li>
            </ul>
          </div>
          {/* Support */}
          <div className=' space-y-5 '>
            <h2 className='text-white font-semibold text-lg cursor-pointer' >Support</h2>
            <ul className='text-neutral-200 space-y-3 ' >
              <li className='cursor-pointer'>Help center</li>
              <li className='cursor-pointer'>Terms of service</li>
              <li className='cursor-pointer'>Legal</li>
              <li className='cursor-pointer'>Privacy policy</li>
              <li className='cursor-pointer'>Status</li>
            </ul>
          </div >
        </motion.div>
          {/* Stay up to date */}
          <motion.div 
            variants={SlideUp(0.9)}
            initial = "hidden"
            whileInView={"visible"}
            viewport={{ once: true }}
            className=' space-y-5 '
          >
            <h2 className='text-white font-semibold text-lg cursor-pointer ' >Stay up to date</h2>
            <div className='flex flex-row' >
              <input type="text" placeholder='Your Email address' 
                className='text-neutral-200 text-base rounded-lg bg-zinc-600 focus:border-none '
                />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Footer
