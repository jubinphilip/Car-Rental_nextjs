"use client"
import React, { useState } from 'react'
import './navbar.css'

export default function Navbar()
{
   //Links and names for the navbar
    const links=[
        {
            name:"About",
            link:"/about"
        },
        {
            name:"Offers",
            link:"/offers"
        },
        {
            name:"Corporate",
            link:"/corporate"
        },
        {
            name:"Personal",
            link:"/personal"
        },
        {
            name:"Contact",
            link:"/conatct"
        }
    ]

    const[popup,setPopup]=useState(false)//For handling the menubar on mobile screens
  function togglePopup()
  {
   // console.log(popup)
    setPopup(!popup)
  }
  return (
    <>
         <div className="header-icons">
                <img src="assets/fb.svg" alt="" />
                <img src="assets/insta.svg" alt="" />
                <img src="assets/x.svg" alt="" />
                <img src="assets/in.svg" alt="" />
                </div>
        
                <div className="navbar-items">
                    <div className="company-logo">
                        <div className="icon">
                            <img className="txt" src="assets/carrent.svg" alt=""/>
                            <img className="logo" src="assets/logo.svg" alt=""/>
                        </div>
                    </div>
        
                    <div className="nav-items">
                            <ul>
                            {//mapping through the links and names 
                            links.map((link) => {
                            return (
                            <li key={link.link} >
                             <a href={link.link}>{link.name}</a>
                            </li>
                            );
                            })}

                                <li><a href="#"><img src="assets/notificaion.svg" alt=""/></a></li>
                                <li><a href="#"><img src="assets/navbar.svg" alt=""/></a></li>
                            </ul>
                    </div>
                </div>
                {/*--Navigation Bar For Mobile*/}
                <div className="mobile-items">
                    <div className="mobile-company-logo">
                        <div className="mob-icon">
                            <img className="mob-txt" src="assets/carrent.svg" alt=""/>
                            <img className="mob-logo" src="assets/logo.svg" alt=""/>
                        </div>
                        <div className="mobile-menu" >
                            <img src="assets/menu.svg" onClick={togglePopup}alt=""/>
                        </div>
                    </div>
                    
                   { //if popup is true then only the sidebar is displayed  state of popup toggled on clicking the menuopen and menu close buttons
                   popup && <div className="popup-window">
                        <img className="menu-close" src="assets/menu-close.svg" alt="" onClick={togglePopup}/>
                            <ul>
                            {links.map((link) => {
                            return (
                            <li className="popup-items" key={link.link}>
                             <a href={link.link}>{link.name}</a>
                            </li>
                            );
                            })}
                                <li><button className="login">Login/Signup</button></li>
                            </ul>
                    </div>}
                </div>
        
                <div className="nav-text">
                    <p>Sunday Pick Up/Drop-Off only at Dubai Silicon Oasis & Habtoor Grand Sales Counters | All Rates inclusive of VAT. T&C’s apply | Follow us on Social Media for New Offers</p>
                </div><br/>
    </>
  )
}


