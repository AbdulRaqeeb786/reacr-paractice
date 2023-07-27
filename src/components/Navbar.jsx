import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <>
    <div class="nav">
  <input type="checkbox" id="nav-check"/>
  <div class="nav-header">
    <div class="nav-title">
    <a href="/" >MY LOGO</a>
    </div>
  </div>
  <div class="nav-btn">
    <label for="nav-check">
      <span></span>
      <span></span>
      <span></span>
    </label>
  </div>
  
  <div class="nav-links">
    <a href="/" >Home</a>
    <a href="/about" >About</a>
    <a href="/contact">Contact</a>
    <a href="/blog">Blog</a>
    <a href="/latestnews">News</a>
  </div>
</div>
    </>
  );
};

export default Navbar;
