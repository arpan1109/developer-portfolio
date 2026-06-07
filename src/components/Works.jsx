import React from "react";
import { Link } from "react-router-dom";
// Import the official coding brand icons
import {
  SiGithub,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiScikitlearn,
  SiPandas,
  SiFastapi,
  SiVercel,
  SiMailtrap,
  SiGooglegemini,
  SiFramer,
  SiJsonwebtokens,
  SiPostman,
  SiNumpy,
} from "react-icons/si";
// SimpleIcons only has brands, so we use a standard Feather icon for the "Live Preview" arrow
import { FiExternalLink } from "react-icons/fi";
import designPortfolioImg from "../assets/design-portfolio.png";
import hero from "../assets/about.svg";
import journeysImg from "../assets/journeys.jpg";
import admin from "../assets/admin-dashboard.png";

// Projects configuration array using the imported references
const featuredProjects = [
  {
    title: "Client Design Portfolio",
    description: "A sleek and modern Graphic Design Portfolio for my client",
    tech: [
      { name: "React", icon: <SiReact /> },
      { name: "Vercel", icon: <SiVercel /> },
    ],
    image: designPortfolioImg,
    githubUrl: "https://github.com/arpan1109/design-portfolio",
    liveUrl: "https://devcreates4u.vercel.app/",
  },
  {
    title: "Journeys",
    description:
      "An Interactive MERN stack web application allowing multiple users to collaboratively plan trips. It provides a secure session using JWT and BcryptJs and uses mailtrap for sending emails for various purposes like Welcome mails, Authentication mails.",
    tech: [
      { name: "React", icon: <SiReact /> },
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Mailtrap", icon: <SiMailtrap /> },
      { name: "JWT", icon: <SiJsonwebtokens /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Gemini API", icon: <SiGooglegemini /> },
    ],
    image: journeysImg,
    githubUrl: "https://github.com/arpan1109/trip-planning",
    liveUrl: "https://journeys-client.vercel.app/",
  },
  {
    title: "Sustainable Agriculture ML Model",
    description:
      "Predictive machine learning pipeline that analyzes soil metrics, rainfall, and climate data to recommend optimal crop rotation strategies.",
    tech: [
      { name: "Python", icon: <SiPython /> },
      { name: "Scikit-Learn", icon: <SiScikitlearn /> },
      { name: "Numpy", icon: <SiNumpy /> },
      { name: "Pandas", icon: <SiPandas /> },
      { name: "FastAPI", icon: <SiFastapi /> },
    ],
    image: hero,
    githubUrl: "https://github.com/arpan1109/sustainable-agriculture-ml",
    liveUrl: "#",
  },
  {
    title: "React Admin Dashboard",
    description:
      "Dynamic React Admin Dashboard built using Tailwind CSS, Recharts, and Framer Motion. The dashboard features an interactive area chart that updates dynamically based on a selected time duration",
    tech: [
      { name: "React", icon: <SiReact /> },
      { name: "Framer-motion", icon: <SiFramer /> },
    ],
    image: admin,
    githubUrl: "https://github.com/arpan1109/react-admin-dashboard",
    liveUrl: "#",
  },
];

export default function Works() {
  return (
    <section
      id="projects"
      // Adjusted structural spacing matching your About section bounds to prevent display collisions
      className="w-full bg-[#0d1117] py-16 md:py-24 px-6 sm:px-12 md:px-16 font-onest overflow-hidden"
    >
      <div className="max-w-6xl mx-auto flex flex-col">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-12 border-b border-slate-800/60 pb-6 gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-mono font-bold text-slate-200 flex items-center">
              <span className="text-cyan-500 mr-4 tracking-tighter">{`//`}</span>
              Featured Works
            </h2>
          </div>
        </div>

        {/* Dynamic Responsive Project Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
          {featuredProjects.map((project, index) => (
            <div
              key={index}
              className="bg-[#11161d] border border-slate-800/60 rounded-2xl overflow-hidden group hover:border-cyan-500/30 transition-all duration-300 shadow-lg flex flex-col"
            >
              {/* Project Image Container */}
              <div className="w-full aspect-video overflow-hidden relative bg-slate-900 border-b border-slate-800/60 flex items-center justify-center">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                ) : (
                  <div className="font-mono text-xs text-slate-600 select-none">
                    [ No Preview Image Provided ]
                  </div>
                )}
                {/* Overlay hover color tint */}
                <div className="absolute inset-0 bg-cyan-800/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </div>

              {/* Project Details */}
              <div className="p-5 sm:p-6 md:p-8 flex flex-col grow">
                {/* Title & Links Row */}
                <div className="flex items-start justify-between gap-4 mb-4">
                  {/* 1. Changed 'line-clamp-1' or text-truncation to allow natural wrapping.
    2. Added 'break-words' to prevent long technical words from overflowing.
  */}
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-slate-100 group-hover:text-cyan-400 transition-colors duration-300 break-words flex-1">
                    {project.title}
                  </h3>

                  {/* Added 'shrink-0' to ensure the link icons never get squished 
    when the title expands onto two lines.
  */}
                  <div className="flex items-center gap-3 text-slate-400 shrink-0 pt-1">
                    {project.githubUrl !== "#" && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition-colors"
                      >
                        <SiGithub className="w-5 h-5" />
                      </a>
                    )}
                    {project.liveUrl !== "#" && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-cyan-400 transition-colors"
                      >
                        <FiExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description Text block scales cleanly via text-sm utility definitions */}
                <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed mb-6 sm:mb-8 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack Pills Layer */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="flex items-center gap-1 sm:gap-1.5 px-2.5 sm:px-3 py-1 sm:py-1.5 text-[10px] sm:text-xs font-mono text-cyan-400 bg-cyan-950/20 border border-cyan-900/40 rounded-md shadow-sm"
                    >
                      {tech.icon &&
                        React.cloneElement(tech.icon, {
                          className: "w-3 sm:w-3.5 h-3 sm:h-3.5",
                        })}
                      {tech.name}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
