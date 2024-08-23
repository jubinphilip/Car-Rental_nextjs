import './sub.css'
import React from 'react'

function Subscribe() {
  return (
    <div>
        
<section className="subscribe">
    <div className="sub-part1">
        <h4 className="sub">
            Subscribe here for exclusive offers and updates!
        </h4>
        <form className="subform" id="subForm">
            <input type="text" id="username" placeholder="Name"  required/>
            <input type="email" id="usermail" placeholder="Email" required/><br/>
            <span id="emailSpan" ></span><br/>
            <span>Don't miss out! enter your email and your name, then hit subscribe to unlock a world of special offers and details</span><br/>
            <button >Subscribe</button>
        </form>
    </div>
    <div className="sub-part2">
        <img src="/assets/phone.svg" alt="" className="phone-img"/>
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
