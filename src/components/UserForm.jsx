import React, { useContext } from "react";
import Header from "./Header";
import FormUserDetails from "./FormUserDetails";
import FormPersonalDetails from "./FormPersonalDetails";
import { GlobalContext } from "../context/Context";
import Success from "./Success";
import Confirm from "./Confirm";

const UserForm = () => {
  const { details, nextStep, prevStep, handleSubmit, step } = useContext(GlobalContext);

  switch (step) {
    case 1:
      return (
      
          <FormPersonalDetails />
    
      );
    case 2:
      return (
        
          <FormUserDetails />
       
      );
    case 3:
      return (
       
          <Confirm />
        
      );
    case 4:
      return (
         <Success />
      )
       
      
  }
};

export default UserForm;
