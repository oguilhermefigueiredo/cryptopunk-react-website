import React from 'react';
import './Header.css'
import punklogo from '../assets/header/cryptopunk-logo.png'
import searchicon from '../assets/header/search.png'
import themeswitchicon from '../assets/header/theme-switch.png'

const Header = () => {
  return(
    <div className='header'>
      <div className='logo-container'>
        <img src={punklogo} className='punklogo' alt='logo-images'></img>
      </div>

      <div className='searchbar'>
        <div className='search-icon-container'>
          <img src={searchicon} className='searchicon' alt='search'/>
        </div>
        <input 
        className='searchinput' 
        placeholder='Collections, characters and more...' />
      </div>

      <div className='navheader'>
        <p>Drops</p>
        <p>Marketplace</p>
        <p>Create</p>
      </div>

      <div className='headeractions'>
        <div className='theme-switch-container'>
          <img src={themeswitchicon} alt='themeswitch' />
        </div>
      </div>

      <div className='loginbutton'><span>GET IN</span></div>
    </div>
  )
}

export default Header;