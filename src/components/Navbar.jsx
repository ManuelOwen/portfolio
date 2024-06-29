

const Navbar = () => {
    return (
<div className="navbar bg-white md:flex md:items-center md: justify-between">
  {/* <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4 6h16M4 12h16M4 18h16"></path>
      </svg>
    </button>
  </div> */}
  <div className="flex-1">
    {/* <a className="btn btn-ghost text-xl">daisyUI</a> */}
    <div className="items"  class ="flex-end"> 
      <ul class ="md:flex md:items-center">
        <li 
       class ="flex-end cursor-pointer text-20px hover:text-cyan-500 duration-500 mx-4">Introduction
        </li>
        <li 
        
        class ="flex-end cursor-pointer text-20px hover:text-cyan-500 duration-500 mx-4 ">About

        </li>
        <li 
        class ="flex-end cursor-pointer text-20px hover:text-cyan-500 duration-500 mx-4">Skills
        </li>
        <li 
        class ="flex-end cursor-pointer text-20px hover:text-cyan-500 duration-500 mx-4">Experience
        </li>
        <li
         class ="flex-end cursor-pointer text-20px hover:text-cyan-500 duration-500 mx-4 ">Technologies
         </li>
       

      </ul>

    </div>
  </div>
  {/* <div className="flex-none">
    <button className="btn btn-square btn-ghost">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        className="inline-block h-5 w-5 stroke-current">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path>
      </svg>
    </button>
  </div> */}
</div>
    )
};

export default Navbar;
