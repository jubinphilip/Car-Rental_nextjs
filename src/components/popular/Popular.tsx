import React from 'react'
import './popular.css'
function Popular() {
    const cars=[
        {
            id:1,
            img:"/assets/car1.svg",
            carName:" Mitsubishi Eclipse",
            des:"Eclipse Cross is a fusion of sharp coupe looks and dynamic SUV mobility with signature Mitsubishi styling, technology and driving confidence.",
            people:6,
            type:"Automatic",
            door:"5 Doors",
            ac:"AC",
            price:" AED 2700/ Monthly"
        },
        {
            id:2,
            img:"/assets/car2.svg",
            carName:"  Jac J7",
            des:" S3 Plus has been rated Five-Star in C-NCAP including front impact, side impact, frontal side impact & Whipping test.",
            people:6,
            type:"Automatic",
            door:"5 Doors",
            ac:"AC",
            price:" AED 2700/ Monthly"
        }
    ]
  return (
    <div>
      <div className="popular-car">
    <div className="popular-head">
        <h3>Most Popular Cars</h3>
    </div>
    <div className="popular-content">
       { cars.map((car)=>
       {
        return (
            <div className="car" key={car.id}>
           
            <img className="car-image" src={car.img} alt=""/>
            <div className="car-details">
                <h4 id="car-name">
                    {car.carName}
                </h4>
                <p>{car.des}</p>
                <div className="car-details-icons">
                    <img src="/assets/seating.svg" alt="seating"/><label>{car.people}</label>
                    <img src="/assets/auto.svg" alt="auto"/><label>{car.type}</label>
                    <img src="/assets/door.svg" alt="door"/><label >{car.door}</label>
                    <img src="/assets/ac.svg" alt="ac"/><label>{car.ac}</label>
                </div>
                <div className="rent-details">
                    <p>
                        {car.price}
                    </p>
                    <button >
                        Book Now
                    </button>
                </div>
            </div>
        </div>
        )

       }) }
    </div>
</div>
    </div>
  )
}

export default Popular
