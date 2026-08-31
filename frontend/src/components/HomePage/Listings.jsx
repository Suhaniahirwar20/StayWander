import React from 'react'
import listings from "../../data/Listings";
import ListingCard from './ListingCard';
import "../../styles/Listings.css";

const Listings = () => {
  return (
    <section id="explore" className="listings-section">
      <div className="container">
            <div className="section-header">
                  <h2>Popular Stays</h2>
                  <p>Handpicked stays loved by travelers around the world.</p>
            </div>

            <div className="listings-grid">
                  {listings.map((listing,index)=>(
                      <ListingCard key={index} listing={listing}/>
                  ))}
            </div>
      </div>
    </section>
  )
}

export default Listings