
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
import azure from "../images/azure.jpeg"
import Hono from "../images/honoimg.jpeg"
import drizzle from "../images/drizzle orm.png"
import Tailwind from "../images/Tilwindcss.png"
import nest from "../images/nest.jpeg"
import tanstack from "../images/tanstack-query.png"

const Technologies = () => {
  const technologies = [
    { id: 2, name: 'HTML & CSS',category:'Web', link: 'https://developer.mozilla.org/en-US/docs/Web/HTML', image: html },
    { id: 1, name: 'JavaScript',category:'Programming Language', link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript', image: javascript },
    { id: 3, name: 'React',category:'Frontend', link: 'https://reactjs.org/', image: react },
    { id: 4, name: 'Node.js',category:'Backend', link: 'https://nodejs.org/', image: node },
    { id: 5, name: 'Python',category:'Programming Language', link: 'https://www.python.org/', image: python },
    { id: 6, name: 'TypeScript',category:'Programming Language', link: 'https://www.typescriptlang.org/', image: typescript },
    { id: 7, name: 'MySQL',category:'Database', link: 'https://www.mysql.com/', image: mysql },
    { id: 8, name: 'PostgreSQL',category:'Database', link: 'https://www.postgresql.org/', image: postgresql },
    { id: 9, name: 'Figma',category:'Design', link: 'https://www.figma.com/', image: figma },
    { id: 10, name: 'Git ',category:'Version Control', link: 'https://git-scm.com/', image: git },
    { id: 11, name: 'Microsoft Azure',category:'Cloud', link: 'https://azure.microsoft.com/', image: azure },
    { id: 12, name: 'Hono ',category:'Web Framework', link: 'https://hono.dev/docs/', image: Hono },
    { id: 13, name: 'Drizzle ORM',category:'ORM', link: 'https://bestofjs.org/', image: drizzle },
    { id: 14, name: 'Tailwind CSS',category:'Web design', link: 'https://tailwindcss.com/', image: Tailwind },
    { id: 15, name: 'NestJS',category:'Web Framework', link: 'https://nestjs.com/', image: nest },
    { id: 16, name: 'Tanstack Query',category:'Data Fetching', link: 'https://tanstack.com/query/latest/', image: tanstack },

  ];
  // filter technologies by category
  const filteredTechnologies = technologies.filter(tech => tech.category === 'All' || tech.category === 'Web' || tech.category === 'Programming Language' || tech.category === 'Frontend' || tech.category === 'Backend' || tech.category === 'Database' || tech.category === 'Design' || tech.category === 'Version Control' || tech.category === 'Cloud' || tech.category === 'Web Framework' || tech.category === 'ORM' || tech.category === 'Web design' || tech.category === 'Data Fetching');


  



  return (
    <div className="w-full mx-auto p-8 mt-10 text-gray-100rounded-lg shadow-lg">
      <h1 className="text-center text-blue-500 text-4xl mb-8">Technologies</h1>
{/* buttons  to filtered technologies */}

      <div className="grid md:grid-cols-4 gap-3">
        {filteredTechnologies.map((tech) => (
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
