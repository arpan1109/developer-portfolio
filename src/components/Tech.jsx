import React from "react";
import { 
  SiCplusplus,
  SiPython,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiBootstrap,
  SiMongodb,
  SiMysql,
  // SiMailtrap,
  SiGit,
  SiGithub,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiMailtrap,
  SiJupyter,
  // SiVisualstudiocode,
  // Note: MATLAB is sometimes under SiMathworks depending on the react-icons version, 
  // but the core stack below covers your exact layout seamlessly.
} from "react-icons/si";

// Organized directly from your reference image
const techCategories = [
  {
    title: "Languages",
    items: [
      { name: "C++", icon: <SiCplusplus className="w-10 h-10" /> },
      { name: "Python", icon: <SiPython className="w-10 h-10" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-10 h-10" /> },
      { name: "TypeScript", icon: <SiTypescript className="w-10 h-10" /> },
      { name: "HTML5", icon: <SiHtml5 className="w-10 h-10" /> },
      { name: "CSS3", icon: <SiCss className="w-10 h-10" /> },
      { name: "TailwindCSS", icon: <SiTailwindcss className="w-10 h-10" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="w-10 h-10" /> },
    ],
  },
  {
    title: "Frameworks & Libraries",
    items: [
      { name: "React", icon: <SiReact className="w-10 h-10" /> },
      { name: "Node.js", icon: <SiNodedotjs className="w-10 h-10" /> },
      { name: "Express", icon: <SiExpress className="w-10 h-10" /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss className="w-10 h-10" /> },
      { name: "Scikit-learn", icon: <SiScikitlearn className="w-10 h-10" /> },
      { name: "Numpy", icon: <SiNumpy className="w-10 h-10" /> },
      { name: "Pandas", icon: <SiPandas className="w-10 h-10" /> },
    ],
  },
  {
    title: "Tools & Infrastructure",
    items: [
      { name: "MongoDB", icon: <SiMongodb className="w-10 h-10" /> },
      { name: "MySQL", icon: <SiMysql className="w-10 h-10" /> },
      { name: "Git", icon: <SiGit className="w-10 h-10" /> },
      { name: "GitHub", icon: <SiGithub className="w-10 h-10" /> },
      { name: "Jupyter", icon: <SiJupyter className="w-10 h-10" /> },
      { name: "Mailtrap", icon: <SiMailtrap className="w-10 h-10" /> },
      // { name: "VS Code", icon: <SiVisualstudiocode className="w-10 h-10" /> },
    ],
  },
];

export default function Tech() {
  return (
    <section id="skills" className="w-full bg-[#0d1117] py-20 px-6 sm:px-8 md:px-16 font-onest">
      <div className="max-w-5xl mx-auto flex flex-col gap-14">
        
        {techCategories.map((category, index) => (
          <div key={index} className="flex flex-col">
            
            {/* Monospace Header Block */}
            <div className="mb-6 border-b border-slate-800/60 pb-3">
              <h3 className="text-xl md:text-2xl font-mono font-bold text-slate-200 flex items-center">
                <span className="text-cyan-500 mr-4 tracking-tighter">{`//`}</span>
                {category.title}
              </h3>
            </div>

            {/* Responsive Card Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-[#11161d] border border-slate-800/60 rounded-xl p-6 flex flex-col items-center justify-center gap-4 hover:border-cyan-500/40 hover:bg-[#141a23] transition-all duration-300 group cursor-default shadow-md hover:shadow-cyan-900/10"
                >
                  {/* Icon Wrapper */}
                  <div className="text-slate-400 group-hover:text-cyan-400 transition-colors duration-300 flex items-center justify-center">
                    {item.icon}
                  </div>
                  
                  {/* Technology Label */}
                  <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors duration-300 text-center">
                    {item.name}
                  </span>
                </div>
              ))}
            </div>

          </div>
        ))}

      </div>
    </section>
  );
}