"use client"
import React from 'react'

const Navigation = () => {
  const handleClick = () => {
    const mobileMenu = document.getElementById("mobile-menu");
    mobileMenu.classList.toggle("flex");
    mobileMenu.classList.toggle("hidden");
  }
  return (
    <div className="z-50 fixed">
      <div className="hidden sm:flex flex-row justify-around items-center w-full p-5 shadow-lg fixed top-0 bg-colour-navs text-xl lg:text-2xl z-5">
        <a href="/" className=""><img src="/logo.png" className="w-20 h-20" /></a>
        <a href="/" className="text-colour-text rounded-lg p-3 hover:text-colour-navs hover:bg-colour-text">Home</a>
        <a href="/#projects" className="text-colour-text rounded-lg p-3 hover:text-colour-navs hover:bg-colour-text">Projects</a>
        <a href="/#skills" className="text-colour-text rounded-lg p-3 hover:text-colour-navs hover:bg-colour-text">Skills</a>
        <a href="/#about" className="text-colour-text rounded-lg p-3 hover:text-colour-navs hover:bg-colour-text">About</a>
        <a href="/contact" className="text-colour-text rounded-lg p-3 hover:text-colour-navs hover:bg-colour-text">Contact</a>
      </div>
      <div className="flex flex-col sm:hidden p-3 shadow-md fixed top-0 w-full bg-colour-navs z-5">
          <button onClick={handleClick}><svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="36"
            height="36"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-colour-text">
            <path d="M3 12h18M3 6h18M3 18h18"></path>
          </svg>
          </button>
        <div className="hidden flex-col text-lg z-5" id="mobile-menu">
          <a href="/" className="text-colour-text py-1 border-b border-colour-text border-opacity-40">Home</a>
          <a href="#projects" className="text-colour-text py-1 border-b border-colour-text border-opacity-40">Projects</a>
          <a href="#skills" className="text-colour-text py-1 border-b border-colour-text border-opacity-40">Skills</a>
          <a href="#about" className="text-colour-text py-1 border-b border-colour-text border-opacity-40">About</a>
          <a href="#about" className="text-colour-text py-1 border-b border-colour-text border-opacity-40">Contact</a>
        </div>
      </div>
    </div>
  )
}

export default Navigation