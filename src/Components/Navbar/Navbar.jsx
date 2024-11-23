import { Squash as Hamburger } from "hamburger-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleDrop = () => {
    setOpen(!isOpen);
  };

  const links = (
    <>
      <li>
        <NavLink
          onClick={handleDrop}
          className={({ isActive }) =>
            isActive
              ? "border rounded-lg border-[#23BE0A] text-[#23BE0A] text-lg font-semibold lg:py-3 p-1 lg:px-4 px-3"
              : "lg:py-3 lg:px-4 text-lg border border-transparent duration-500 lg:mx-[2px] hover:text-[#23BE0A] transform text-[#131313CC]"
          }
          to={"/"}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={handleDrop}
          className={({ isActive }) =>
            isActive
              ? "border rounded-lg border-[#23BE0A] text-[#23BE0A] text-lg font-semibold lg:py-3 p-1 lg:px-4 px-3"
              : "lg:py-3 lg:px-4 text-lg border border-transparent duration-500 lg:mx-[2px] hover:text-[#23BE0A] transform text-[#131313CC]"
          }
          to={"/listedBooks"}
        >
          Listed Books
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={handleDrop}
          className={({ isActive }) =>
            isActive
              ? "border rounded-lg border-[#23BE0A] text-[#23BE0A] text-lg font-semibold lg:py-3 p-1 lg:px-4 px-3"
              : "lg:py-3 lg:px-4 text-lg border border-transparent duration-500 lg:mx-[2px] hover:text-[#23BE0A] transform text-[#131313CC]"
          }
          to={"/pageToRead"}
        >
          Page to Read
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={handleDrop}
          className={({ isActive }) =>
            isActive
              ? "border rounded-lg border-[#23BE0A] text-[#23BE0A] text-lg font-semibold lg:py-3 p-1 lg:px-4 px-3"
              : "lg:py-3 lg:px-4 text-lg border border-transparent duration-500 lg:mx-[2px] hover:text-[#23BE0A] transform text-[#131313CC]"
          }
          to={"newBooks"}
        >
          New Books
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={handleDrop}
          className={({ isActive }) =>
            isActive
              ? "border rounded-lg border-[#23BE0A] text-[#23BE0A] text-lg font-semibold lg:py-3 p-1 lg:px-4 px-3"
              : "lg:py-3 lg:px-4 text-lg border border-transparent duration-500 lg:mx-[2px] hover:text-[#23BE0A] transform text-[#131313CC]"
          }
          to={"help"}
        >
          Help
        </NavLink>
      </li>
    </>
  );

  return (
    <nav className="lg:mx-32 mx-4 lg:mt-12 mt-5 font-sans">
      <div className="flex justify-between items-center">
        {/***** hamburger menu *****/}
        <div className="lg:hidden relative flex flex-col">
          <div className="w-4 duration-500 transform">
            <Hamburger size={28} toggled={isOpen} toggle={setOpen} />
          </div>

          <div
            className={`flex absolute duration-1000 transform top-12 shadow-md rounded-xl w-48 bg-gray-100 z-20 ${
              isOpen ? "left-0" : "-left-60"
            }`}
          >
            <ul className="my-3 space-y-1 rounded-lg px-4">{links}</ul>
          </div>
        </div>
        {/***** Website Name *****/}
        <div>
          <Link
            className="lg:text-4xl text-[27px] bg-gradient-to-r from-green-500 to-indigo-400 text-transparent bg-clip-text font-bold"
            to={"/"}
          >
            Book Vibe
          </Link>
        </div>
        {/***** middle nav link *****/}
        <div className="hidden lg:flex">
          <ul className="flex">{links}</ul>
        </div>
        <div className="flex gap-2 lg:gap-4">
          <button className="bg-[#23BE0A] lg:px-7 px-2 lg:py-[14px] py-2 rounded-lg text-white lg:text-lg duration-500 transform border border-transparent lg:font-semibold green-hover">
            Sign In
          </button>
          <button className="bg-[#59C6D2] lg:px-7 px-2 lg:py-[14px] py-2 rounded-lg text-white duration-500 transform lg:text-lg lg:font-semibold border border-transparent teal-hover">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
