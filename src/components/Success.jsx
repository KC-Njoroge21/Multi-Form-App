import React, { useContext } from 'react'
import { GlobalContext } from '../context/Context';

const Success = () => {

  const { setStep } = useContext(GlobalContext);

  return (
    <div className='flex  flex-col p-8 h-screen items-center gap-4'>
      <h1 className='text-lg text-center font-semibold'>Success</h1>
      <p className='text-center'>Your form has been submitted successfully</p>

      <button onClick={() => setStep(1)} className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded w-[40%] min-w-50 text-center text-lg font-semibold">
        Go Back to Home
      </button>
    </div>
  )
}

export default Success