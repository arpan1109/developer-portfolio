import React from "react";

export default function About() {
  return (
    <section id="about" className="w-full bg-[#0d1117] py-24 px-6 sm:px-8 md:px-16 relative">
      
      {/* Background ambient glow matching the reference image */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
        
        {/* ================= LEFT COLUMN: Image & Badge ================= */}
        <div className="w-full lg:w-5/12 relative max-w-md mx-auto lg:mx-0">
          
          {/* Main Image Frame */}
          <div className="aspect-square w-full bg-[#111822] rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden flex items-center justify-center group">
            {/* Replace the src with your actual portrait image path */}
            <img 
              src="/images/your-portrait.jpg" 
              alt="Developer Portrait" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
              // Fallback styling if image is missing to match the dark empty box in your reference
              onError={(e) => { e.target.style.display = 'none' }} 
            />
          </div>

          {/* Floating <Developer /> Badge */}
          <div className="absolute -bottom-5 -right-5 bg-[#0d1117] border border-slate-700/80 px-5 py-3 rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.5)] flex items-center gap-2">
            <span className="text-cyan-400 font-mono text-sm tracking-wide font-medium">
              &lt;Developer /&gt;
            </span>
          </div>

        </div>

        {/* ================= RIGHT COLUMN: Content & Stats ================= */}
        <div className="w-full lg:w-7/12 flex flex-col space-y-8">
          
          {/* Header */}
          <h2 className="text-4xl md:text-5xl font-mono font-bold text-slate-100 tracking-tight">
            <span className="text-cyan-400 mr-4 font-normal">&gt;</span>
            About Me
          </h2>

          {/* Bio Text */}
          <p className="text-slate-400 text-base md:text-lg leading-relaxed font-sans max-w-3xl">
            I am an Electrical Engineering student at NSUT Delhi with a strong foundation in software engineering and a drive for building elegant, scalable solutions. I specialize in full-stack development using the MERN stack, alongside a deep interest in machine learning and robotics. Whether I'm designing path-planning algorithms for autonomous systems, visualizing data, or structuring backend architectures, I am passionate about tackling complex technical challenges.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
            
            {/* Stat 1: Coding */}
            <div className="bg-[#11161d] border border-slate-800/60 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-cyan-500/30 transition-colors duration-300">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <polyline points="16 18 22 12 16 6"></polyline>
                  <polyline points="8 6 2 12 8 18"></polyline>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">3+</h3>
              <p className="text-[10px] tracking-[0.2em] font-mono text-slate-500 uppercase">Years Coding</p>
            </div>

            {/* Stat 2: Projects */}
            <div className="bg-[#11161d] border border-slate-800/60 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-cyan-500/30 transition-colors duration-300">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <ellipse cx="12" cy="5" rx="9" ry="3"></ellipse>
                  <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path>
                  <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">15+</h3>
              <p className="text-[10px] tracking-[0.2em] font-mono text-slate-500 uppercase">Projects Built</p>
            </div>

            {/* Stat 3: Technologies */}
            <div className="bg-[#11161d] border border-slate-800/60 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-cyan-500/30 transition-colors duration-300">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <rect x="9" y="9" width="6" height="6"></rect>
                  <line x1="9" y1="1" x2="9" y2="4"></line>
                  <line x1="15" y1="1" x2="15" y2="4"></line>
                  <line x1="9" y1="20" x2="9" y2="23"></line>
                  <line x1="15" y1="20" x2="15" y2="23"></line>
                  <line x1="20" y1="9" x2="23" y2="9"></line>
                  <line x1="20" y1="14" x2="23" y2="14"></line>
                  <line x1="1" y1="9" x2="4" y2="9"></line>
                  <line x1="1" y1="14" x2="4" y2="14"></line>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">10+</h3>
              <p className="text-[10px] tracking-[0.2em] font-mono text-slate-500 uppercase">Technologies</p>
            </div>

            {/* Stat 4: LeetCode */}
            <div className="bg-[#11161d] border border-slate-800/60 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-cyan-500/30 transition-colors duration-300">
              <div className="w-10 h-10 rounded-full bg-cyan-500/10 flex items-center justify-center mb-4">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                  <line x1="6" y1="3" x2="6" y2="15"></line>
                  <circle cx="18" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M18 9a9 9 0 0 1-9 9"></path>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">50+</h3>
              <p className="text-[10px] tracking-[0.2em] font-mono text-slate-500 uppercase">Leetcode Days</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}