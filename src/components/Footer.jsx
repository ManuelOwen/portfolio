


const Footer = () => {
  return (
    <footer className="w-full  text-center py-6 mt-10 rounded-t-lg shadow-lg">
      <nav className="flex justify-center space-x-6 mb-4">
        <a className="hover:text-blue-400" href="#">Introduction</a>
        <a className="hover:text-blue-400" href="#">About</a>
        <a className="hover:text-blue-400" href="#">Skills</a>
        <a className="hover:text-blue-400" href="#">Experience</a>
        <a className="hover:text-blue-400" href="#">Technologies</a>
      </nav>
      <div className="flex justify-center space-x-4 mb-4">
        {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white"><FaLinkedin size={24} /></a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white"><FaTwitter size={24} /></a>
        <a href="https://wa.me" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white"><FaWhatsapp size={24} /></a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white"><FaFacebook size={24} /></a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-white"><FaInstagram size={24} /></a> */}
      </div>
      <p className="text-sm">Copyright © {new Date().getFullYear()} - All rights reserved by Emmanuel Kibet</p>
    </footer>
  );
};

export default Footer;