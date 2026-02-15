import React from "react";
import { experiences } from "../../constants";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-16 md:py-24 px-6 sm:px-10 md:px-16 lg:px-24 font-sans bg-skills-gradient clip-path-custom-2"
    >
      {/* Section Title */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          EXPERIENCE
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold max-w-2xl mx-auto">
          A collection of my work experience and the roles I have taken in
          various organizations
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-white h-full"></div>

        {experiences.map((experience, index) => (
          <div
            key={experience.id}
            className={`relative flex flex-col sm:flex-row items-start sm:items-center mb-12 ${
              index % 2 === 0
                ? "sm:justify-start"
                : "sm:justify-end"
            }`}
          >
            {/* Card */}
            <div
              className={`w-full sm:w-[45%] bg-gray-900 border border-white rounded-2xl p-5 sm:p-8 shadow-2xl backdrop-blur-md transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0
                  ? "sm:mr-auto"
                  : "sm:ml-auto"
              }`}
            >
              {/* Logo + Info */}
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-white rounded-md overflow-hidden flex-shrink-0">
                  <img
                    src={experience.img}
                    alt={experience.company}
                    className="w-full h-full object-cover"
                  />
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-semibold text-white">
                    {experience.role}
                  </h3>
                  <h4 className="text-sm text-gray-300">
                    {experience.company}
                  </h4>
                  <p className="text-xs text-gray-500 mt-1">
                    {experience.date}
                  </p>
                </div>
              </div>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-gray-400">
                {experience.desc}
              </p>

              {/* Skills */}
              <div className="mt-4">
                <h5 className="font-medium text-white text-sm sm:text-base">
                  Skills:
                </h5>
                <ul className="flex flex-wrap mt-2 gap-2">
                  {experience.skills.map((skill, i) => (
                    <li
                      key={i}
                      className="bg-[#8245ec] text-gray-300 px-3 py-1 text-xs sm:text-sm rounded-lg border border-gray-400"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
