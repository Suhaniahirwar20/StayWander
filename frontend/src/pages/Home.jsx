import React from 'react'
import Hero from '../components/HomePage/Hero';
import Filters from '../components/HomePage/Filters';
import Listings from '../components/HomePage/Listings';

const Home = () => {
  return (
    <div className="mx-2">
      <Hero/>
      <Filters/>
      <Listings/>
    </div>
  )
}

export default Home;