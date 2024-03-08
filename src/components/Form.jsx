import React, { useState } from 'react'
import './form.css'

export default function Form() {
    // state to hold the values of our input values
    const [firstName, setFirstName]=useState("")
    const [lastName, setLastName]=useState('')
    const [age, setAge]=useState('')
    const [phone, setPhone]=useState('')
    const [FirstnameErr, setFirstnameErr]=useState(false)
    const [lastnameErr, setlastnameErr]=useState("")
    const [ageErr, setAgeErr]=useState("")
    const [phoneErr, setPhoneErr]=useState("")

console.log(FirstnameErr)
    // a function 
    function formHandler(e){
        // prevent the default submit of the form
        e.preventDefault()
        if(!firstName){
            setFirstnameErr(prev=>!prev)
            console.log(FirstnameErr)
        }
        else if(!lastName){
            setlastnameErr("input lastname")
        }
        else if(!age){
            setAgeErr("input age")
        }
        else if(!phone){
            setPhoneErr("input phone")
        }
       
    }

  return (
    <div className='container'>
        {/* call the fomrHandler function when the form is submitted */}
        <form action="" onSubmit={formHandler}>
            <div className="form-group">
                <label htmlFor="firstname"> firstname</label>
                {/* set firstName state to the vlaue of the input */}
                <input type="text" className="form-control" id="firstname" onChange={(e)=>{setFirstName(e.target.value)}}/>
                {/* show error message */}
                {FirstnameErr ? <label className='err'>input firstname</label> :""}
                   <p>{FirstnameErr}</p>
                
            </div>
            <div className="form-group">
                <label htmlFor="lastname"> lastname</label>
                <input type="text" className="form-control" id="lastname" onChange={(e)=>setLastName(e.target.value)}/>
                {/* show error message */}
                {lastnameErr && <label className='err'>{lastnameErr}</label>}
                   
                
            </div>
            <div className="form-group">
                <label htmlFor=""> age</label>
                <input type="text" className="form-control" onChange={(e)=>setAge(e.target.value)}/>
                {/* show error message */}
                {ageErr && <label className='err'>{ageErr}</label>}
                   
                
            </div>
            <div className="form-group">
                <label htmlFor=""> phone</label>
                <input type="text" className="form-control" onChange={(e)=>setPhone(e.target.value)}/>
                  {/* show error message */}
                {phoneErr && <label className='err'>{phoneErr}</label>}
                   
                
            </div>

            <button>Submit</button>

        
                <p>firstname</p>:{firstName}
                <p>lastname</p>:{lastName}
                <p>age</p>:{age}
                <p>phone</p>:{phone}
            
        </form>
    </div>
  )
}
