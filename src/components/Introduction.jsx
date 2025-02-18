import React from 'react';
import bg from "../images/background.jpeg";

const Introduction = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-r from-black via-gray-900 to-purple-900 text-white flex items-center justify-center px-6">
      
      {/* Content Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center max-w-5xl mx-auto">
        {/* Text Section */}
        <div className="lg:w-1/2 text-left ml-2 mb-32">
          <p className="text-blue-400 italic">Hello !!!</p>
          <h1 className="text-5xl font-bold mt-2">I'm <span className="text-gray-300">Emmanuel  Kibet</span></h1>
         
          <p className="mt-6 text-gray-400 leading-relaxed">
        I am a software Engineer mainly passionate in software development and an author of technical blogs
          </p>
          <p className="bg-blue-500 text-black inline-block px-4 py-1 mt-4 text-sm uppercase font-semibold rounded-md">See my  Resume</p>
        </div>
        
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <img src={bg} className="max-w-md lg:max-w-lg grayscale shadow-lg transform -translate-y-6" alt="Profile" />
        </div>
      </div>
      
      
      {/* Footer */}
     
    </div>
  );
};

export default Introduction;
