import React from 'react';

const Experience = () => {
  return (
    <div className="experience font-medium text-xl w-full mx-auto p-8 mt-10 text-gray-100  rounded-lg shadow-lg">
      <h1 className="text-center text-blue-400 text-4xl font-bold mb-6">Experience</h1>
     
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center space-x-4">
          {/* <span className="text-blue-400 text-3xl">&#x21D2;</span> */}
          <div>
            <h3 className="text-xl text-white-400 font-semibold">The Jitu software development training</h3>
            <p className="text-gray-300">May 2023 - July 2023</p>
            <p className="text-gray-400 mt-2">Gained strong skills in web development and skills in HTML, CSS, React, Nodejs, my SQL, Microsoft Azure </p> <br />

            <a href="https://drive.google.com/file/d/1LoXdrZAYi0FsG9heU75U_RGNfgUegxv_/view?usp=sharing">
                            <button className='btn transition-all duration-500 shadow-sm bg-primary py-2 px-4 rounded-xl text-white hover:bg-white hover:text-primary'>
                                See certificate
                            </button>
                        </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
         
          <div>
            <h3 className="text-xl text-white font-semibold">Software development training at Teach2Give</h3>
            <p className="text-gray-300">May 2024 - July 2024</p>
            <p className="text-gray-400 mt-2">Gained skills in software development using technologies like react, Typescript, Drizzle-orm, Postgre and Neon Database and Microsoft Azure. </p>
              <br />
              <a href="https://drive.google.com/file/d/1DlsNPMx-6Iz2f7kSrPuJresbzDYFBqKB/view?usp=sharing">
                            <button className='btn transition-all duration-500 shadow-sm bg-primary py-2 px-4 rounded-xl text-white hover:bg-white hover:text-primary'>
                                See certificate
                            </button>
                        </a>
          </div>
        </div>
        
      </div>
      
      
    </div>
  );
};

export default Experience;
