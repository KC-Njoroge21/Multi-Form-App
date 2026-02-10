import React from "react";
import Buttons from "./Buttons";


const FormPersonalDetails = () => {
  return (
    <form
      className="border w-1/2 mx-auto h-95 flex flex-col justify-center items-center gap-5 m-6"
      action=""
    >
      <h1>Fill in the Form</h1>

      <div className="flex items-center gap-4">
        <label className="w-25 text-lg" htmlFor="firstName">
          First Name:
        </label>
        <input
          className="p-2 w-75 outline-0 border border-gray-200 rounded-md"
          type="text"
          name="firstName"
          id="firstName"
        />
      </div>

      <div className="flex items-center gap-4">
        <label className="w-25 text-lg" htmlFor="lastName">
          Last Name:
        </label>
        <input
          className="p-2 w-75 outline-0 border border-gray-200 rounded-md"
          type="text"
          name="lastName"
          id="lastName"
        />
      </div>

      <div className="flex items-center gap-4">
        <label className="w-25 text-lg" htmlFor="email">
          Email:
        </label>
        <input
          className="p-2 w-75 outline-0 border border-gray-200 rounded-md"
          type="email"
          name="email"
          id="email"
        />
      </div>

      <div>
        <Buttons />
      </div>
    </form>
  );
};

export default FormPersonalDetails;
