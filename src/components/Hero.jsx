import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import  hero from "../assets/hero.svg"

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between bg-[#08090a] px-6 md:px-16 lg:px-24 pt-32 pb-12 overflow-hidden"
    >
      {/* Thin top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      {/* Top row — label + availability */}
      <div className="flex items-center justify-between text-zinc-400 w-full relative z-10">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs md:text-sm text-muted-foreground uppercase tracking-widest"
        >
          Software Development Engineer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2 font-mono text-xs text-cyan-400 uppercase tracking-widest"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="hidden sm:inline">Available now</span>
        </motion.div>
      </div>

      {/* Center — Two Column Layout (Text Left, SVG Right) */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-between w-full relative z-10 gap-12 lg:gap-8 mt-12 lg:mt-0">
        {/* LEFT COLUMN: Text & Buttons */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3.5rem,10vw,8rem)] font-bold leading-[1.05] tracking-tight text-white"
          >
            Arpan
            <br />
            <span className="text-cyan-500">Pal.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-8 max-w-md text-zinc-400 text-base md:text-lg leading-relaxed"
          >
            I build fast, scalable systems and clean interfaces.
            <br />
            Turning hard problems into simple, lasting solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-10 flex flex-row items-center gap-4 sm:gap-6"
          >
            {/* Primary Button: My Works */}
            <a
              href="#projects"
              className="group flex items-center gap-3 border border-slate-700 bg-[#0d1117] px-6 py-3.5 text-sm font-mono text-white hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-950/20 transition-all duration-300"
            >
              My Works
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            {/* Secondary Button: Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 px-2 py-3.5 text-sm font-mono text-slate-400 hover:text-white transition-colors duration-300"
            >
              <FileText className="w-4 h-4 group-hover:text-cyan-400 transition-colors duration-300" />
              Resume
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: The SVG Vector Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center mt-10 lg:mt-0"
        >
          {/* Floating Animation Wrapper */}
          <motion.img
            animate={{ y: [-15, 15, -15] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={hero} // Pass the imported reference variable here
            alt="Hero Vector Illustration"
            className="w-full h-auto max-w-87.5 sm:max-w-100 lg:max-w-137.5 object-contain text-cyan-500 drop-shadow-[0_0_40px_rgba(34,211,238,0.15)]"
          />
        </motion.div>
      </div>

      {/* Bottom row — scroll + index */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="flex items-end justify-between w-full text-zinc-200/50 relative z-10"
      >
        <p className="font-mono text-[10px] md:text-xs text-muted-foreground/40 uppercase tracking-widest">
          Portfolio — 2026
        </p>


      </motion.div>

      {/* Background Watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute right-[-5%] bottom-10 select-none text-[25vw] lg:text-[20vw] font-extrabold leading-none text-white/[0.02] tracking-tighter"
      >
        {"</>"}
      </div>
    </section>
  );
}
