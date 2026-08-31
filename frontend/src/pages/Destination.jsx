import React from 'react'
import DestHero from '../components/Destination/DestHero';
import DestGrid from '../components/Destination/DestGrid';
import FeaturedDestination from '../components/Destination/FeaturedDestination';

const Destination = () => {
  return (
    <div>
      <DestHero/>
      <FeaturedDestination/>
      <DestGrid/>
    </div>
  )
}

export default Destination