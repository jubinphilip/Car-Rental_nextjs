import React, { useState } from 'react'
import './header.css'
import Image from 'next/image'
function Header() {
    const[type,setType]=useState<string>("pick")
    function handleLoc(value:string)
    {
        setType(value)
    }
  return (
    <div>
      <div className="header">
    <div className="main-header">
        <div className="header-nav">
            <ul>
                <li onClick={()=>handleLoc("pick")}>Same as Pick-Up</li>
                <li onClick={()=>handleLoc("drop")}>Diffrent Drop-Off</li>
                <li><select className="vehicle-select" name="" id="">
                    <option value="car">Select Vehicle Type</option> 
                <option value="car">Car</option>
                <option value="Bike">Bike</option>
                </select>
                </li>
            </ul>
        </div>
        { type==="pick" &&<div className="main-input-container">
            <div className="header-inputs">
                <div className='viewPlace' >
                    <img src="assets/loc.svg" alt=""/>
                <select className="header-input" name="place" id="">
                    
                    <option value="AL Quoz">Al Quoz</option>
                    <option value="Dubai">Dubai</option>
                </select>
            </div>
                <div className="input-wrapper">
                    <img className="cal-icon" src="assets/cal.svg" alt="Calendar Icon"/>
                  
                    <input className="header-input"   type="datetime-local" />
                   
                </div>
                <div className="input-wrapper">
                    <img className="cal-icon" src="assets/cal.svg" alt="Calendar Icon"/>
                    <input className="header-input" type="datetime-local"/>
                   
                </div>
            </div>
            <img className="search" src="assets/search.svg" alt=""/>
            <div className="header-input-name"><p>Quick Book</p></div>
        </div>}
        {type==="drop" &&<div className='dropOff'>
        <div className="header-inputs">
                <div className='viewPlace' >
                    <img src="assets/loc.svg" alt=""/>
                <select className="header-input" name="place" id="">
                    <option value="">Select Starting Location</option>
                    <option value="AL Quoz">Al Quoz</option>
                    <option value="Dubai">Dubai</option>
                </select>
            </div>
            <div className='viewPlace' >
                    <img src="assets/loc.svg" alt=""/>
                <select className="header-input" name="place" id="">
                <option value="">Select Drop off Location</option>
                    <option value="AL Quoz">Al Quoz</option>
                    <option value="Dubai">Dubai</option>
                </select>
            </div>
                <div className="input-wrapper">
                    <img className="cal-icon" src="assets/cal.svg" alt="Calendar Icon"/>
                  
                    <input className="header-input" type="datetime-local" />
                </div>
                <div className="input-wrapper">
                    <img className="cal-icon" src="assets/cal.svg" alt="Calendar Icon"/>
                    <input className="header-input" type="datetime-local" />
                   
                </div>
                </div>
                
        </div>}
        <div className="headertext">
            <p id="dwnld-txt">Download our App for easy accessibility anytime, anywhere!</p>
            <div>
            <button className="dwnl-link"><a href="https://apps.apple.com/"><Image width={100} height={0} layout='responsive' src="/assets/app.svg" alt=""/></a></button>
            <button className="dwnl-link"><a href="https://play.google.com/store"><img src="/assets/play.svg" alt=""/></a></button>
        </div>
        </div>

    </div>
    <div className="support">
        <div className="call"><a href="tel:+7025889751"><img src="assets/call.svg" alt=""/></a></div>
        <div className="phone"><img src="assets/24.svg" alt=""/></div>
        
    </div>
   </div>
    
    </div>
  )
}

export default Header
