import React, { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-[#0d1117] border-b border-slate-800 font-mono relative z-50">
      {/* Background grid effect (Optional, matches the faint grid in your image) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
        
        {/* Terminal Logo */}
        <div className="flex items-center text-xl font-bold tracking-tight text-slate-100 cursor-pointer">
          <span className="text-cyan-400 mr-2">{">_"}</span>
          dev.portfolio
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-sm text-slate-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors duration-300">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors duration-300">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors duration-300">Projects</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors duration-300">Experience</a>
          
          {/* Contact Button */}
          <a 
            href="#contact" 
            className="ml-2 px-5 py-2 rounded border border-cyan-700 text-slate-200 hover:bg-cyan-900/30 hover:border-cyan-400 hover:text-white transition-all duration-300"
          >
            Contact
          </a>
        </div>

        {/* Mobile Hamburger Menu Icon */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-400 hover:text-cyan-400 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0d1117] border-b border-slate-800 px-6 py-4 absolute w-full left-0 top-full flex flex-col space-y-4 text-sm text-slate-400">
          <a href="#about" className="hover:text-cyan-400 transition-colors">About</a>
          <a href="#skills" className="hover:text-cyan-400 transition-colors">Skills</a>
          <a href="#projects" className="hover:text-cyan-400 transition-colors">Projects</a>
          <a href="#experience" className="hover:text-cyan-400 transition-colors">Experience</a>
          <a 
            href="#contact" 
            className="inline-block text-center px-5 py-2 mt-2 rounded border border-cyan-700 text-slate-200 hover:bg-cyan-900/30 transition-all"
          >
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}