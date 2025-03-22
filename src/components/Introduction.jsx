import React from 'react';
import owen from '../images/OWENK.jpg'
import Navbar from './Navbar';

const Introduction = () => {
  return (
    <>
    <Navbar />
    <div className="relative min-h-screen  text-white flex items-center justify-center px-6">
      
      {/* Content Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center max-w-5xl mx-auto">
        {/* Text Section */}
        <div className="lg:w-1/2 text-left ml-2 mb-32">
          <p className="text-blue-400 italic">Hello !!!</p>
          <h1 className="text-5xl font-bold mt-2">I'm <span className="text-gray-300">Emmanuel  Kibet</span></h1>
         
          <p className="mt-6 text-gray-400 leading-relaxed">
        I am a software Engineer mainly passionate in software development and an author of technical blogs
          </p><br />
          <div className='mt-5'>
                        <a href="https://drive.google.com/file/d/1heQWkg97uL-V9FsbjJDUHgG-_IDmHIl2/view?usp=sharing">
                            <button className='btn transition-all duration-500 shadow-sm bg-primary py-2 px-4 rounded-xl text-white hover:bg-white hover:text-primary'>
                                Download Resume
                            </button>
                        </a>
                    </div>
        </div>
        <div>
      

          
        </div>
        
        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <img src={owen} className="max-w-md lg:max-w-lg  shadow-lg transform -translate-y-2" alt="Profile" />
        </div>
      </div>
      
      
      {/* Footer */}
     
    </div>
    </>
  );
};

export default Introduction;
