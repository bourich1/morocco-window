import React from 'react'
import './header.css';
import { Instagram } from 'lucide-react';

function Header() {
  return (
    <nav>
  <div className="container nav-container">
    <div className="logo">
      <img src="/logo.svg" alt="Morocco Window Logo" />
    </div>
    <a href="https://www.instagram.com/morocco.window/" target="_blank" className="instagram-btn">
      <Instagram />
      <span className="instagram-text">Follow Us</span>
    </a>
  </div>
</nav>
  )
}

export default Header
