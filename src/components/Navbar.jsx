import React from 'react'
import {Link} from "react-router-dom"
import { useContext } from 'react'
import { opticsData } from '../context/Usecontext'

const Navbar = () => {
  const { state } = useContext(opticsData)
  return (
    <div className='flex flex-row justify-evenly mt-2 py-4'>
      <Link to="/">Home</Link>
      <Link to="/cart">Cart <span className='bg-cyan-950 text-white rounded px-2 py-1'>{state.cart.length}</span></Link>
    </div>
  )
}

export default Navbar