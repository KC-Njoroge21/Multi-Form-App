import { createContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {

  const [step, setStep] = useState(1);

  const [details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    occupation: "",
    city: "",
    bio: ""
  });

  //Proceed to next step
 
  const nextStep = () => {
    setStep((prevState) => {
    return prevState + 1;
    })
  }
  const prevStep = () => {
    setStep((prevState) => {
    return prevState - 1;
    })
  }


  const handleSubmit = () => {
    e.preventDefault();
    console.log(details);
  }
  


  return (
    <GlobalContext.Provider value={{ details, nextStep, prevStep, step, setDetails, setStep, handleSubmit }}>
      {children}
    </GlobalContext.Provider>
  )
}




