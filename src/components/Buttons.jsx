import React, { useContext } from 'react'
import { IoArrowBackOutline } from "react-icons/io5";
import { IoArrowForwardOutline } from "react-icons/io5";
import { GlobalContext } from '../context/Context';

const Buttons = () => {

  const { nextStep, prevStep } = useContext(GlobalContext);

  return (
    <div className='flex gap-8 justify-center' >
      <button className='cursor-pointer' onClick={prevStep}><IoArrowBackOutline size={30} /></button>
      <button className='cursor-pointer' onClick={nextStep}><IoArrowForwardOutline size={30} /></button>
    </div>
  )
}

export default Buttons