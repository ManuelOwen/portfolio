import React from 'react';
import logo from "../images/kbhs logo.webp";
import kyu from "../images/logo kyu.png";

const About = () => {
  return (
    <div className="w-full p-8 mt-10 text-gray-100 shadow-lg">
      <div className="container mx-auto">
        {/* About Me Section */}
        <section className="mb-12">
          <h1 className="text-center text-blue-400 text-4xl mb-8 font-bold">About Me</h1>
          <p className="text-justify leading-8 font-sans mb-10">
            I am a Software Engineering student at Kirinyaga University, Kenya. Throughout my academic journey, I have gained both theoretical knowledge and practical skills, building a strong foundation in software engineering. I am proficient in a versatile tech stack, including React.js, Node.js, Express.js, and Microsoft SQL Server. My expertise extends to cloud platforms like Microsoft Azure, state management with Redux Toolkit, caching with Redis, containerization with Docker, and version control with Git. I am committed to continuous learning and innovation in the ever-evolving field of software engineering.
          </p>
        </section>

        {/* Education Section */}
        <section className="mb-12">
          <h1 className="text-center text-blue-400 text-4xl mb-8 font-bold">Education</h1>
          <div className="flex flex-col md:flex-row justify-around gap-8">
            {/* Kirinyaga University */}
            <div className=" p-6 rounded-lg text-center flex flex-col items-center shadow-sm hover:scale-105 transition duration-300">
              <img src={kyu} className="w-32 mb-5" alt="Kirinyaga University logo" />
              <h2 className="text-xl text-white font-semibold">Bachelor of Software Engineering</h2>
              <p className="text-white">Kirinyaga University</p>
              <p className="text-white">Expected Graduation: October 2025</p>
            </div>
            {/* Koiwa Boys High School */}
            <div className=" p-6 rounded-lg text-center flex flex-col items-center shadow-sm hover:scale-105 transition duration-300">
              <img src={logo} className="w-32 mb-5" alt="Koiwa Boys High School logo" />
              <h2 className="text-xl text-white font-semibold">Kenya Certificate of Secondary Education</h2>
              <p className="text-white">Koiwa Boys High School</p>
              <p className="text-white">2017 - 2021</p>
            </div>
          </div>
        </section>

        {/* Skills & Interests Section */}
        <section>
          <h1 className="text-center text-blue-400 text-4xl mb-8 font-bold">Skills & Interests</h1>
          <div className="flex flex-wrap justify-center gap-4">
            {['React.js', 'Node.js', 'Express.js', 'Microsoft SQL Server', 'Microsoft Azure', 'Redux Toolkit', , 'Docker', 'Git'].map((skill) => (
              <span key={skill} className=" grid  grid-cols-3-cols-3 gap-4 mt-4 border border-white px-4 py-2 rounded-md text-white hover:bg-blue-500 hover:text-black transition duration-300 hover:scale-105 cursor-pointer">
                {skill}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
