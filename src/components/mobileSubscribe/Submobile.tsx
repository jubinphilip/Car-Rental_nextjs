import React from 'react'
import './Submobile.css'
function Submobile() {
  return (
    <div>
        <div className='wrapper'>
           <div className="mobile-sub-part2">
        <div className="phone-links">
            <img src="assets/phone.svg" alt="" className="mobile-phone-img"/>
            <div className="mobile-dwnld">
                <div>
                <span className='text'>Get it on</span><br/>
                <a href="https://apps.apple.com/"><img src="assets/app2.svg" alt=""/></a>
               <a href="https://play.google.com/store"><img src="assets/play2.svg" alt=""/></a> 
                </div>
                <div><p className='text'>Enter your number and receive 
                    a direct link to download the app</p></div>
            </div>
        </div>
            <div className="sub-part2-input">
                <input type="text" placeholder="Enter Phone Number"/><br/>
                <button>Get the Link</button>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Submobile
