import React from 'react';
import './footer.css';

function Footer() {
    //Creates an array of arrays for storing footer elements
    const footerItems = [
        ['Home', 'About Us', 'Services'],
        ['Offers', 'Locations', 'Contact Us'],
        ['FAQ', 'Privacy Policy', 'Service Request'],
        ['Career', 'Terms & Conditions']
    ];
    //companies array store company names
    const companies = [
        'Hospitality',
        'Real-Estate',
        'Education',
        'Publishing',
        'Automotive',
        'Vehicle Leasing'
    ];

    return (
        <footer className="footer">
            <div className="footer-1">
                <div className="footer-container">
                    <div className="footer-logo">
                        <img 
                            className="logo" 
                            src="assets/logo1.svg" 
                            alt="Company Logo"
                            loading="lazy"
                        />
                        <p className="logo-text">
                            Member of the Al Habtoor Group
                        </p>
                    </div>
                    <div className="footer-items">
                        {//mapping through each array and then inside it the inner arrays are mapped to get the items in list
                        footerItems.map((items, index) => (
                            <ul key={index} className="footer-list">
                                {items.map((item, subIndex) => (
                                    <li key={subIndex}>{item}</li>
                                ))}
                            </ul>
                        ))}
                    </div>
                    <div className="follow-links">
                        <p>Follow Us On</p>
                        <div className="social-medias">
                            <img src="assets/fb1.svg" alt="Facebook"loading="lazy"/>
                            <img  src="assets/x1.svg"  alt="Twitter" loading="lazy" />
                            <img src="assets/insta1.svg" alt="Instagram" loading="lazy"/>
                            <img  src="assets/in1.svg" alt="LinkedIn" loading="lazy"/>
                            <img src="assets/yt.svg" alt="YouTube"loading="lazy"/>
                        </div>
                        <div className="sign">
                            <img src="assets/sign.svg" alt="Sign"loading="lazy"/>
                        </div>
                    </div>
                </div>
                <div className="companies">
                    <p>Al Habtoor Companies</p>
                    <ul>
                        {//Mapping through the company names 
                        companies.map((name, index) => (
                            <li key={index}>{name}</li>
                        ))}
                    </ul>
                </div>
                <div className="footer-line"></div>
                <div className="copy-right">
                    <p>© 2018 Car rental LLC - All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
