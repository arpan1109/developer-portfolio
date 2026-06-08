import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";
import hero from "../assets/hero.svg";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between bg-[#08090a] px-6 md:px-16 lg:px-24 pt-15 md:pt-2 lg:pt-15 pb-12 overflow-hidden"
    >
      {/* Thin top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      {/* Top row — label + availability */}
      <div className="flex items-center justify-between text-zinc-400 w-full relative z-10 gap-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-[10px] sm:text-xs md:text-sm text-muted-foreground uppercase tracking-widest truncate"
        >
          Software Development Engineer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center gap-2 font-mono text-[10px] sm:text-xs text-cyan-400 uppercase tracking-widest shrink-0"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          <span className="hidden xs:inline">Available now</span>
        </motion.div>
      </div>

      {/* Center — Two Column Layout (Text Left, SVG Right) */}
      <div className="flex-1 flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full relative z-10 gap-12 lg:gap-8 my-8 lg:my-0">
        
        {/* LEFT COLUMN: Text & Buttons */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center text-left order-2 lg:order-1">
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(2.8rem,8vw,6.5rem)] font-bold leading-[1.1] tracking-tight text-white"
          >
            Arpan
            <br />
            <span className="text-cyan-500">Pal.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
            className="mt-6 md:mt-8 max-w-md text-zinc-400 text-sm md:text-base lg:text-lg leading-relaxed"
          >
            I build fast, scalable systems and clean interfaces.
            <br />
            Turning hard problems into simple, lasting solutions.
          </motion.p>

          {/* Interactive Button Group */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
            className="mt-8 md:mt-10 flex flex-wrap items-center gap-4 sm:gap-6"
          >
            {/* Primary Button: My Works */}
            <a
              href="#projects"
              className="group flex items-center gap-3 border border-slate-700 bg-[#0d1117] px-5 md:px-6 py-3 text-xs md:text-sm font-mono text-white hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-950/20 transition-all duration-300"
            >
              My Works
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            {/* Secondary Button: Resume */}
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2.5 border border-cyan-600/80 hover:border-cyan-400 bg-cyan-950/10 hover:bg-cyan-950/30 px-5 md:px-6 py-3 text-xs md:text-sm font-mono text-cyan-400 hover:text-cyan-300 transition-all duration-300 shadow-[0_0_15px_rgba(8,145,178,0.1)]"
            >
              <FileText className="w-4 h-4" />
              Resume
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN: The SVG Vector Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full lg:w-1/2 flex justify-center lg:justify-end items-center order-1 lg:order-2 mt-4 lg:mt-0"
        >
          {/* Floating Animation Wrapper */}
          <motion.img
            animate={{ y: [-12, 12, -12] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            src={hero}
            alt="Hero Vector Illustration"
            className="w-full h-auto max-w-65 sm:max-w-[320px] md:max-w-95 lg:max-w-120 xl:max-w-130 object-contain drop-shadow-[0_0_50px_rgba(34,211,238,0.12)]"
          />
        </motion.div>
      </div>

      {/* Bottom row — footer context indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="flex items-end justify-between w-full text-zinc-400 relative z-10 pt-4"
      >
        <p className="font-mono text-[10px] md:text-xs tracking-[0.2em] uppercase">
          Portfolio — 2026
        </p>
      </motion.div>
    </section>
  );
}