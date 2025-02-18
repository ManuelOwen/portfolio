import React from 'react';

const Experience = () => {
  return (
    <div className="experience font-medium text-xl w-full mx-auto p-8 mt-10 text-gray-100 bg-gradient-to-r from-black via-gray-900 to-purple-900 rounded-lg shadow-lg">
      <h1 className="text-left text-blue-400 text-5xl font-bold mb-6">EXPERIENCE</h1>
      <hr className="border-blue-400 w-16 mb-8" />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="flex items-center space-x-4">
          {/* <span className="text-blue-400 text-3xl">&#x21D2;</span> */}
          <div>
            <h3 className="text-xl text-white-400 font-semibold">The Jitu software development training</h3>
            <p className="text-gray-300">May 2023 - July 2023</p>
            <p className="text-gray-400 mt-2">Gained strong skills in web development and skills in HTML, CSS, React, Nodejs, my SQL, Microsoft Azure </p> <br />

            <button className="bg-blue-900 hover:bg-blue-700 text-gray-200 hover:scale-105 transition:duration-600 font-bold py-2 px-4 rounded transition duration-300">
 see certificate.
</button>
          </div>
        </div>
        <div className="flex items-center space-x-4">
         
          <div>
            <h3 className="text-xl text-white font-semibold">Software development training at Teach2Give</h3>
            <p className="text-gray-300">May 2024 - July 2024</p>
            <p className="text-gray-400 mt-2">Gained skills in software development using technologies like react, Typescript, Drizzle-orm, Postgre and Neon Database and Microsoft Azure. </p>
              <br />
              <button className="bg-blue-900 hover:bg-blue-700 text-gray-200 hover:scale-105 transition:duration-600 font-bold py-2 px-4 rounded transition duration-300">
 see certificate.
</button>
          </div>
        </div>
        
      </div>
      
      
    </div>
  );
};

export default Experience;
