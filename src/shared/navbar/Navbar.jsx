import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
                ? "  border-white"
                : "text-xl font-bold"
            }
            style={{ marginRight: "30px" }}
          >
          <button class="text-green-300">Home</button>
          </NavLink>
          <NavLink
          to="/listedBook"
          className={({ isActive }) =>
            isActive
              ? " text-white  rounded-lg"
              : " font-bold"
          }
          style={{ marginRight: "30px" }}
        >
        <button class="  text-green-300">Listed Books</button>
        </NavLink>

          <NavLink
            to="/PagesRead"
            className={({ isActive }) =>
            isActive
              ? " text-white font-bold rounded-lg"
              : " font-bold"
          }
          style={{ marginRight: "30px" }}
        >
        <button class="text-green-300">PagesBook</button>
        </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
            isActive
              ? " text-white font-bold rounded-lg ::hover:text-white"
              : " font-bold"
          }
          style={{ marginRight: "30px", }}
        >
        <button class="text-green-300">Contact</button>
        </NavLink>

          <NavLink
            to="/blog"
            className={({ isActive }) =>
            isActive
              ? " text-white font-bold rounded-lg"
              : " font-bold"
          }
          style={{ marginRight: "30px" }}
        >
        <button class="text-green-300">Book Item</button>
        </NavLink>
            </ul>
          </div>
          <a className="btn btn-ghost text-xl lg:text-3xl font-bold text-black">
            Book Review
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? " text-white font-bold rounded-lg"
                  : "text-2xl font-bold"
              }
              style={{ marginRight: "30px" }}
            >
            <button class="btn btn-outline btn-success">Home</button>
            </NavLink>
            <NavLink
            to="/listedBook"
            className={({ isActive }) =>
              isActive
                ? " text-white font-bold rounded-lg"
                : "text-2xl font-bold"
            }
            style={{ marginRight: "30px" }}
          >
          <button class="btn btn-outline btn-success">Listed Books</button>
          </NavLink>

            <NavLink
              to="/PagesRead"
              className={({ isActive }) =>
              isActive
                ? " text-white font-bold rounded-lg"
                : "text-2xl font-bold"
            }
            style={{ marginRight: "30px" }}
          >
          <button class="btn btn-outline btn-success">PagesBook</button>
          </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
              isActive
                ? " text-white font-bold rounded-lg ::hover:text-white"
                : "text-2xl font-bold"
            }
            style={{ marginRight: "30px", }}
          >
          <button class="btn btn-outline btn-success hover:text-white">Contact</button>
          </NavLink>

            <NavLink
              to="/blog"
              className={({ isActive }) =>
              isActive
                ? " text-white font-bold rounded-lg"
                : "text-2xl font-bold"
            }
            style={{ marginRight: "30px" }}
          >
          <button class="btn btn-outline btn-success">Book Item</button>
          </NavLink>

          </ul>
        </div>
        <div className="navbar-end">
        <button className="btn btn-success text-white lg:font-bold lg:text-xl mr-2 lg:mr-4">Sign In</button>
        <button className="btn btn-accent text-white lg:font-bold lg:text-xl  mr-2 lg:mr-4">Sign Up</button>
   
     
        </div>
      </div>
    </div>
  );
};

export default Navbar;
