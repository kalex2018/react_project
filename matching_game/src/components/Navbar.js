import React from 'react'
import { NavLink } from 'react-router-dom'
import '../css/navbar.css'

export default function Navbar() {
  return (
    <div id="navbar">
      <div><NavLink to="/">Home</NavLink></div>
      <div><NavLink to="/matching">Matching Game</NavLink></div>
      <div><NavLink to="/cat">Cat Pictures</NavLink></div>
      <div><NavLink to="/adopt">Adopt</NavLink></div>

    </div>
  )
}
