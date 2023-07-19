import React from 'react'
import logo from '../src/images/1.jpg';

const Header = () => {
  return (
    <div className='header'>
    <img src={logo} alt='logo' width= '70' height="50" />
    <h1> Rajiv Keep </h1>
    </div>
  )
}

export default Header