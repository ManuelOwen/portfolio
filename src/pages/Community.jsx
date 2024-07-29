import React from 'react';
// import microsoftLearn from '../images/microsoft-learn.png'; 
// import csKirinyaga from '../images/cs-kirinyaga.png'; 
// import kodingKahawa from '../images/koding-kahawa.png'; 

const Community = () => {
  return (
    <div className="community font-medium text-xl w-11/12 mx-auto p-8 mt-10 text-gray-100 bg-gray-900">
      <h1 className="text-center text-blue-500 text-4xl mb-10">Community</h1>
      <div className="flex flex-col md:flex-row justify-around">
        <div className="border-2 border-gray-300 p-5 rounded-lg text-center flex flex-col items-center mb-5 bg-gray-800 mx-2">
          {/* <img src={microsoftLearn} alt="Microsoft Learn" className="w-24 mb-4" /> */}
          <h2 className="text-2xl text-blue-400">Gold Microsoft Learn Student Ambassador</h2>
          <p className="text-gray-300 my-5">A MLSA is a student leader who is passionate about technology and helps others to learn and engage with Microsoft technologies.</p>
          <button className="text-blue-400 border border-blue-400 px-4 py-2 rounded">My Bio</button>
        </div>
        <div className="border-2 border-gray-300 p-5 rounded-lg text-center flex flex-col items-center mb-5 bg-gray-800 mx-2">
          {/* <img src={csKirinyaga} alt="Computer Society of Kirinyaga" className="w-24 mb-4" /> */}
          <h2 className="text-2xl text-blue-400">Computer Society of Kirinyaga</h2>
          <p className="text-gray-300 my-5">To mobilize students from all courses to share, participate and develop technological skills for a dynamic innovative culture in the university.</p>
          <button className="text-blue-400 border border-blue-400 px-4 py-2 rounded">My Bio</button>
        </div>
        <div className="border-2 border-gray-300 p-5 rounded-lg text-center flex flex-col items-center mb-5 bg-gray-800 mx-2">
          {/* <img src={kodingKahawa} alt="Koding & Kahawa" className="w-24 mb-4" /> */}
          <h2 className="text-2xl text-blue-400">Koding & Kahawa Developers Community</h2>
          <p className="text-gray-300 my-5">The aim of the Koding and Kahawa meetups is to nurture, enable and encourage a vibrant, supportive, and inclusive coding community. My role was to collaborate with other students in a web development journey.</p>
          <button className="text-blue-400 border border-blue-400 px-4 py-2 rounded">My Bio</button>
        </div>
      </div>
    </div>
  );
};

export default Community;
