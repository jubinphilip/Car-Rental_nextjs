import React from 'react'
import './footer.css'
function Mobfooter() {
    const footerItems=[['Home','About Us','Services','Offers','Locations'],
    ['Faq','Terms & Conditions','Service Request'],
    ['privacy  Policy','Services']]
//Footer items store array of array which contain footer elements and companies store company name
    const companies=[['Hospitality','Real-Estate','Publishing'],['Education','Automotive','Vehicle Leasing']]
  return (
    <div>
      <footer className="footer-2">
    <div className="footer-nav">
        <div className="footer-logo-social">
            <div  >
                <img className="logo" src="assets/logo1.svg" alt=""/>
                <p >
                    Member of the <br/>Al Habtoor Group
                </p>
            </div>
            <div className="mob-social-medias">
                
                <img src="assets/fb.svg" alt=""/>
                <img src="assets/x.svg" alt=""/>
                <img src="assets/insta.svg" alt=""/>
                <img src="assets/in.svg" alt=""/>
                <img src="assets/yt2.svg" alt=""/>
            </div>
        </div>
        <div className="footer-nav-items">
            {//mapping through the array of arrays
            footerItems.map((items,index)=>(
                <ul key={index}>{items.map((item,subindex)=>(
                    <li key={subindex}>{item}</li>
                ))}</ul>
            ))

            }
        </div>
    </div>
    <div className="footer-companies">
        <p>
            Al Habtoor Companies
        </p>
        {   //mapping through companies
            companies.map((items, index) => (
                <ul key={index}>
                    {items.map((item, subindex) => (
                        <li key={subindex}>{item}</li>
                    ))}
                </ul>
            ))
            
        }
        <img src="assets/secure.svg" alt=""/>
        <div className="footer-line">
        </div>
        <div className="copy-right">
            <p>© 2018 Car rental LLC - All Rights Reserved.</p>
        </div>
        
    </div>
    
</footer>
    </div>
  )
}

export default Mobfooter
