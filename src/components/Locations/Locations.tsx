import React from 'react'
import './locations.css'
function Locations() {
    const location=[
        {
            id: 1,
            loc:"Dubai"
        },
        {
            id:2,
            loc:"Abu Dhabi"
        },
        {
            id:3,
            loc:"Sharjah"
        },
        {
            id:4,
            loc:"Fujairah"
        },
        {
            id:5,
            loc:"Ras Al Khaimah"
        }

    ]
  return (
    <div>
      <section className="location-section">
    <h4>Locations</h4>
    <div className="locations">

        {location.map((loc)=>
        {
        return(
            <div className="location"  key={loc.id}>

            <img src="assets/red-loc.svg" alt=""/>
            <p>{loc.loc}</p>
            <div className="line"></div>
        </div>
       
        )
        })}
        </div>
    
</section>
</div>
    
  )
}

export default Locations
