import React, { useState } from 'react'
import { useLocation, Link} from 'react-router-dom'
import icon from '../assets/brain_burger.png'
import '../CSS/header.css'


export const Header = (props) => {

    const { id } = props   
    const location  = useLocation()

  return (
    <div className='header'>
      <div className='leftNav'>
        <img id='icon' src={icon} alt="Meal Minder Icon" />
        <h1>Meal Minder</h1>
      </div>
        <div className='rightNav'>
            {location.pathname===`/` && (
            <button className='btn btn-dark'><Link className='headerLinks' to='/recipe'>New Recipe</Link></button>)}
            {location.pathname===`/recipe` && (
            <button className='btn btn-dark'><Link className='headerLinks' to='/'>Home</Link></button>)}
            {location.pathname===`/recipe/${id}/details` && (
            <button id='firstBtn' className='btn btn-dark'><Link className='headerLinks' to='/recipe'>New Recipe</Link></button>)}
            {location.pathname===`/recipe/${id}/details` && (
            <button className='btn btn-dark'><Link className='headerLinks' to='/'>Home</Link></button>)}
        </div>
    </div>
  )
}

export default Header