import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost  lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
            <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? " text-xl font-bold text-green-400 "
                : ""
            }
            style={{ marginRight: "30px" }}
          >
       Home
          </NavLink>
          <NavLink
          to="/listedBook"
          className={({ isActive }) =>
            isActive
              ? "   rounded-lg text-green-400 "
              : " font-bold"
          }
          style={{ marginRight: "30px",}}
        >
      Listed Books
        </NavLink>

          <NavLink
            to="/PagesRead"
            className={({ isActive }) =>
            isActive
              ? " font-bold rounded-lg text-green-400"
              : " font-bold"
          }
          style={{ marginRight: "30px" }}
        >
PagesBook
        </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
            isActive
              ? " font-bold rounded-lg ::hover:text-white text-green-400"
            : ""
          }
          style={{ marginRight: "30px", }}
        >
       About Us
        </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
            isActive
              ? " font-bold rounded- text-green-400"
              : " font-bold"
          }
          style={{ marginRight: "30px" }}
        >
   Poet
        </NavLink>
            </ul>
          </div>
          <a className="  text-xl lg:text-3xl font-bold text-[#50B1C9]">
          BOOK <span className="text-green-400">STUDY</span>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " font-bold rounded-lg btn btn-outline btn-success"
                  : "text-2xl font-bold"
              }
              style={{ marginRight: "30px" }}
            >
 Home
            </NavLink>
            <NavLink
            to="/listedBook"
            className={({ isActive }) =>
              isActive
                ? "  font-bold rounded-lg btn btn-outline btn-success"
                : "text-2xl font-bold"
            }
            style={{ marginRight: "30px" }}
          >
        Listed book 
          </NavLink>

            <NavLink
              to="/PagesRead"
              className={({ isActive }) =>
              isActive
                ? "  font-bold rounded-lg btn btn-outline btn-success"
                : "text-2xl font-bold"
            }
            style={{ marginRight: "30px" }}
          >
     Pages Book
          </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
              isActive
                ? " font-bold rounded-lg ::hover:text-white btn btn-outline btn-success"
                : "text-2xl font-bold"
            }
            style={{ marginRight: "30px", }}
          >
        About Us
          </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
              isActive
                ? " font-bold rounded-lg  btn btn-outline btn-success"
                : "text-2xl font-bold"
            }
            style={{ marginRight: "30px" }}
          >
      POET
          </NavLink>

          </ul>
        </div>
        <div className="navbar-end">
        <button className="btn btn-success text-white lg:font-bold lg:text-xl mr-2 lg:mr-4">Sign In</button>
        <button className="btn bg-[#50B1C9] border-none text-white lg:font-bold lg:text-xl  mr-2 lg:mr-4">Sign Up</button>
   
     
        </div>
      </div>
    </div>
  );
};

export default Navbar;
