import React from 'react'
import { BsArrowRight } from 'react-icons/bs'

function ActionButton() {
  return (
    <div className='bg-background '>
      <div className='container mx-auto space-y-7 p-7 '>
        <h1 className='font-semibold text-6xl max-w-[618px] text-center mx-auto text-[#263238] ' >
          Pellentesque suscipit fringilla libero eu.
        </h1>
        <button className='btn mx-auto flex items-center justify-center gap-2 font-medium' >Get a Demo<BsArrowRight/></button>
      </div>
    </div>
  )
}

export default ActionButton
