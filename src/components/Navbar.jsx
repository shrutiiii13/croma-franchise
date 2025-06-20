import React, { useState } from "react";
import logo from "../assets/images/logo/sham-logo.webp";
import { Link, NavLink } from "react-router";
import DehazeIcon from "@mui/icons-material/Dehaze";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState();
  return (
    <div className="">
      <nav className="w-full h-[clamp(5rem,8vw,6rem)] bg-stone-100  fixed shadow-md z-50 flex items-center text-black justify-between ">
        <div className="flex items-center text-black">
          <NavLink to="/">
            <img src={logo} className="w-[clamp(60px,5vw,120px)]" alt="logo" />
          </NavLink>
          <div className="text-center">
            <h1 className="font-bold text-[clamp(1.2rem,2.5vw,2rem)]">
              Shyamsunder Corporation
            </h1>
            <p className="text-[clamp(0.7rem,2.5vw,1.2rem)] font-light ">
              A Multi-Franchise Company | Official Croma Partner
            </p>
          </div>
        </div>

        <div className="md:hidden">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="text-2xl p-1"
          >
            <DehazeIcon />
          </button>
        </div>

        {showMenu && (
          <li className=" absolute right-4 top-full mt-2 bg-stone-100 shadow rounded flex flex-col gap-2 p-2 z-50 ">
            <ul className=" px-4 py-2 bg-gray-600 text-xl text-white rounded">
              <NavLink to="/">Home</NavLink>
            </ul>
            <ul className=" px-4 py-2 bg-gray-600 text-xl text-white rounded">
              <NavLink to="/contactus">Contact Us</NavLink>
            </ul>
          </li>
        )}
        {/* <div className="hidden md:flex">
          <button className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded transition duration-300 border-1.6">
            Visit Our Croma Store
          </button>
        </div> */}
        <div>
          <li className="hidden md:flex text-[clamp(1.2rem,2.5vw,1.6rem)] mr-5 ">
            <ul className="mr-5 hover:text-gray-400 transition-colors ease-in-out font-light">
              <NavLink to="/">Home</NavLink>
            </ul>
            <ul className="mr-5 hover:text-gray-400  transition-colors ease-in-out font-light">
              <NavLink to="/contactus">Contact Us</NavLink>
            </ul>
          </li>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
