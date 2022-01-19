import React from 'react'
import logo from '../../img/Community-Cookbook-Logo.png'

const Header = () => {
    return (
        <header id='main-header'>
            <h1>Community</h1>
            <img src={logo} alt='CC Logo'/>
            <h1>Cookbook</h1>
        </header>
    )
}

export default Header
