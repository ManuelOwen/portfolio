import React from 'react'
import logo from "../images/kbhs logo.webp"
import kyu from "../images/logo kyu.png"

const About = () => {
  return (
<div class="about  font-medium text-xl w-11/12 mx-auto p-8 mt-10">
  <h1 class="text-center text-red-50 text-4xl">About me</h1>
  <p class="text-justify leading-8">
    I am a software Engineering student in Kirinyaga University, Kirinyaga County, Kenya.
    Throughout my academic journey, I have not only gained theoretical knowledge but also honed practical skills, crafting a robust foundation in software engineering. I am proficient in a versatile tech stack, I have excelled in developing dynamic user interfaces using React.js, building scalable backends with Node.js and Express.js, and optimizing data management with Microsoft SQL Server. My expertise is extended to the cloud with the Microsoft Azure platform, state management using Redux Toolkit, efficient caching with Redis, containerization with Docker, and collaborative version control with Git.
    Beyond academics, I have an unwavering commitment to learning, and I am poised for a future of continued growth and innovation in the ever-evolving field of software engineering.
  </p>
<h1 className='text-red-50 text-center text-4xl'>Education</h1>
  <div class="campo border border-maroon p-5 text-center flex flex-col items-center">
    <div class="item inline-flex items-center mb-5">
      <img src={kyu} class="logo w-24 mr-5" />
      <div>
        <h2 class="text-left">Kirinyaga University</h2>
        <p class="text-left">Bachelor of Science in Software Engineering</p> 
        <p class="text-left">
          2021-2025
        </p>

      </div>
    </div>
  </div>
  <div class="campo border border-maroon p-5 text-center flex flex-col items-center">
    <div class="item inline-flex items-center mb-5">
      <img src={logo} class="logo w-24 mr-5" />
      <div>
        <h2 class="text-left">Koiwa Boys High School</h2>
        <p class="text-left">Kenya Certificate of Secondary Education</p> 
        <p class="text-left">
          2017-2021
        </p>

      </div>
    </div>
  </div>
</div>


  

  
  )
}

export default About
