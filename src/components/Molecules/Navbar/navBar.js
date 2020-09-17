import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  const [navhandler, setnavhandler] = useState(false);
  const handlernav = () => {
    setnavhandler(!navhandler);
  };
  return (
    <>
      <div className="bg-white px-4 md:px-8 flex items-center justify-between shadow relative">
        <div className="flex justify-between items-center">
          <div className="w-12">
            <img src="qy0ctxjhdgvvj6e4ra10 (1).png" alt="brand-logo" />
          </div>
          <div className="pr-4 pl-2 font-bold text-3xl">
            <p>Workfull</p>
          </div>
          <div className="items-center hidden md:flex">
            {/*<ul>
        <li>Dashboard</li>
        <li>Team</li>
        <li>Projects</li>
        <li>Calender</li>
        </ul>*/}
            <Link to="/">
              <div className="mx-4 py-6 font-normal text-gray-600 cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-blue-500">
                <p className="">Home</p>
              </div>
            </Link>

            <Link to="/our-team">
              <div className="mx-4 py-6 font-normal text-gray-600 cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-blue-500">
                <p className="">Team</p>
              </div>
            </Link>
            <Link to="/blog">
            <div className="mx-4 py-6 font-normal text-gray-600 cursor-pointer border-b-2 border-transparent hover:border-b-2 hover:border-blue-500">
              <p className="cursor-pointer">Blog</p>
            </div>
            </Link>
          </div>
        </div>
        <div className="flex items-center hidden md:flex">
          <div className="pr-5">
            <i
              className="fa fa-bell-o cursor-pointer hover:text-blue-600"
              aria-hidden="true"
            ></i>
          </div>
          <div className="h-8 w-8">
            <img
              src="feed-image1.png"
              className="rounded-full"
              alt="profile-logo"
            />
          </div>
        </div>
        <div className="flex md:hidden" onClick={handlernav}>
          <i
            className="fa fa-bars fa-2x hover:text-indigo-700"
            aria-hidden="true"
          ></i>
        </div>
      </div>
      {navhandler && (
        <div className="md:hidden text-white fixed z-20 right-0 bottom-0 top-0 w-2/4 flex bg-indigo-600 pl-8">
          <div className="w-full pr-4 pt-5">
            <div className="closer flex justify-end items-center cursor-pointer">
              <i
                className="fa fa-times"
                aria-hidden="true"
                onClick={handlernav}
              ></i>
              <p className="ml-1 text-base" onClick={handlernav}>
                Close
              </p>{" "}
            </div>
            {/**nav item */}
            <div className="pt-4 text-lg">
              <Link to="/">
                <p>Home</p>
              </Link>
            </div>
            <div className="pt-4 text-lg">
              <Link to="/our-team">
                <p>Team</p>
              </Link>
            </div>
            <div className="pt-4 text-lg">
            <Link to="/blog">    
            <p>Blog</p>
            </Link>
            </div>
            {/**nav item end*/}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
