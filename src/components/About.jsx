import React from 'react';
import logo from "../images/kbhs logo.webp";
import kyu from "../images/logo kyu.png";

const About = () => {
  return (
    <div className="about font-medium text-xl w-11/12 mx-auto p-8 mt-10 text-gray-100 bg-gray-900">
      <h1 className="text-center text-purple-500 text-4xl mb-8">About Me</h1>
      <p className="text-justify leading-8 font-sans mb-10">
        I am a software Engineering student in Kirinyaga University, Kirinyaga County, Kenya.
        Throughout my academic journey, I have not only gained theoretical knowledge but also honed practical skills, crafting a robust foundation in software engineering. I am proficient in a versatile tech stack, I have excelled in developing dynamic user interfaces using React.js, building scalable backends with Node.js and Express.js, and optimizing data management with Microsoft SQL Server. My expertise is extended to the cloud with the Microsoft Azure platform, state management using Redux Toolkit, efficient caching with Redis, containerization with Docker, and collaborative version control with Git.
        Beyond academics, I have an unwavering commitment to learning, and I am poised for a future of continued growth and innovation in the ever-evolving field of software engineering.
      </p>
      <h1 className="text-purple-500 text-center text-4xl mb-10">Education</h1>
      <div className="flex justify-around">
        <div className="border-2 border-gray-300 p-5 rounded-lg text-center flex flex-col items-center mb-5 bg-gray-800">
          <img src={kyu} className="w-24 mb-5" alt="Kirinyaga University logo" />
          <h2 className="text-xl text-white">Software Engineering</h2>
          <p className="text-white">at Kirinyaga University graduating in October 2025</p>
        </div>
        <div className="border-2 border-gray-300 p-5 rounded-lg text-center flex flex-col items-center mb-5 bg-gray-800">
          <img src={logo} className="w-24 mb-5" alt="kbhs logo" />
          <h2 className="text-xl text-white">Koiwa Boys High Shool</h2>
          <p className="text-white">Kenya Certificate of Secondary Education</p>
          <p>2017-2021</p>
        </div>
       
      </div>
    </div>
  );
};

export default About;
