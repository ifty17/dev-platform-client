import React from 'react';
import { AiFillHome, AiFillMessage } from "react-icons/ai";
import { TfiLayoutMediaOverlay } from "react-icons/tfi";
import { ImProfile } from "react-icons/im";
import { Link } from 'react-router-dom';

const Navbar = () => {

    const navItems = (
      <React.Fragment>
        <Link to='/' className="flex flex-col justify-center items-center text-stone-700 hover:text-black">
          <span>
            <AiFillHome className="text-2xl"></AiFillHome>
          </span>
          <span className="">Home</span>
        </Link>
        <Link to='/media' className="flex flex-col justify-center items-center text-stone-700 hover:text-black">
          <span>
            <TfiLayoutMediaOverlay className="text-2xl"></TfiLayoutMediaOverlay>
          </span>
          <span>Media </span>
        </Link>
        <Link to='/about' className="flex flex-col justify-center items-center text-stone-700 hover:text-black">
          <span>
            <ImProfile className="text-2xl"></ImProfile>
          </span>
          <span>About </span>
        </Link>
        <Link to='/message' className="flex flex-col justify-center items-center text-stone-700 hover:text-black">
          <span>
            <AiFillMessage className="text-2xl"></AiFillMessage>
          </span>
          <span>Message </span>
        </Link>
      </React.Fragment>
    );
    const nav = (
      <React.Fragment>
        <Link to='/' className=" flex flex-row ml-3 items-center gap-2 ">
          <span>
            <AiFillHome className="text-2xl"></AiFillHome>
          </span>
          <span className="">Home</span>
        </Link>
        <Link to='/media' className="py-2 flex flex-row ml-3 items-center gap-2">
          <span>
            <TfiLayoutMediaOverlay className="text-2xl"></TfiLayoutMediaOverlay>
          </span>
          <span>Media </span>
        </Link>
        <Link to='/about' className="py-2 flex flex-row ml-3 items-center gap-2">
          <span>
            <ImProfile className="text-2xl"></ImProfile>
          </span>
          <span>About</span>
        </Link>
        <Link to='/message' className="flex flex-row ml-3 items-center gap-2">
          <span>
            <AiFillMessage className="text-2xl"></AiFillMessage>
          </span>
          <span>Message </span>
        </Link>
      </React.Fragment>
    );

    return (
      <div className="navbar bg-white">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
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
            </label>
            <ul
              tabIndex={0}
              className="menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              {nav}
            </ul>
          </div>
          <Link to='/' className="md:mx-3 font-bold text-xl md:text-2xl text-stone-700 hover:text-black">
            Dev Platform
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex ">
          <ul className="flex items-center gap-10 justify-center mr-10">
            {navItems}
          </ul>
        </div>
      </div>
    );
};

export default Navbar;