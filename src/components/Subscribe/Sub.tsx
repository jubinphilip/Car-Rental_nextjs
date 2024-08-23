import './sub.css'
import React, { useState } from 'react'

function Subscribe() {
    
  
    const [error,setError]=useState<string>("")
    const [record,setRecord]=useState({username:"" ,useremail:""})
    const [number,setNumber]=useState<number>()
    function handleChange(e:React.ChangeEvent<HTMLInputElement>)
    {
        e.preventDefault()
        setRecord((prev)=>({...prev,[e.target.name]:e.target.value}))
        console.log(record)
    }
    function formValidate()
    {
        console.log(record.username)
        const usernameRegex = /^[A-Za-z\s]+$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
        if (!usernameRegex.test(record.username) || record.username.trim() === '') {
            setError('Username should only contain letters and spaces and not empty.')
        }
        else if (!emailRegex.test(record.useremail) || record.useremail.trim()==='' ) 
        {
            setError('Invalid email address.')
        }
        console.log(record.useremail)
    }
  return (
    <div>
        
<section className="subscribe">
    <div className="sub-part1">
        <h4 className="sub">
            Subscribe here for exclusive offers and updates!
        </h4>
        <form className="subform" id="subForm">
            <input type="text" id="username" name='username' placeholder="Name" onChange={handleChange}  />
            <input type="email" id="usermail" name='useremail' placeholder="Email" onChange={handleChange} /><br/>
            <span id="emailSpan" >{error?error:null}</span><br/>
            <span>Dont miss out! enter your email and your name, then hit subscribe to unlock a world of special offers and details</span><br/>
            <button onClick={formValidate}>Subscribe</button>
        </form>
    </div>
    <div className="sub-part2">
        <img src="assets/phone.svg" alt="" className="phone-img"/>
        <div className="app-link">
            <span>Enter your number and receive 
                a direct link to download the app<br/></span>
                <input type="text" id="usernum" placeholder="Enter Phone Number" required/>
                <span id="numSpan" ></span>
                <button >Get the Link</button>
                <div className="dwnld-app">
                    <span>Get it on</span><br/>
                    <a href="https://apps.apple.com/"><img src="assets/app2.svg" alt=""/></a>
                    <a href="https://play.google.com/store"><img src="assets/play2.svg" alt=""/></a>
                </div>
        </div>

    </div>
    </section>
    </div>
   
   
  )
}

export default Subscribe
