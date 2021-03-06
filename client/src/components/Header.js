import React from 'react'
import logo from './assets/img/Community-Cookbook-Logo-white.png'

const Header = () => {
    return (
        <header id='main-header'>
            <h1 id='community'>Community</h1>
            <img src={logo} alt='CC Logo'/>
            <h1 id='cookbook'>Cookbook</h1>
        </header>
    )
}

export default Header
