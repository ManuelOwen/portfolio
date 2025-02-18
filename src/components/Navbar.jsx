

const Navbar = () => {
  return (
    <div className="navbar bg-gradient-to-r from-black via-gray-900 to-purple-900 text-white flex items-center justify-center px-6 py-4">
    <div className="flex-2">
        <ul className="flex items-center justify-center space-x-10">
            <li className="cursor-pointer text-sm uppercase hover:text-blue-400 duration-500">Introduction</li>
            <li className="cursor-pointer text-sm uppercase hover:text-blue-400 duration-500">About</li>
            <li className="cursor-pointer text-sm uppercase hover:text-blue-400 duration-500">Skills</li>
            <li className="cursor-pointer text-sm uppercase hover:text-blue-400 duration-500">Experience</li>
            <li className="cursor-pointer text-sm uppercase hover:text-blue-400 duration-500">Technologies</li>
        </ul>
    </div>
</div>
  );
};

export default Navbar;
