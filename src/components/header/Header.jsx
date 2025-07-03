import React from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Logo/Logo";

function Header() {
  return (
    <div>
      <div className="nav bg-gray-900 flex space-x-96">

        <Logo/>
       
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `text-2xl ${
              isActive ? "text-amber-500" : "text-white"
            } hover:text-amber-500`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/project"
          className={({ isActive }) =>
            `text-2xl ${
              isActive ? "text-amber-500" : "text-white"
            } hover:text-amber-500`
          }
        >
          Project
        </NavLink>
             <NavLink
          to="/contact"
          className={({ isActive }) =>
            `text-2xl ${
              isActive ? "text-amber-500" : "text-white"
            } hover:text-amber-500`
          }
        >
          Contect
        </NavLink>
        
      </div>
    </div>
  );
}

export default Header;
