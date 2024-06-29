import React from 'react'
import bg from "../images/background.jpeg"

const Introduction = () => {
  return (
    <div className="hero bg-base-200 min-h-screen m-0 p-0">
    <div className="hero-content flex-col lg:flex-row m-0 p-0 pb-0">
      <img
        className="mt-0 max-w-sm rounded-lg shadow-2xl"
        src={bg}
        alt="Background"
      />
      <div>
        <h1 className="text-5xl font-bold text-red-900">Hello,</h1>
        <h1 className="text-5xl font-bold">I am Emmanuel Kibet</h1>
        <p className="py-6">
          I am a passionate software developer with keen interest in web development, cloud services, and mobile development. I am a self-taught developer with a strong desire to learn and grow in the tech industry.
        </p>
        <button className="btn btn-primary">Download Resume</button>
      </div>
    </div>
  </div>
  
)
}

export default Introduction