import React from 'react';
import html from "../images/html&css logo.png"
import javascript from "../images/js logo.png"
import react from "../images/React Logo.png"
import node from "../images/node js logo.png"
import python from "../images/python img.png"
import typescript from "../images/typescript logo.png"
import mysql from "../images/MySQL-Logo.png"
import postgresql from "../images/postgre sql.png"
import figma from "../images/figma logo.png"
import git from "../images/git logo.jpg"
import azure from "../images/azure logo.jpg"

const Technologies = () => {
  const technologies = [
    { id: 2, name: 'HTML & CSS', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML', image: html },
    { id: 1, name: 'JavaScript', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', image: javascript },
    { id: 3, name: 'React', link: 'https://reactjs.org/', image: react },
    { id: 4, name: 'Node.js', link: 'https://nodejs.org/', image: node },
    { id: 5, name: 'Python', link: 'https://www.python.org/', image: python },
    { id: 6, name: 'TypeScript', link: 'https://www.typescriptlang.org/', image: typescript },
    { id: 7, name: 'MySQL', link: 'https://www.mysql.com/', image: mysql },
    { id: 8, name: 'PostgreSQL', link: 'https://www.postgresql.org/', image: postgresql },
    { id: 9, name: 'Figma', link: 'https://www.figma.com/', image: figma },
    { id: 10, name: 'Git ', link: 'https://git-scm.com/', image: git },
    { id: 11, name: 'Microsoft Azure', link: 'https://azure.microsoft.com/', image: azure },
  ];

  return (
    <div className="w-full mx-auto p-8 mt-10 text-gray-100rounded-lg shadow-lg">
      <h1 className="text-center text-blue-500 text-4xl mb-8">Technologies</h1>
      <div className="grid md:grid-cols-4 gap-3">
        {technologies.map((tech) => (
          <div key={tech.id} className="p-4 rounded-lg text-center flex flex-col items-center mb-5  justify-center transform transition-transform duration-300 hover:scale-105 shadow-md hover:shadow-lg">
            <img src={tech.image} alt={tech.name} className="w-20 mb-4" />
            <h2 className="text-xl text-blue-400 font-semibold">{tech.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Technologies;
