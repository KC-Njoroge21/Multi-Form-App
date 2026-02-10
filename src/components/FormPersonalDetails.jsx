import React, { useContext } from "react";
import Buttons from "./Buttons";
import { GlobalContext } from "../context/Context";


const FormPersonalDetails = () => {

  const { details, nextStep, prevStep, setDetails } = useContext(GlobalContext);

  return (
    <div
      className="border w-1/2 min-w-75  mx-auto h-95 flex flex-col justify-center p-2 gap-5 m-6"

    >
      <h1 className="text-lg text-center font-semibold">Fill in the Form</h1>

      <div className="flex flex-col gap-2">
        <label className="w-25 lg:text-lg text-nowrap" htmlFor="firstName">
          First Name:
        </label>
        <input
          className="p-2 w-full outline-0 border border-gray-200 rounded-md"
          type="text"
          name="firstName"
          id="firstName"
          value={details.firstName}
          onChange={(e) => setDetails((prevState) => ({ ...prevState, firstName: e.target.value }))}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className="text-lg text-nowrap" htmlFor="lastName">
          Last Name:
        </label>
        <input
          className="p-2 w-full outline-0 border border-gray-200 rounded-md"
          type="text"
          name="lastName"
          id="lastName"
          value={details.lastName}
          onChange={(e) => setDetails((prevState) => ({ ...prevState, lastName: e.target.value }))}
        />
      </div>

      <div className="flex flex-col gap-2">
        <label className=" text-lg" htmlFor="email">
          Email:
        </label>
        <input
          className="p-2 w-full outline-0 border border-gray-200 rounded-md"
          type="email"
          name="email"
          id="email"
          value={details.email}
          onChange={(e) => setDetails((prevState) => ({ ...prevState, email: e.target.value }))}
        />
      </div>

      <div className="">
        <Buttons />
      </div>
    </div>
  );
};

export default FormPersonalDetails;
