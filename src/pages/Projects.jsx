import React from 'react';

const projects = [
  {
    id: 1,
    title: 'Highland Pathfinders',
    description:
      'A travel blog website where users can book trips, and hotels, and document their journeys.',
    icon: '🌍',
   link:'pathfinders.co.ke'
  },
  {
    id: 2,
    title: 'Carbook Master',
    description:
      'A car booking website where clients can view vehicles, check specifications, and book a vehicle.',
    icon: '🚗',
  },
  {
    id: 3,
    title: 'Therapy Linker API',
    description:
      'A hospital management API that allows clients to check available doctors and schedule appointments.',
    icon: '🏥',
  },
];

function Projects() {
  return (
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
            <p className='text-blue-300'>{project.link}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
