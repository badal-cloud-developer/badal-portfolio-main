// src/components/Skills/Skills.jsx
import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-16 md:py-24 px-6 sm:px-10 md:px-16 lg:px-24 font-sans bg-skills-gradient clip-path-custom"
  >
    {/* Section Title */}
    <div className="text-center mb-12">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">
        SKILLS
      </h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-3"></div>
      <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold max-w-2xl mx-auto">
        A collection of my technical skills and expertise honed through various projects and experiences
      </p>
    </div>

    {/* Skill Categories */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.03}
          transitionSpeed={800}
          gyroscope={true}
        >
          <div className="bg-gray-900/80 backdrop-blur-lg p-6 sm:p-8 rounded-2xl border border-gray-700 shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
            
            <h3 className="text-xl sm:text-2xl font-semibold text-purple-400 mb-6 text-center">
              {category.title}
            </h3>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex flex-col items-center justify-center bg-gray-800 rounded-xl p-4 hover:scale-105 transition-transform duration-300"
                >
                  {/* Logo Container */}
                  <div className="w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center bg-white rounded-lg p-2 shadow-md">
                    <img
                      src={skill.logo}
                      alt={skill.name}
                      className="max-w-full max-h-full object-contain"
                    />
                  </div>

                  {/* Skill Name */}
                  <p className="text-xs sm:text-sm text-gray-300 mt-3 text-center">
                    {skill.name}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;
