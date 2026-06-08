import React from "react";
// Integrated semantic Lucide React icons for clean, scalable rendering
import { Briefcase, Calendar, GitPullRequest, Star, GitFork } from "lucide-react";

// --- Data: Work Experience ---
const experiences = [
  {
    role: "Remote Intern",
    company: "Shell Foundation India , AICTE",
    date: "August '25 - October '25",
    bullets: [
      "Developed an ML model.",
      "Sustainable Agriculture which detects the most suitable fruit as per the soil condition in a particular area.",
      "Deploy and maintain production environments utilizing Vercel for seamless continuous integration and delivery."
    ]
  },
  {
    role: "Fullstack Developer",
    company: "Swasthya24x7.com",
    date: "Aug '23 - Sept '24",
    bullets: [
      "SEO backed development of the web app for health and lifestyle themes.",
      "Successfully increased the growth by about 1.5 times",
    ]
  },
  {
    role: "Freelance Visual Designer",
    company: "Upwork, Fiverr",
    date: "Mar 2023 - Present",
    bullets: [
      "Design and deliver high-converting visual assets and illustrations, specializing in the gaming niche.",
      "Collaborate directly with international clients to iterate on channel branding and visual identity.",
      "Maintain a consistent top-rated professional profile, managing multiple project pipelines and client communications simultaneously."
    ]
  }
];

// --- Data: Open Source ---
const openSourceContributions = [
  {
    repo: "Anime-Ecstasy",
    description: "Improved performance of the project listed under GSSOC '25. Fixed Navbar and UI for the site.",
    stars: "20",
    forks: "62"
  },
  {
    repo: "firstcontributions",
    description: "Improved the SEO for the open source project, improved the overall grid structure. Added support for Readme translation in various languages.",
    stars: "54.3k",
    forks: "104k"
  },
];

export default function Experience() {
  return (
    <section 
      id="experience" 
      className="w-full bg-[#0d1117] py-10 md:py-24 px-6 sm:px-12 md:px-16 font-onest overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col">
    
        <div className="mb-12 border-b border-slate-800/60 pb-4">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-slate-200 flex items-center">
            <span className="text-cyan-500 mr-4 tracking-tighter">{`//`}</span>
            Experience
          </h2>
        </div>

        {/* Adaptive line offset positioning prevents layout smashing on mobile viewports */}
        <div className="relative border-l border-slate-800 ml-2 sm:ml-4 space-y-10 pb-4">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-6 sm:pl-10 md:pl-12 group">
              
              {/* Glowing Timeline Dot */}
              <div className="absolute -left-[9px] sm:-left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.8)] border-4 border-[#0d1117] group-hover:bg-white group-hover:shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all duration-300 z-10" />

              {/* Experience Card Container */}
              <div className="bg-[#11161d] border border-slate-800/60 rounded-xl p-5 sm:p-6 md:p-8 hover:border-cyan-500/30 transition-colors duration-300 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-100 tracking-tight mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-cyan-400 font-mono text-xs sm:text-sm tracking-wide">
                      <Briefcase className="w-4 h-4 mr-2 shrink-0" />
                      {exp.company}
                    </div>
                  </div>
                  
                  <div className="flex items-center text-slate-400 font-mono text-[11px] sm:text-xs md:text-sm bg-slate-800/40 px-3 py-1.5 rounded-md border border-slate-700/50 self-start md:self-auto shrink-0">
                    <Calendar className="w-3.5 h-3.5 mr-2 opacity-70 shrink-0" />
                    {exp.date}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed">
                      <span className="text-cyan-500 mr-3 mt-0.5 font-mono font-bold select-none">{`>`}</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}
        </div>
        <div className="mt-14 sm:mt-8 md:mt-32 w-full">
          <div className="text-center mb-12 px-4">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold text-slate-100 tracking-tight mb-4">
              <span className="text-cyan-500 mr-2 sm:mr-4 font-normal">&gt;</span>
              Open Source
            </h2>
            <p className="text-slate-400 font-mono text-xs sm:text-sm md:text-base max-w-xl mx-auto">
              Giving back to the community by contributing to projects I use and love.
            </p>
          </div>

          {/* Grid layout shifts dynamically from stacked cards to 2 columns on medium screens */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
            {openSourceContributions.map((repo, index) => (
              <div 
                key={index}
                className="bg-[#11161d] border border-slate-800/60 rounded-xl p-5 sm:p-6 md:p-8 hover:border-cyan-500/30 transition-colors duration-300 shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Repo Icon & Title Row */}
                  <div className="flex items-center gap-3 sm:gap-4 mb-5">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-cyan-900/30 flex items-center justify-center border border-cyan-800/50 shrink-0">
                      <GitPullRequest className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-400" />
                    </div>
                    <h3 className="text-base sm:text-lg md:text-xl font-bold font-mono text-slate-100 break-all line-clamp-1">
                      {repo.repo}
                    </h3>
                  </div>
                  
                  {/* PR Description */}
                  <p className="text-slate-300 text-xs sm:text-sm md:text-base leading-relaxed mb-6">
                    {repo.description}
                  </p>
                </div>

                {/* Stars and Forks Metadata Layer */}
                <div className="flex items-center gap-6 text-slate-400 text-xs sm:text-sm font-mono mt-auto pt-2">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-4 h-4 text-slate-500" />
                    {repo.stars}
                  </div>
                  <div className="flex items-center gap-1.5">
                    <GitFork className="w-4 h-4 text-slate-500" />
                    {repo.forks}
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}