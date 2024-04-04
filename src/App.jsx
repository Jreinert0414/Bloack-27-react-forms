import { useState } from 'react'
import SignUpFormn from './assets/SingUpForm'
import Authenticate from './assets/Authenticate'

function App() {
const [token, setToken]= useState("")





return (
    <>

   <SignUpFormn token={token} setToken={setToken}/>
   <Authenticate token={token} setToken={setToken}/>
    
    </>
  )
}

export default App
