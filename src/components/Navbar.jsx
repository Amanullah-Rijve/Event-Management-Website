import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      {/* Top Info Bar */}
      <div className="bg-dark text-white hidden md:flex justify-center space-x-8 py-2 text-sm">
        <p className="flex items-center">
          <i className="fa-solid fa-phone text-gold mr-2"></i> +6011-39638206
        </p>
        <p className="flex items-center">
          <i className="fa-solid fa-envelope text-gold mr-2"></i> creativeplannersofbd@gmail.com
        </p>
      </div>
        <hr class="border-t border-gray-300" />

      {/* Navbar */}
      <div className="bg-dark text-white shadow">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center justify-between px-4 md:px-8">
          {/* Logo */}
          <h1 className="text-xl font-bold text-gold">Creative Planners Of Bangladesh</h1>

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-6 text-md font-medium">
            <a href="#home" className="hover:text-gold">Home</a>
            <a href="#about" className="hover:text-gold">About</a>
            <a href="#services" className="hover:text-gold">Services</a>
            <a href="#reviews" className="hover:text-gold">Reviews</a>
            <a href="#contact" className="hover:text-gold">Contact</a>
          </nav>

          {/* Mobile Hamburger */}
          <button 
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden text-grayText focus:outline-none"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden flex flex-col bg-dark px-4 pb-6 space-y-3 text-sm font-medium 
            transition-all duration-300 ease-in-out overflow-hidden 
            ${menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
        >
          <a href="#home" className="hover:text-gold">Home</a>
          <a href="#about" className="hover:text-gold">About</a>
          <a href="#services" className="hover:text-gold">Services</a>
          <a href="#reviews" className="hover:text-gold">Reviews</a>
          <a href="#contact" className="hover:text-gold">Contact</a>
        </div>
      </div>

      {/* Floating WhatsApp Button */}
      <a 
        href="https://wa.me/+6011-39638206" 
        target="_blank" 
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 24 24">
          <path d="M16.7 13.3c-.3-.1-1.8-.9-2.1-1s-.5-.1-.7.1-.8.9-1 1.1-.4.2-.7.1c-.3-.1-1.2-.5-2.3-1.5-.9-.8-1.5-1.8-1.7-2.1s0-.5.1-.7.4-.5.5-.7c.2-.2.3-.4.5-.6.2-.2.3-.4.5-.7.2-.3.1-.5 0-.7-.1-.2-.7-1.8-.9-2.3-.2-.5-.5-.5-.7-.5h-.6c-.2 0-.5.1-.7.3s-1 1-1 2.5 1.1 2.9 1.3 3.1c.2.2 2.2 3.4 5.3 4.7.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.5-.1 1.8-.7 2-1.4.3-.7.3-1.3.2-1.4-.1-.1-.3-.2-.6-.3z"/>
        </svg>
      </a>
    </header>
  );
}

export default Navbar;
