import { Link, NavLink, useLocation } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { CiHeart } from "react-icons/ci";

const Navbar = () => {
  const location = useLocation();

  return (
    <div className="pt-6 container px-4 mx-auto">
      <div
        className={`navbar ${
          location.pathname === "/" ? "bg-primary text-white" : "bg-transparent"
        } rounded-t-xl px-16`}
      >
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
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <NavLink
                className={({ isActive }) =>
                  `font-bold px-4 py-2 rounded ${
                    isActive
                      ? "bg-black text-white"
                      : "hover:bg-black text-black hover:text-white"
                  }`
                }
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold px-4 py-2 rounded ${
                    isActive
                      ? "bg-black text-white"
                      : "hover:bg-black text-black hover:text-white"
                  }`
                }
                to="/statistics"
              >
                Statistics
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold px-4 py-2 rounded ${
                    isActive
                      ? "bg-black text-white"
                      : "hover:bg-black text-black hover:text-white"
                  }`
                }
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <NavLink
                className={({ isActive }) =>
                  `font-bold px-4 py-2 rounded ${
                    isActive
                      ? "bg-black text-white"
                      : "hover:bg-black text-black hover:text-white"
                  }`
                }
                to="/support"
              >
                Support
              </NavLink>
            </ul>
          </div>
          <Link to="/" className="font-bold text-xl">
            Gadget Heaven
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-8 font-bold">
            <NavLink
              className={({ isActive }) =>
                `font-bold px-4 py-2 rounded ${
                  isActive
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                }`
              }
              to="/"
            >
              Home
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold px-4 py-2 rounded ${
                  isActive
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                }`
              }
              to="/statistics"
            >
              Statistics
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold px-4 py-2 rounded ${
                  isActive
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                }`
              }
              to="/dashboard"
            >
              Dashboard
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                `font-bold px-4 py-2 rounded ${
                  isActive
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                }`
              }
              to="/support"
            >
              Support
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end gap-4">
          <div className="bg-white flex justify-center items-center h-8 w-8 rounded-full">
            <BsCart className="text-black"></BsCart>
          </div>
          <div className="bg-white flex justify-center items-center h-8 w-8 rounded-full">
            <CiHeart className="text-black"></CiHeart>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
