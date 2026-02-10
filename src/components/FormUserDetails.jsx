import React from 'react'
import Buttons from './Buttons'

const FormUserDetails = () => {
  return (
    <form  className="border w-1/2 mx-auto h-95 flex flex-col justify-center items-center gap-5 m-6" action="">

<h1>Fill in the form</h1>

      <div className="flex items-center gap-4">
        <label className="w-25 text-lg"  htmlFor="occupation">Occupation:</label>
        <input className="p-2 w-75 outline-0 border border-gray-200 rounded-md" type="text" name="occupation" id="occupation" />
      </div>

      <div className="flex items-center gap-4">
        <label className="w-25 text-lg"  htmlFor="city">City:</label>
        <input className="p-2 w-75 outline-0 border border-gray-200 rounded-md" type="text" name="city" id="city" />
      </div>

      <div>
        <Buttons />
      </div>
    </form>
  )
}

export default FormUserDetails