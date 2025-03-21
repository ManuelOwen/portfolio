import { useState } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react"; // Icons for mobile menu

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-purple/70 backdrop-blur-lg text-white p-4 rounded-lg z-50"> 
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6 text-lg">
        {["home", "about", "experience", "technologies", "community", "projects"].map((item) => (
          <li key={item}>
            <Link
              to={item}
              smooth={true}
              duration={500}
              className="cursor-pointer hover:text-purple-400 transition"
            >
              {item.charAt(0).toUpperCase() + item.slice(1)}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button 
        className="md:hidden flex items-center justify-center text-white" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <ul className="absolute top-16 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-lg p-6 rounded-lg flex flex-col items-center gap-4 md:hidden">
          {["home", "about", "experience", "technologies", "community", "projects"].map((item) => (
            <li key={item}>
              <Link
                to={item}
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-purple-400 transition text-lg"
                onClick={() => setIsOpen(false)} // Close menu on click
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}

export default Navbar;
