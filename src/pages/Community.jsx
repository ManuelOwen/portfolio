import React from 'react';
import beta from '../images/LevelBeta.png';
import csk from '../images/logo csk.png';
// import kahawa from '../assets/license/kahawa.png';

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
    // {
    //   id: 3,
    //   name: 'Koding & Kahawa Developers Community',
    //   description: 'The aim of the Koding and Kahawa meetups is to nurture, enable and encourage a vibrant, supportive, and inclusive coding community. My role was to collaborate with other students in a web development journey.',
    //   link: 'https://www.linkedin.com/company/koding-kahawa/',
    //   image: kahawa,
    // },
  ];

  return (
    <div className="md:px-10 px-7 my-8" id="license">
      <hr />
      <div className="md:flex my-7 items-center justify-center">
        <div className="text-primary text-5xl font-bold items-center">🌍 Community Engagement 🧑🏻‍🤝‍🧑🏾</div>
      </div>
      <div className='grid md:grid-cols-3 my-8 gap-5 cursor-pointer'>
        {education.map((school) => (
          <div key={school.id} className='flex flex-col justify-center items-center p-6 text-center text-white'>
            <img src={school.image} alt={school.name} className='mb-3' width={150} height={120} />
            <h6 className='text-2xl my-4 text-blue-500'>{school.name}</h6>
            <p className='text-base'>{school.description}</p>
            <button className="btn border-2 border-blue-600 transition-all duration-500 py-2 px-6 rounded-3xl text-white hover:bg-blue-600 hover:text-green-500">
              <a href={school.link} target="_blank" rel="noopener noreferrer">My Bio</a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Community;
