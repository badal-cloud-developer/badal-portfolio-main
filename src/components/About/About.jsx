import React from "react";
import ReactTypingEffect from "react-typing-effect";
import Tilt from "react-parallax-tilt";
import profileImage from "../../assets/badalphoto.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="py-16 md:py-24 px-6 sm:px-10 md:px-16 lg:px-24 font-sans"
    >
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
        
        {/* LEFT SIDE */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          
          {/* Greeting */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
            Hi, I am
          </h1>

          {/* Name */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white mt-2">
            Badal Khanal
          </h2>

          {/* Typing Effect */}
          <h3 className="text-lg sm:text-2xl md:text-3xl font-semibold mt-4 text-[#8245ec]">
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                "Recently Graduated Computer Engineer",
                "MERN Stack Developer",
                "Data Enthusiast",
              ]}
              speed={80}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </h3>

          {/* Description */}
          <p className="text-gray-400 mt-6 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto md:mx-0">
            I am a Computer Engineer skilled in Data Analysis, Business
            Analysis, and Digital Marketing. I focus on building efficient
            technical solutions, working with data to support smart decisions,
            and applying modern digital strategies while continuously improving
            my skills.
          </p>

          {/* Button */}
          <div className="mt-8">
            <a
              href="link add"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 sm:px-8 py-3 text-sm sm:text-lg font-bold text-white rounded-full transition-all duration-300 hover:scale-105"
              style={{
                background: "linear-gradient(90deg, #8245ec, #a855f7)",
                boxShadow:
                  "0 0 10px #8245ec, 0 0 20px rgba(130,69,236,0.5)",
              }}
            >
              DOWNLOAD CV
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Tilt
            tiltMaxAngleX={10}
            tiltMaxAngleY={10}
            perspective={1000}
            scale={1.03}
            transitionSpeed={800}
            gyroscope={true}
            className="rounded-full"
          >
            <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 border-4 border-purple-600 rounded-full p-2 shadow-lg shadow-purple-500/30">
              <img
                src={profileImage}
                alt="Badal Khanal"
                className="w-full h-full rounded-full object-cover"
              />
            </div>
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default About;
