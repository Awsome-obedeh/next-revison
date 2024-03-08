"use client"
import Form from '@/components/Form'
import React, { useState } from 'react'

export default function About() {
    // create a use state value
    // how to create  a use state value
    const [show,setShow]=useState(false)
    

    // a function that will change the state of "show" to true
    // function handleShow(){
    //     setShow(true)
    // }
    // the toggle method(Ideal way)
    function handleShow(){

        setShow(prevShow=>!prevShow)
    }
  return (
    <div>
        {/* condition rendering  */}
      { show && <p>click to see me </p>}

      {/* using tenary  */}
      {/* {
        show ? <p>click to see me </p> : " "
      } */}
        <button onClick={handleShow}> {show ? 'hide' : "show"} </button>
        {/* <button onClick={handleHide}>hide </button> */}

      <Form/>
    </div>
  )
}
