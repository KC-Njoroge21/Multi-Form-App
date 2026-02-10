import React, { use, useContext } from 'react'
import Header from './components/Header'
import UserForm from './components/UserForm'
import { GlobalContext } from './context/Context';

const App = () => {

  const {handleSubmit} = useContext(GlobalContext);

  return (
    <div>
      <Header />
      <UserForm />
    
    </div>
  )
}

export default App