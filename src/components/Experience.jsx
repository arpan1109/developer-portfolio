import React from "react";

// --- Data: Work Experience ---
const experiences = [
  {
    role: "Full Stack Developer",
    company: "Independent Projects",
    date: "Jan 2024 - Present",
    bullets: [
      "Engineer interactive web applications and scalable blog architectures utilizing the complete MERN stack.",
      "Deploy and maintain production environments utilizing Vercel for seamless continuous integration and delivery.",
      "Developed a collaborative trip planner featuring complex state management and responsive UI components."
    ]
  },
  {
    role: "Undergraduate Researcher (Robotics & ML)",
    company: "Netaji Subhas University of Technology",
    date: "Aug 2023 - Present",
    bullets: [
      "Study and implement path-planning algorithms including A* and Ant Colony Optimization for Autonomous Mobile Robots (AMRs).",
      "Model complex robotic arm kinematics utilizing Denavit-Hartenberg (DH) parameters.",
      "Develop predictive machine learning models for sustainable agriculture using Python, analyzing large datasets for crop recommendations."
    ]
  },
  {
    role: "Freelance Visual Designer",
    company: "Upwork",
    date: "Mar 2023 - Present",
    bullets: [
      "Design and deliver high-converting visual assets and YouTube thumbnails, specializing in the gaming niche.",
      "Collaborate directly with international clients to iterate on channel branding and visual identity.",
      "Maintain a consistent top-rated professional profile, managing multiple project pipelines and client communications simultaneously."
    ]
  }
];

// --- Data: Open Source Contributions ---
const openSourceContributions = [
  {
    repo: "facebook/react",
    description: "Improved performance of useMemo hook by optimizing dependency array comparison.",
    stars: "220k",
    forks: "45k"
  },
  {
    repo: "expressjs/express",
    description: "Added support for custom response class serialization in dependency injection.",
    stars: "65k",
    forks: "14k"
  },
  {
    repo: "scikit-learn/scikit-learn",
    description: "Fixed a race condition in the predictive model scheduler affecting data aggregation logic.",
    stars: "60k",
    forks: "25k"
  },
  {
    repo: "redis/redis",
    description: "Contributed documentation improvements and architectural examples for Redis Streams.",
    stars: "65k",
    forks: "23k"
  }
];

export default function Experience() {
  return (
    <section id="experience" className="w-full bg-[#0d1117] py-24 px-6 sm:px-8 md:px-16 font-onest">
      <div className="max-w-4xl mx-auto flex flex-col">
        
        {/* ============================== */}
        {/* PART 1: EXPERIENCE TIMELINE    */}
        {/* ============================== */}
        <div className="mb-12 border-b border-slate-800/60 pb-4">
          <h2 className="text-3xl md:text-4xl font-mono font-bold text-slate-200 flex items-center">
            <span className="text-cyan-500 mr-4 tracking-tighter">{`//`}</span>
            Experience
          </h2>
        </div>

        <div className="relative border-l border-slate-800 ml-3 md:ml-4 space-y-10 pb-4">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-8 md:pl-12 group">
              {/* Glowing Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-cyan-500 shadow-[0_0_12px_rgba(6,182,212,0.8)] border-4 border-[#0d1117] group-hover:bg-white group-hover:shadow-[0_0_12px_rgba(255,255,255,0.8)] transition-all duration-300 z-10" />

              {/* Experience Card */}
              <div className="bg-[#11161d] border border-slate-800/60 rounded-xl p-6 md:p-8 hover:border-cyan-500/30 transition-colors duration-300 shadow-lg">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-slate-100 tracking-tight mb-2">
                      {exp.role}
                    </h3>
                    <div className="flex items-center text-cyan-400 font-mono text-sm tracking-wide">
                      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                      </svg>
                      {exp.company}
                    </div>
                  </div>
                  <div className="flex items-center text-slate-400 font-mono text-xs md:text-sm bg-slate-800/40 px-3 py-1.5 rounded-md border border-slate-700/50">
                    <svg className="w-3.5 h-3.5 mr-2 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                    {exp.date}
                  </div>
                </div>

                <ul className="space-y-3">
                  {exp.bullets.map((bullet, bulletIndex) => (
                    <li key={bulletIndex} className="flex items-start text-slate-300 text-sm md:text-base leading-relaxed">
                      <span className="text-cyan-500 mr-3 mt-0.5 font-mono font-bold">{`>`}</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* ============================== */}
        {/* PART 2: OPEN SOURCE GRID       */}
        {/* ============================== */}
        <div className="mt-32 w-full">
          {/* Centered Header block */}
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-mono font-bold text-slate-100 tracking-tight mb-4">
              <span className="text-cyan-500 mr-4 font-normal">&gt;</span>
              Open Source
            </h2>
            <p className="text-slate-400 font-mono text-sm md:text-base max-w-xl mx-auto">
              Giving back to the community by contributing to projects I use and love.
            </p>
          </div>

          {/* 2-Column Grid matching reference image */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl mx-auto">
            {openSourceContributions.map((repo, index) => (
              <div 
                key={index}
                className="bg-[#11161d] border border-slate-800/60 rounded-xl p-6 md:p-8 hover:border-cyan-500/30 transition-colors duration-300 shadow-lg flex flex-col justify-between"
              >
                <div>
                  {/* Repo Icon & Title Row */}
                  <div className="flex items-center gap-4 mb-5">
                    {/* PR Icon Box */}
                    <div className="w-12 h-12 rounded-lg bg-cyan-900/30 flex items-center justify-center border border-cyan-800/50">
                      <svg className="w-6 h-6 text-cyan-400" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                        <circle cx="18" cy="18" r="3"></circle>
                        <circle cx="6" cy="6" r="3"></circle>
                        <path d="M13 6h3a2 2 0 0 1 2 2v7"></path>
                        <line x1="6" y1="9" x2="6" y2="21"></line>
                      </svg>
                    </div>
                    {/* Repository Name */}
                    <h3 className="text-xl font-bold font-mono text-slate-100">
                      {repo.repo}
                    </h3>
                  </div>
                  
                  {/* PR Description */}
                  <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                    {repo.description}
                  </p>
                </div>

                {/* Stars and Forks Metadata */}
                <div className="flex items-center gap-6 text-slate-400 text-sm font-mono mt-auto">
                  {/* Stars */}
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                    </svg>
                    {repo.stars}
                  </div>
                  {/* Forks */}
                  <div className="flex items-center gap-2">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                      <circle cx="12" cy="18" r="3"></circle>
                      <circle cx="6" cy="6" r="3"></circle>
                      <circle cx="18" cy="6" r="3"></circle>
                      <path d="M18 9v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9"></path>
                      <path d="M12 12v3"></path>
                    </svg>
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