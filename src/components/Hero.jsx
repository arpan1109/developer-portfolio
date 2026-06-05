import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";
import { FileText, ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-between bg-[#08090a] px-6 md:px-16 lg:px-24 pt-32 pb-12 overflow-hidden"
    >
      {/* Thin top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      {/* Top row — label + availability */}
      <div className="flex items-center justify-between w-full">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-mono text-xs text-muted-foreground uppercase tracking-[0.25em]"
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
          Available now
        </motion.div>
      </div>

      {/* Center — name */}
      <div className="flex-1 flex flex-col justify-center">
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3.5rem,12vw,9rem)] font-bold leading-[0.9] tracking-tighter text-white"
        >
          Alex
          <br />
          <span className="text-cyan-600">Chen.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="mt-10 max-w-md text-muted-foreground text-base md:text-lg leading-relaxed"
        >
          I build fast, scalable systems and clean interfaces.
          <br />
          Turning hard problems into simple, lasting solutions.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.65 }}
          className="mt-10 flex flex-row items-center gap-4"
        >
          {/* <Button
            size="lg"
            className="gap-2 group font-mono rounded-none border border-white/80 bg-transparent text-white hover:bg-white hover:text-black transition-colors"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Work
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            size="lg"
            variant="ghost"
            className="gap-2 font-mono rounded-none text-muted-foreground hover:text-white hover:bg-transparent border border-transparent hover:border-white/20"
          >
            <FileText className="w-4 h-4" />
            Resume
          </Button> */}
        </motion.div>
      </div>

      {/* Bottom row — scroll + index */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="flex items-end justify-between w-full"
      >
        <p className="font-mono text-xs text-muted-foreground/40 uppercase tracking-widest">
          Portfolio — 2025
        </p>

        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-[10px] text-muted-foreground/40 uppercase tracking-widest">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-cyan-500/60 to-transparent" />
        </div>
      </motion.div>
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 bottom-0 select-none text-[32vw] font-extrabold leading-none text-white/[0.02] tracking-tighter"
      >
        {"</>"}
      </div>
    </section>
  );
}