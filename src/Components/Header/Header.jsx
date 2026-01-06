import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
  return (
    <div className='header'>
        
       <ul className='header-list'>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/photo">Photo</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        
       </ul>
        
        </div>
  )
}
