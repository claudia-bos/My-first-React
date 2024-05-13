import { useState } from "react"

// i can also do istead of props just ({message, message2})
function RedButton(props) { 

    //  this is a different exercise inside
    let myFavColor = 'Blue'
    const changeMyFavColor = () => {
        console.log(myFavColor)
        myFavColor = 'Red'
        console.log(myFavColor);
   }
       //using useState

       //look example in discord

    const alertFunction = () => {
        alert('you clicked me')
    }

  return (
    //and then here i will just take away the props. and leave message
    <>
    <button onClick={alertFunction}>{props.message}</button>
    {/* <button>{props.message2}</button> */}

    <h4>My fvorite color is:{myFavColor}</h4>
    </>
  )
}

export default RedButton
