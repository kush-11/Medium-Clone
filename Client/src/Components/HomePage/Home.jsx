import React from 'react'
import Lower from './Lower'
import MiddlePart from './MiddlePart'
import Navbar from './Navbar'
import './Home.css'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <div className='bg-light'>
        <Navbar />
        <MiddlePart />
        <hr />
        <Lower />
        
      </div>
    </div>
  )
}

export default Home