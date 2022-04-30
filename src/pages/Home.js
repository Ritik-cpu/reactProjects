import React from 'react'
import Birthday from '../Birthday'
import Flip from '../Flip'
import Products from '../product/Index'
import './Home.css'

export default function Home() {
  return (
    <div className="home">
      <Birthday/>
      <div className='home_product'>
        <Products/>
      </div>
      <div className='home_Flip'>
        <Flip/>
      </div>
     
    </div>
  )
}
