import './rent.css'
import React from 'react'

function Rent() {
  return (
    <div>
        <section className="rent-car">
    <h3>
        Rent/Lease In three easy steps
    </h3>

    <div className="steps">
        <div className="rent-card">
            <div className="rent-card-head">
            <h4>01</h4>
            </div>
            <div className="rent-card-body">
            <img src="assets/loc1.svg" alt=""/>
            <p>Select the location. Browse through our available options and find the perfect car to suit your needs</p>
            </div>
        </div>
        <div className="rent-card">
            <div className="rent-card-head">
            <h4>02</h4>
            </div>
            <div className="rent-card-body">
                <img src="assets/date.svg" alt=""/>
                <p>Choose your desired Pick-Up date and time.</p>
            </div>
        </div>
        <div className="rent-card">
            <div className="rent-card-head">
            <h4>03</h4>
            </div>
            <div className="rent-card-body">
                <img src="assets/car.svg" alt=""/>
                <p>Make payment and book the car. Select an option to either have the car delivered to your location or pick it up directly from us.</p>
            </div>
        </div>
    </div>
</section>
    </div>
  )
}

export default Rent
