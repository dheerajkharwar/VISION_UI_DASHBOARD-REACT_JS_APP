import React from 'react'
import '../App.css'
import Navbar from './Navbar'

export default function Home() {
  return (
    <div className='dashboard_main'>
        <Navbar border='border border-white' />
        <div className='text-center text-white' style={{marginTop:'200px'}}>
        <h2>INSPIRED BY THE FUTURE:</h2>
        <h1>VISION UI DASHBOARD</h1>
        </div>
    </div>
  )
}
