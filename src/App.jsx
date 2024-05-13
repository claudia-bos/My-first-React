// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

import React from 'react'
import './App.css'
import RedButton from './RedButton.jsx'
import Counter from './Counter.jsx'

function App() {
  const myName = 'Claudia'
  const sum = (n1, n2) => n1 + n2

  return (
    <>
    <h1>Hello React!</h1>
    <p>My name is {myName}</p>
    <p>3 + 5 = {sum(3, 5)}</p>
    <RedButton
     message={'I like buttons'}
    //  message2={"I don't like buttons"}
    />

     
    <Counter />
    
    </>
  )
    

}

export default App
