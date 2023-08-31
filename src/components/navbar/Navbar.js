import React from 'react'
import { Link } from 'react-router-dom'
import { useTheme } from '../../hooks/useTheme'

import './navbar.css'

const Navbar = () => {
  const {color, changeColor} = useTheme()

  return (
    <div className='navbar' style={{background: color}}>
      <nav onClick={() => changeColor('pink')}>
      <Link to="/" className="brand">
          <h1>Cooking Wizard</h1>
        </Link>
        
        <Link to="/create">Create Recipe</Link>
      </nav>
    </div>
  )
}

export default Navbar
