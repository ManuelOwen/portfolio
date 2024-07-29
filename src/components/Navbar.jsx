

const Navbar = () => {
    return (
<div className="navbar bg-white md:flex md:items-center md: justify-between text-gray-900  ">

  <div className="flex-1">
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
  
</div>
    )
};

export default Navbar;
