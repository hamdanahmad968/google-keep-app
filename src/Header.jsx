import React from 'react';
import Logo from './images/Logo.png'

const Header = ()=>{
    return (
        <>
          <div className='header'>
            <img src={Logo} alt = "logo" />
            <h1> HamdanKEep</h1>
          </div>

        </>
    )
}

export default Header;