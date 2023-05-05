import React from 'react'
import Navbar from './Navbar'


export default function Template(props) {
  return (
    <div>
        <Navbar />
        {props.children}
    </div>
  )
}