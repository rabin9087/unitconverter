import React from 'react'
import { Link } from 'react-router-dom'
import '../CSS/styleSheet.css'

export default function Navbar() {
  return (
    < div className='navbar'>
      <Link className='navbarHeading' to={"/"}>Length</Link>
      <Link className='navbarHeading' to={'/area'}>Area</Link>
      <Link className='navbarHeading' to={'/volume'}>Volume</Link>
      <Link className='navbarHeading' to={'/weight'}>Weight</Link>
      <Link className='navbarHeading' to={'/temperatue'}>Temperature</Link>
      <Link className='navbarHeading' to={'/time'}>Time</Link>
    </div>
  )
}
