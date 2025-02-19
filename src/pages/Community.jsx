import React from 'react';
import beta from '../images/LevelBeta.png';
import csk from '../images/logo csk.png';

const Community = () => {
  const education = [
    {
      id: 1,
      name: 'Beta Microsoft Learn Student Ambassador',
      description: 'An MLSA is a student leader who is passionate about technology and helps others to learn and engage with Microsoft technologies.',
      link: 'https://mvp.microsoft.com/en-US/studentambassadors/profile/042927b6-a2fb-44d4-8e4c-11219be52ea1',
      image: beta,
    },
    {
      id: 2,
      name: 'Computer Society of Kirinyaga',
      description: 'To mobilize students from all courses to share, participate and develop technological skills for a dynamic innovative culture in the university.',
      link: 'https://www.linkedin.com/company/computer-society-of-kirinyaga/posts/?feedView=all',
      image: csk,
    },
  ];

  return (
    <div className="w-full mx-auto p-8 mt-10 text-gray-100 rounded-lg shadow-lg">
      <h1 className="text-left text-blue-400 text-5xl font-bold mb-6">🌍 COMMUNITY ENGAGEMENT 🧑🏻‍🤝‍🧑🏾</h1>
 
      <div className='grid md:grid-cols-2 gap-8 '>
        {education.map((school) => (
          <div key={school.id} className='flex flex-col items-center text-center hover:scale-105  p-6 rounded-lg shadow-md hover:shadow-xl transition duration-300'>
            <img src={school.image} alt={school.name} className='mb-3 rounded-lg' width={150} height={120} />
            <h6 className='text-2xl my-4 text-blue-400 font-semibold'>{school.name}</h6>
            <p className='text-gray-300 '>{school.description}</p>
            <button className="mt-4 border-2 border-blue-600 py-2 px-6 rounded-3xl text-white bg-transparent hover:bg-blue-600 hover:text-black transition-all">
              <a href={school.link} target="_blank" rel="noopener noreferrer">My Bio</a>
            </button>
          </div>
        ))}
      </div>
      
    
    </div>
  );
};

export default Community;
