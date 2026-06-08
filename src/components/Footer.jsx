import React from "react";
import { Mail } from "lucide-react";
// Import the official brand social icons from SimpleIcons
import { SiGithub, SiX, SiWhatsapp, SiLada } from "react-icons/si";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="w-full bg-[#0d1117] relative pt-1 pb-8 px-6 sm:px-8 md:px-16 font-mono"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[24px_24px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 flex flex-col items-center">
        <div className="w-full mt-4 lg:mt-20 bg-[#11161d] border border-slate-500/60 rounded-3xl p-10 md:p-16 text-center shadow-2xl flex flex-col items-center mb-20 relative overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-cyan-500/20 blur-sm"></div>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-100 tracking-tight mb-6 leading-tight">
            Let's build something <br className="hidden md:block" />
            <span className="text-cyan-400">together</span>.
          </h2>

          <p className="text-slate-400 text-sm md:text-base font-sans max-w-xl mx-auto mb-10 leading-relaxed">
            I'm currently open to new opportunities. Whether you have a
            question, a project idea, or just want to say hi, I'll try my best
            to get back to you!
          </p>

          {/* Main CTA Button */}
          <a
            href="tel:+910000000000"
            className="bg-cyan-500 hover:bg-cyan-400 text-[#0d1117] font-bold px-8 py-4 rounded-lg flex items-center gap-3 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transform hover:-translate-y-1"
          >
            <Mail className="w-5 h-5" />
            arpanpal2k25@gmail.com
          </a>

          {/* Social Links Row (Refactored using SimpleIcons) */}
          <div className="flex items-center gap-8 mt-12 text-slate-400">
            {/* GitHub */}
            <a
              href="https://github.com/arpan1109"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors transform hover:scale-110 duration-300"
            >
              <SiGithub className="w-6 h-6" />
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/arpan-pal-2k04"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-cyan-400 transition-colors transform hover:scale-110 duration-300"
            >
              {/* <SiLada className="w-6 h-6" /> */}
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>

          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-800/60 text-slate-500 text-xs md:text-sm gap-4">
          {/* Logo */}
          <div className="flex items-center text-slate-200 font-bold tracking-tight">
            <span className="text-cyan-500 mr-2">{">_"}</span>
            dev.portfolio
          </div>

          {/* Copyright */}
          <div className="text-center">© 2026 Built with ❤️</div>

          {/* Signature */}
          <div className="flex items-center">
            Designed for{" "}
            <span className="text-cyan-400 ml-1 font-bold">
              {" "}
              &lt;impact /&gt;
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
