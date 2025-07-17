// import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Highland Pathfinders',
    description:
      'A travel blog website where users can book trips, and hotels, and document their journeys.',
    icon: '🌍',
   link:'https://www.highlandpathfinders.co.ke'
  },
  {
    id: 2,
    title: 'Carbook Master',
    description:
      'A car booking website where clients can view vehicles, check specifications, and book a vehicle.',
    icon: '🚗',
    link:'carbookmaster.co.ke'
  },
  {
    id: 3,
    title: 'Therapy Linker API',
    description:
      'A hospital management API that allows clients to check available doctors and schedule appointments.',
    icon: '🏥',
    link:'https://therapylinker-b2fjggdqh4gse0b2.southafricanorth-01.azurewebsites.net/'
  },
];
const Blogs = [
  {
    id: 1,
    title: 'Building Tustworthy AI Agents',
    description:
      'A blog post on how to build AI agents that are trustworthy and reliable. Also highlighting on the steps to secure and check on threats to the AIagents.',
    icon: '🤖',
    link:'https://techcommunity.microsoft.com/blog/educatordeveloperblog/building-trustworthy-ai-agents/4390871?WT.mc_id=%3Fwt.mc_id%3Dstudentamb_283041 https://www.highlandpathfinders.co.ke',
  },
  {
    id: 2,
    title: 'Mastering Azure Ai Fundamentals',
    description:
      'A blog post on how to master Azure AI fundamentals and how to leverage AI on other areas such as Machine Learning.',
    icon: '🤖',
    link:'https://stdntpartners-my.sharepoint.com/:w:/g/personal/emmanuel_kibet_studentambassadors_com/EVu5d-Ln90VAvryt5b7fkHABZRqUCWNOyBcOOqHn8kx4Kg?e=lcHhzA',
  },
]
const Certifications = [
  {
    id: 1,
    title: 'Microsoft Certified: Azure AI Fundamentals',
    description:
      'A certification on how to master Azure AI fundamentals and how to leverage AI on other areas such as Machine Learning.',
    icon: '🤖',
    link:'https://learn.microsoft.com/en-us/users/emmanuelkibet-9614/credentials/56526c3727ede8aa?ref=https%3A%2F%2Fwww.linkedin.com%2F',
  },
  {
    id: 2,
    title: 'JS AI BUILD-A-THON',
    description:
      'A certification on how to build AI agents using JavaScript and Node.js leveraging the OpenAI API and mastering the skills  of Generative AI, Javascript,Azure Open AI and Large Language Models.',
    icon: '🤖',
    link:'https://www.credly.com/badges/79be2837-e20b-40f8-83a7-5082beaa95a2/linked_in_profile',
  },
]
function Projects() {
  return (
    <>
    <div className="p-4 min-h-screen bg-gradient-to-r from-gray-900 to-purple-900 text-white">
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className=" p-14 rounded-lg shadow-md flex flex-col items-center text-center transition-transform transform hover:scale-105 cursor-pointer"
          >
            <div className="text-5xl mb-4">{project.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-300">{project.description}</p>
            <button className="mt-4 border-2 border-blue-600 py-2 px-6 rounded-3xl text-white bg-transparent hover:bg-blue-600 hover:text-black transition-all">
              <a href={project.link} target="_blank" rel="noopener noreferrer">See Project</a>
            </button>
          </div>
        ))}
      </div>
      


      <div className="p-6  bg-gradient-to-r from-gray-900 to-purple-900 text-white     
      mt-14">
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Blogs.map((blog) => (
          <div
            key={blog.id}
            className=" p-14 rounded-lg shadow-md flex flex-col items-center text-center transition-transform transform hover:scale-105 cursor-pointer"
          >
            <div className="text-5xl mb-4">{blog.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-300">{blog.description}</p>
            <button className="mt-4 border-2 border-blue-600 py-2 px-6 rounded-3xl text-white bg-transparent hover:bg-blue-600 hover:text-black transition-all">
              <a href={blog.link} target="_blank" rel="noopener noreferrer">Read Blog</a>
            </button>
          </div>
        ))}
      </div>
    </div>

    {/* Certifications Section */}
    <div className="p-6 bg-gradient-to-r from-gray-900 to-purple-900 text-white mt-14">
      <h1 className="text-3xl font-bold text-center text-blue-500 mb-8">Certifications</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Certifications.map((cert) => (
          <div
            key={cert.id}
            className="p-14 rounded-lg shadow-md flex flex-col items-center text-center transition-transform transform hover:scale-105 cursor-pointer"
          >
            <div className="text-5xl mb-4">{cert.icon}</div>
            <h2 className="text-xl font-semibold mb-2">{cert.title}</h2>
            <p className="text-gray-300">{cert.description}</p>
            <button className="mt-4 border-2 border-blue-600 py-2 px-6 rounded-3xl text-white bg-transparent hover:bg-blue-600 hover:text-black transition-all">
              <a href={cert.link} target="_blank" rel="noopener noreferrer">View Certificate</a>
            </button>
          </div>
        ))}
      </div>
    </div>

    </div>
    
    </>
  );
}

export default Projects;
