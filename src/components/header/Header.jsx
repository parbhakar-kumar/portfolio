import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
      <div className="nav bg-gray-900 flex space-x-96">
        <Link to="/">
          <div className="logo flex text-white text-2xl">
            My<p className="text-amber-400">Portfloio</p>
          </div>
        </Link>

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
