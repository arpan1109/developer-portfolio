import React from "react";
import { motion } from "framer-motion";
// Imported distinct, semantic icons for your stats grid
import { Code2, FolderGit2, Cpu, Award } from "lucide-react";
import about from "../assets/about.svg";

export default function About() {
  return (
    <section
      id="about"
      className="w-full bg-[#0d1117] py-8  px-6 sm:px-8 md:px-16 relative overflow-hidden"
    >
      {/* Background ambient glow */}
      <div className="absolute  top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-center relative z-10">
        
        {/* ================= LEFT COLUMN: Image & Badge ================= */}
        <div className="w-full relative max-w-md mx-auto lg:mx-0">
          {/* Main Image Frame */}
          <div className="aspect-square w-full bg-[#111822] rounded-2xl border border-slate-800 shadow-2xl relative overflow-hidden flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="w-full flex justify-center items-center"
            >
              {/* Floating Animation Wrapper */}
              <motion.img
                animate={{ y: [-15, 15, -15] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                src={about}
                alt="About Vector Illustration"
                className="w-full h-auto max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] object-contain text-cyan-500 drop-shadow-[0_0_40px_rgba(34,211,238,0.15)]"
              />
            </motion.div>
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
            I am an Electrical Engineering student at NSUT, Delhi with a strong
            foundation in software engineering and a drive for building elegant,
            scalable solutions. I specialize in full-stack development using the
            MERN stack, alongside a deep interest in machine learning and
            robotics. I am passionate about tackling complex technical
            challenges.
          </p>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="w-full"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
              
              {/* Stat 1: Coding */}
              <div className="group bg-[#11161d] border border-zinc-400/20 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-cyan-500/60 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-slate-800/40 group-hover:bg-cyan-500/10 flex items-center justify-center mb-4 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300">
                  <Code2 className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">3+</h3>
                <p className="text-[10px] tracking-[0.2em] font-mono text-slate-500 group-hover:text-slate-400 transition-colors duration-300 uppercase">
                  Years Coding
                </p>
              </div>

              {/* Stat 2: Projects */}
              <div className="group bg-[#11161d] border border-zinc-400/20 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-cyan-500/60 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-slate-800/40 group-hover:bg-cyan-500/10 flex items-center justify-center mb-4 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300">
                  <FolderGit2 className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">15+</h3>
                <p className="text-[10px] tracking-[0.2em] font-mono text-slate-500 group-hover:text-slate-400 transition-colors duration-300 uppercase">
                  Projects Built
                </p>
              </div>

              {/* Stat 3: Technologies */}
              <div className="group bg-[#11161d] border border-zinc-400/20 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-cyan-500/60 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-slate-800/40 group-hover:bg-cyan-500/10 flex items-center justify-center mb-4 text-slate-400 group-hover:text-cyan-400 transition-colors duration-3000">
                  <Cpu className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">15+</h3>
                <p className="text-[10px] tracking-[0.2em] font-mono text-slate-500 group-hover:text-slate-400 transition-colors duration-300 uppercase">
                  Technologies
                </p>
              </div>

              {/* Stat 4: LeetCode */}
              <div className="group bg-[#11161d] border border-zinc-400/20 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:border-cyan-500/60 transition-all duration-300">
                <div className="w-10 h-10 rounded-full bg-slate-800/40 group-hover:bg-cyan-500/10 flex items-center justify-center mb-4 text-slate-400 group-hover:text-cyan-400 transition-colors duration-300">
                  <Award className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-1">210+</h3>
                <p className="text-[10px] tracking-[0.2em] font-mono text-slate-300 group-hover:text-slate-400 transition-colors duration-300 uppercase">
                  Github commits
                </p>
              </div>

            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}