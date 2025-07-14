import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import { PiInstagramLogoFill } from "react-icons/pi";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import Project from "../Project/Project";
import aboutImg from '../../../img/about.png';
import webImg from '../../../img/web.png';
import apiImg from '../../../img/api.png';

function About() {
  return (
    <div>
      <div className="aboutsektion bg-black">
        <div className="top">
          <div className="l">
            <div>
              <h1 className="text-amber-500 p-3 text-3xl"> About Me </h1>
            </div>
            <p className="text-amber-50">
              👋 Hi, I'm Parbhakar Kumar 🎓 BCA Student | 💻 Full Stack MERN
              Developer | 🌐 Passionate About Web Technologies I'm currently
              pursuing a Bachelor of Computer Applications (BCA) at Rabindranath
              Tagore University, Bhopal. With a strong foundation in programming
              and a passion for building web applications, I’ve grown from a
              frontend enthusiast into a Full Stack Web Developer, skilled in
              the MERN Stack (MongoDB, Express.js, React.js, Node.js). 🔧 Tech
              Skills: 💡 Frontend: HTML, CSS, JavaScript, React.js, Tailwind CSS
              🛠️ Backend: Node.js, Express.js 🗃️ Database: MongoDB 🌍 RESTful
              APIs | Git & GitHub | Deployment (Railway, Netlify, Vercel) 📜 I
              hold certifications in Java and JavaScript from reputed
              institutions and continuously work on hands-on projects to
              strengthen my real-world skills. I enjoy building responsive,
              user-friendly apps and learning new technologies to stay updated
              with industry trends. 🚀 Currently Working On: Building real-world
              projects to enhance my resume and prepare for full-time roles in
              web development and software engineering.
            </p>

            <div className="socal  ">
              <Link
                to="https://www.linkedin.com/in/parbhakar-kumar?utm_source=
            share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              >
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
          </div>
          <div className="r">
            <img
              className=" img ml-64 h-1px w-1px"
              src={aboutImg}
              alt="sorry"
            />
          </div>
        </div>
      </div>
      <div className="max-w-5/6 h-2/3 bg-white border-8 border-white rounded-4xl mx-auto shadow-2xl -mt-32 p-5">
        <div className="flex p-12">
          <div className="w-1/2">
            <img
              className="img-icons z-10 absolute"
              src={webImg}
              alt=""
            />
            <div className="bg-img-icon"></div>
            <div className="text-3xl font-extrabold">Web Development</div>
            <div className="pt-5 font-bold m-2">
              Skilled in building full-stack web applications using modern
              technologies like React.js, MongoDB, and SQL. I create responsive
              user interfaces, develop RESTful APIs, and ensure smooth
              integration between frontend and backend. Experienced in deploying
              applications on platforms like Railway.app and working with tools
              such as Git, RapidAPI, and Chart.js to deliver real-time data and
              insightful analytics.
            </div>
          </div>
          <div className="w-1/2">
            <img src={apiImg} className="img-icons z-10 absolute" alt="" />
            <div className="bg-img-icon"></div>
            <div className="text-3xl font-extrabold">API Development</div>
            <div className="pt-5 font-bold m-2">
              Experienced in designing and building RESTful APIs using Node.js
              and Express.js within the MERN stack. I focus on creating scalable
              and secure endpoints to enable seamless communication between
              frontend and backend systems. Skilled in implementing CRUD
              operations, handling JSON-based request/response formats, and
              integrating third-party APIs using platforms like RapidAPI.
            </div>
          </div>
        </div>
      </div>
      <Project />
    </div>
  );
}

export default About;
