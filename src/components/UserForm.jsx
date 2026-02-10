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
        <form action="">
          <FormPersonalDetails />
        </form>
      );
    case 2:
      return (
        <form action="">
          <FormUserDetails />
        </form>
      );
    case 3:
      return (
        <form action="">
          <Confirm />
        </form>
      );
    case 4:
      return <form action="">
        <Success />
      </form>;
  }
};

export default UserForm;
