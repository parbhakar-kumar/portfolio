import React from 'react'
import { Link, NavLink } from "react-router-dom";
// import maneImg from "../img/mane.png";
import { FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";



function Home() {
  return (
    <div>
       <div className="meanpage bg-black w-screen h-211">
        <h3 className="text-amber-500 text-center text-5xl p-10 ">
          Myportfolio
        </h3>
        <div className="content flex flex-col md:flex-row">
          <div className="left text-amber-100 md:w-1/3 w-full">
            <p className="text-2xl text-amber-400 animate-pulse">👋Hello i'm</p>
            <h4 className="delay-200 text-3xl text-amber-800">
              Parbhakar Kumar ,
            </h4>
            <p>
              I'm a MERN Stack Developer passionate about building modern,
              responsive, and user-friendly web applications. I specialize in
              using MongoDB, Express.js, React.js, and Node.js to create
              full-stack solutions. I enjoy turning complex problems into
              simple, scalable applications with clean and efficient code. I
              have experience developing REST APIs, working with JWT
              authentication, integrating third-party APIs, and using tools like
              Git, Postman, and MongoDB Atlas. On the frontend, I focus on
              creating interactive UIs with React, often styled with Tailwind
              CSS or Bootstrap. I'm always curious to learn new technologies and
              improve my skills to deliver better and more efficient web
              solutions.
            </p>
            <div className="socal flex justify-between p-4">
              <Link to="https://www.linkedin.com/in/parbhakar-kumar?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <FaLinkedin
                  size={40}
                  className="text-amber-400 hover:text-amber-600 hover:scale-125 transition-transform duration-150"
                />
              </Link>

              <Link to="#">
                <PiInstagramLogoFill
                  size={40}
                  className="text-amber-400 hover:text-amber-600 hover:scale-125 transition-transform duration-150"
                />
              </Link>

              <Link to="#">
                <FaSquareXTwitter
                  size={40}
                  className="text-amber-400 hover:text-amber-600 hover:scale-125 transition-transform duration-150"
                />
              </Link>

              <Link to="#">
                <FaSquareGithub
                  size={40}
                  className="text-amber-400 hover:text-amber-600 hover:scale-125 transition-transform duration-150"
                />
              </Link>
            </div>
            <div className="p-5">
              <Link to="/about">
                <button className="bg-amber-400 hover:bg-amber-700 text-white font-bold py-2 px-4 rounded">
                  About Me
                </button>
              </Link>
              <a href="/img/Prab (1) (1).pdf" download="Parbhakar_Kumar_CV.pdf">
                <button>📄 Download CV</button>
              </a>
            </div>
          </div>
          <div className="right md:w-2/3 w-full mt-6 md:mt-0 flex justify-center">
            <img src="/img/mane.png" alt="sorry" className="max-w-full h-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
