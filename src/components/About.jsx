
import { motion } from 'framer-motion';
import logo from "../images/kbhs logo.webp";
import kyu from "../images/logo kyu.png";

const About = () => {
  const skills = [
    'React.js', 'Node.js', 'Express.js', 'TypeScript', 'Hono.js',
    'Drizzle ORM', 'Python', 'Django', 'Microsoft SQL Server',
    'Microsoft Azure', 'Redux Toolkit', 'Docker', 'Git', 'Redis','nest.js','tailwind css','typescript', 'tanstack query'
  ];

  return (
    <div className="w-full min-h-screen py-16 px-4 md:px-8 bg-gradient-to-r from-gray-900 to-purple-900">
      <div className="max-w-6xl mx-auto">
        {/* About Me Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
              About Me
            </h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          </div>
          <div className="max-w-3xl mx-auto bg-gray-800/60 p-8 rounded-xl backdrop-blur-sm border border-gray-700 shadow-xl">
            <p className="text-lg leading-relaxed text-gray-300">
              I am a passionate Software Engineer with hands-on experience in full-stack development. My technical arsenal includes modern JavaScript frameworks like <span className="text-blue-400">React.js, Tanstack, Typescript</span> and <span className="text-blue-400">Node.js, Drizzle orm,Hono, Nest js</span>, along with expertise in cloud platforms (<span className="text-blue-400">Microsoft Azure</span>), database management (<span className="text-blue-400">Drizzle ORM</span>, <span className="text-blue-400">MSSQL</span>), and DevOps tools (<span className="text-blue-400">Docker</span>, <span className="text-blue-400">Git</span>).
            </p>
            <p className="text-lg leading-relaxed text-gray-300 mt-6">
              Beyond coding, I contribute as a technical writer and Microsoft Learn Student Ambassador, sharing knowledge about AI and cloud technologies. I thrive in collaborative environments and am constantly exploring innovative solutions to complex problems.
            </p>
          </div>
        </motion.section>

        {/* Education Section */}
        <motion.section
          className="mb-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
              Education
            </h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {/* Kirinyaga University */}
            <motion.div
              className="bg-gray-800/60 p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 #60a5fa22' }}
            >
              <div className="flex flex-col items-center">
                <img src={kyu} className="w-28 h-28 object-contain mb-6" alt="Kirinyaga University" />
                <h2 className="text-2xl font-semibold text-white mb-2">Bachelor of Software Engineering</h2>
                <p className="text-gray-400 mb-1">Kirinyaga University</p>
                <p className="text-blue-400 font-medium">2021 - 2025 </p>
                <div className="mt-4 text-gray-400 text-sm">
                  <p>Specializing in Software Engineering, Technical blog writing, and Cloud Computing</p>
                </div>
              </div>
            </motion.div>
            {/* Koiwa Boys High School */}
            <motion.div
              className="bg-gray-800/60 p-8 rounded-xl border border-gray-700 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
              whileHover={{ scale: 1.04, boxShadow: '0 8px 32px 0 #60a5fa22' }}
            >
              <div className="flex flex-col items-center">
                <img src={logo} className="w-28 h-28 object-contain mb-6" alt="Koiwa Boys High School" />
                <h2 className="text-2xl font-semibold text-white mb-2">KCSE Certificate</h2>
                <p className="text-gray-400 mb-1">Koiwa Boys High School</p>
                <p className="text-blue-400 font-medium">2017 - 2021</p>
                <div className="mt-4 text-gray-400 text-sm">

                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400 mb-4">
              Technical Skills
            </h1>
            <div className="w-24 h-1 bg-blue-400 mx-auto"></div>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {skills.map((skill) => (
              <motion.div
                key={skill}
                className="bg-gray-800/70 hover:bg-gray-700 border border-gray-700 hover:border-blue-400 px-4 py-3 rounded-lg text-center transition-all duration-300 hover:scale-105 cursor-default"
                whileHover={{ scale: 1.08, backgroundColor: '#1e293b', color: '#60a5fa' }}
              >
                <span className="text-gray-300 hover:text-white font-medium">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About;