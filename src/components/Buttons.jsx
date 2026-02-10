import React from 'react'
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";

const Buttons = () => {
  return (
    <div className='flex gap-8'>
      <button className='cursor-pointer'><IoArrowBackOutline size={30} /></button>
      <button className='cursor-pointer'><IoArrowForwardOutline size={30} /></button>
    </div>
  )
}

export default Buttons