import React from 'react'

const FormUserDetails = () => {
  return (
    <form action="">
      <div>
        <label htmlFor="occupation">Occupation:</label>
        <input type="text" name="occupation" id="occupation" />
      </div>

      <div>
        <label htmlFor="city">City:</label>
        <input type="text" name="city" id="city" />
      </div>
    </form>
  )
}

export default FormUserDetails