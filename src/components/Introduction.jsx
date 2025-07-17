import { motion } from 'framer-motion';
import owen from '../images/OWENK.jpg';
import Navbar from './Navbar';

const socialLinks = [
  { name: 'Linkedin', url: 'https://www.linkedin.com/in/kibet-emmanuel-592a4a259/' },
  { name: 'Github', url: 'https://github.com/ManuelOwen' },
  { name: 'Twitter', url: 'https://x.com/OwenMannu' },
];

const Introduction = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-gray-900 to-purple-900 flex flex-col">
      <Navbar />
      {/* Resume Button */}
      <div className="absolute top-8 right-12 z-20">
        <a href="https://drive.google.com/file/d/1DhJ4-jVvdpDn-xbRO_R-khSQndLsOgOA/view?usp=sharing" target="_blank" rel="noopener noreferrer">
          <button className="btn transition-all duration-500 shadow-sm bg-primary py-2 px-4 rounded-xl text-white hover:bg-white hover:text-primary font-semibold tracking-wide">
            Download CV
          </button>
        </a>
      </div>
      <div className="flex flex-1 items-stretch justify-between px-0 relative w-full">
        {/* Left: Text */}
        <motion.div
          className="flex-1 max-w-xl z-10 flex flex-col justify-center px-8 lg:ml-24 md:ml-16"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          {/* description */}
          <div className="h-1 w-12 bg-blue-400 mb-8 rounded"></div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8">
            Hello, I&apos;m Emmanuel Kibet,<br />
            <span className="text-gray-300">a software engineer &amp; technical writer currently based in Kenya.</span>
          </h1>
          <div className="flex gap-8 mt-6">
            {socialLinks.map(link => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase tracking-wider text-gray-400 hover:text-blue-400 transition text-lg font-medium"
                whileHover={{ scale: 1.15, y: -4, color: '#60a5fa', textShadow: '0px 4px 16px #60a5fa' }}
                whileTap={{ scale: 0.95 }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
        {/* Right: Full-bleed Image with fade border, flush right */}
        <motion.div
          className="hidden lg:flex relative w-1/2 h-full min-h-screen z-0 justify-end"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <div className="absolute right-0 top-0 w-full h-full">
            <img
              src={owen}
              alt="Profile"
              className="w-full h-full object-cover object-center brightness-75"
              style={{ minHeight: '100vh', WebkitMaskImage: 'linear-gradient(to left, transparent 0%, #6d28d9 30%, #111827 100%)', maskImage: 'linear-gradient(to left, transparent 0%, #6d28d9 30%, #111827 100%)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-black/60 to-black/90 pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Introduction;
