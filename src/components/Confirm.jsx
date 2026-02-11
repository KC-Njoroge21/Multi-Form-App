import React, { useContext } from 'react'
import { GlobalContext } from '../context/Context';

const Confirm = () => {

  const { details, step, setStep, prevStep, nextStep } = useContext(GlobalContext);

  return (
    <div className="shadow-lg rounded-lg border border-gray-200 w-1/2 min-w-70  mx-auto h-95 flex flex-col  p-2 gap-5 m-6">
      <h1 className="text-lg text-center font-semibold">Confirm Details</h1>
      <p className="text-center">Please confirm the details you've entered are correct.</p>

      <div className='shadow flex flex-col gap-2 p-4 rounded-md border border-amber-200' >
        <p className="text"><span className="font-semibold">First Name: <span className='text-gray-400'>{details.firstName}</span></span> </p>
        <p className="text"><span className="font-semibold">Last Name: <span className='text-gray-400'>{details.lastName}</span></span> </p>
        <p className="text"><span className="font-semibold">Email: <span className='text-gray-400'>{details.email}</span></span> </p>
        <p className="text"><span className="font-semibold">Occupation: <span className='text-gray-400'>{details.occupation}</span></span> </p>
        <p className="text"><span className="font-semibold">City: <span className='text-gray-400'>{details.city}</span></span> </p>
      </div>

     <div className='flex gap-4 '>
      <button onClick={prevStep} className="bg-gray-500 hover:bg-gray-700 text-white py-2 px-4 rounded text-center text-lg font-semibold w-full">
        Back
      </button>
       <button onClick={nextStep} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-full text-center text-lg font-semibold">
        Submit
      </button>
     </div>
    </div>
  
  )
}

export default Confirm