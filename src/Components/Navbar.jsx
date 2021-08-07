import { doDuring } from 'async'
import React from 'react'
import '../Css/Navbar.css'
import dropDown from '../images/dropDown.png'
import loupe from '../images/loupe.png'
export default function Navbar() {
    return (
        <nav>
            <div className='leftNavLinks'>
                <div className='products'>
                <a className='pro'>Products</a>
                <img src={dropDown} alt="" className='dropLogo navLink'/>
                </div>
                <a className='navLink'>Collections</a>
                <a className='navLink'>Gifts</a>
                <a className='navLink'>Our magazine</a>
            </div>
            <div className='rightNavButtons'>
                <img src={loupe} alt="" className='searchLogo' />
                <button className='logIn'>Log In</button>
                <button className='SignUp'>Sign Up</button>
            </div>
      </nav>
    )
}
