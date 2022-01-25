import React from 'react'



const Header = () => {
    return (
<div className="topnav">
  <a class="active" href="/">Home</a>
  <a href="/about">About</a>
  <a href="/my-recipes">My Recipes</a>
  <a href="/explore">Explore</a>
  <a href="/Fun">Fun</a>
  <div className="topnav-right">
  </div>
</div>
    )
}

export default Header