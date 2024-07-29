import React from 'react';

const Experience = () => {
  return (
    <div className="experience font-medium text-xl w-11/12 mx-auto p-8 mt-10 text-gray-100 bg-gray-900">
      <h1 className="text-center text-purple-500 text-4xl mb-10">Experience</h1>
      <div className="md:flex-row justify-around">
        <div className="border-2 border-gray-300 p-5 rounded-lg text-center items-center mb-5 bg-gray-800 mx-2">
          <h2 className="text-2xl text-green-600">Software Engineering Industrial Attachee at Teach2Give</h2>
          <p className="text-gray-300 my-5">Participated in an intensive, hands-on software engineering training program focused on modern web development technologies and practices. Engaged in collaborative projects, demonstrating strong teamwork and problem-solving abilities.</p>
          <p className="text-blue-500">May 2024 – update</p>
          <button className='bg-blue-400 mt-6 h-10 w-40 rounded-md text-gray-200 animate-bounce hover:bg-cyan-500'>See Certificate</button>
        </div>
        <div className="border-2 border-gray-300 p-5 rounded-lg text-center items-center mb-5 bg-gray-800 mx-2 ">
          <h2 className="text-2xl text-green-600">Software Engineering Training at The Jitu</h2>
          <p className="text-gray-300 my-5">I attendend a three-month intensisive hands on training at the jitu.Over the three month I was ablbe to train  on fullstack web development, peer to peer learning,problem solving and also softskills.</p>
          <p className="text-blue-500">October 2022 – update</p>
          <button className='bg-blue-400 mt-6 h-10 w-40 rounded-md text-gray-200 animate-bounce hover:bg-cyan-500'>see Certificate</button>
        </div>
      
      </div>
    </div>
  );
};

export default Experience;
