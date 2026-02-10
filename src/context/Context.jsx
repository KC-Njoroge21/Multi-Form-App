import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {

  const [details, setDetails] = useState({
    step: 2,
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  });

  //Proceed to next step
 
  const nextStep = () => {
    setDetails((prevState) => {
    return { ...prevState, step: prevState.step + 1 }
    })
  }
  const prevStep = () => {
    setDetails((prevState) => {
    return { ...prevState, step: prevState.step - 1 }
    })
  }

  const handleSubmit = (e) => {
    // Process form submission logic here
    e.preventDefault();
    console.log("Form submitted with data:", state);
  }


  return (
    <GlobalContext.Provider value={{ details, nextStep, prevStep, handleSubmit }}>
      {children}
    </GlobalContext.Provider>
  )
}




