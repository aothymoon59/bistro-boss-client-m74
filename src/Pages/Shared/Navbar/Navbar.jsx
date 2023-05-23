import { FaBars } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <NavLink
          to="/"
          aria-label="Home"
          title="Home"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          aria-label="Contact Us"
          title="Contact Us"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Contact Us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard"
          aria-label="Dashboard"
          title="Dashboard"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Dashboard
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          aria-label="Our Menu"
          title="Our Menu"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/shop"
          aria-label="Our Shop"
          title="Our Shop"
          className={({ isActive }) => (isActive ? "active" : "default")}
        >
          Our Shop
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="flex justify-center">
      <div className="navbar-custom navbar fixed z-10 w-full max-w-[1920px] mx-auto bg-opacity-30 bg-black text-white px-5 lg:px-14 py-4 lg:py-6">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost pl-0 lg:hidden">
              <FaBars></FaBars>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-opacity-70 bg-black rounded-box w-52"
            >
              {navOptions}
            </ul>
          </div>
          <div>
            <Link to="/" className="cinzel-font">
              <span className="text-lg sm:text-2xl lg:text-[32px] text-white font-semibold sm:font-bold lg:font-black ">
                BISTRO BOSS
              </span>{" "}
              <br />{" "}
              <span className="font-medium lg:font-bold text-sm sm:text-lg lg:text-2xl lg:tracking-[0.38em]">
                Restaurant
              </span>
            </Link>
          </div>
        </div>

        <div className="navbar-end">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{navOptions}</ul>
          </div>
          <div>
            <a className="btn">Get started</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
