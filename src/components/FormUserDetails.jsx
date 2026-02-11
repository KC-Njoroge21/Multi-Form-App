import React, { useContext } from 'react'
import Buttons from './Buttons'
import { GlobalContext } from '../context/Context';

const FormUserDetails = () => {

  const { details, nextStep, prevStep, handleSubmit, step, setDetails } = useContext(GlobalContext);

  console.log(details);

  return (
    <div  className="shadow-lg rounded-lg border border-gray-200 w-1/2 min-w-75  mx-auto h-95 flex flex-col justify-center p-2 gap-5 m-6" >

<h1 className="text-lg text-center font-semibold">Fill in the form</h1>

      <div className="flex flex-col gap-2">
        <label className="w-25 text-lg"  htmlFor="occupation">Occupation:</label>
        <input className="p-2 w-full outline-0 border border-gray-200 rounded-md" type="text" name="occupation" id="occupation" value={details.occupation} onChange={(e) => setDetails(prevState => ({ ...prevState, occupation: e.target.value }))} />
      </div>

      <div className="flex  flex-col gap-2">
        <label className="w-25 text-lg"  htmlFor="city">City:</label>
        <input className="p-2 w-full outline-0 border border-gray-200 rounded-md" type="text" name="city" id="city" value={details.city} onChange={(e) => setDetails(prevState => ({ ...prevState, city: e.target.value }))} />
      </div>

      <div>
        <Buttons />
      </div>
    </div>
  )
}

export default FormUserDetails