import React from 'react'
import resim from "../assets/nba-logo.png"

const Header = () => {
  return (
    <div className='logo'>
        <img src={resim} alt="" />
        
        <h1>NBA Legends</h1>
    </div>
  )
}

export default Header