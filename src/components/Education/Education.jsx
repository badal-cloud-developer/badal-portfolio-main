import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-16 md:py-24 px-6 sm:px-10 md:px-16 lg:px-24 font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* Section Title */}
      <div className="text-center mb-12 md:mb-16">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">
          EDUCATION
        </h2>
        <div className="w-24 sm:w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-base sm:text-lg font-semibold max-w-2xl mx-auto">
          My education has been a journey of learning and development.
          Here are the details of my academic background.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-1 bg-white h-full"></div>

        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-start sm:items-center mb-12 ${
              index % 2 === 0
                ? "sm:justify-start"
                : "sm:justify-end"
            }`}
          >
            {/* Education Card */}
            <div
              className={`w-full sm:w-[45%] bg-gray-900 border border-white rounded-2xl p-5 sm:p-8 shadow-2xl backdrop-blur-md transition-transform duration-300 hover:scale-105 ${
                index % 2 === 0
                  ? "sm:mr-auto"
                  : "sm:ml-auto"
              }`}
            >
              {/* Degree + School + Date */}
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-white">
                  {edu.degree}
                </h3>

                <h4 className="text-sm text-gray-300 mt-1">
                  {edu.school}
                </h4>

                <p className="text-xs text-gray-500 mt-1">
                  {edu.date}
                </p>
              </div>

              {/* Grade */}
              <p className="mt-4 text-purple-400 font-semibold text-sm sm:text-base">
                Grade: {index === 0 ? "2.96" : "3.23"}
              </p>

              {/* Description */}
              <p className="mt-4 text-sm sm:text-base text-gray-400">
                {edu.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
