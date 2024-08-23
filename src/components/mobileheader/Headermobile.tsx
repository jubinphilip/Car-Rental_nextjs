import './headermobile.css'
import React, { useState } from 'react'

function Headermobile() {
    const[book,setBook]=useState<boolean>(false)//Stores the state of book now button
    const[activeInput,setactiveInput]=useState<string>("pick")//stores type of input that user selects
    function handleBook()
    {
        setBook(!book)
    }
    function handleInput(type:string)//select argument and decides which input field needs to be displayed
    {
        setactiveInput(type)
    }
  return (
    <div>
      {/*Book Now And Quick Book Button for Mobile*/}
   <div className="input-btn">
    <button id="book-car" onClick={handleBook}>Book a Car</button>
    <button >Quick Book</button>
   </div>
   {/* if the book state is active then only the content is shown*/}
   {book && <div className="mobile-inputs">
    <div className="input-nav">
        <ul>
            <li id="nav-1" onClick={()=>handleInput("pick")}>Same as Pick-Up</li>
            <li id="nav-2"onClick={()=>handleInput("drop")}>Diffrent Drop Off</li>
            <li><select className="mob-vehicle-select" name="" id=""><option value="type">Vehicle Type</option><option value="car">CAR</option><option value="bike">Bike</option></select></li>
        </ul>
    </div>
    {/* checks for the activeinput if user select pickup point then this div is shown else the other */}
   {activeInput==="pick" && <div className="inputs" id="inputs1">
        <input className="loc-ico" type="text" placeholder="Pick-Up Location"/>
        <input className="date-ico" type="datetime-local"/>
        <input className="date-ico" type="datetime-local"/>
    </div>}
    
    {activeInput==="drop" && <div className="inputs" id="inputs2" >
        <input className="loc-ico" type="text" placeholder="Pick-Up Location"/>
        <input className="loc-ico" type="text" placeholder="Drop-Off Location"/>
        <input className="date-ico" type="datetime-local"/>
        <input className="date-ico" type="datetime-local" />
    </div>}
   </div>}
    </div>
  )
}

export default Headermobile
