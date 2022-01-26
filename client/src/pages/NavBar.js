import React from 'react'



const Header = () => {
    return (
<div className="topnav">
  <a className="active" href="/">Home</a>
  <a href="/about">About</a>
  <a href="/Fun">Fun</a>
  <a href="/explore">Explore</a>
  <a href="/Login">Login</a>
  <a href="/Signup">Signup</a>
  <div className="topnav-right">
  </div>
</div>
    )
}

export default Header