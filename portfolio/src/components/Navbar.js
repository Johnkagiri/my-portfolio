import React, { useState } from "react";
import {
  FaBars,
  FaTimes,
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#070707cd] text-gray-300">
      <div>
        <img src={Logo} alt="Logo Image" style={{ width: "100px" }} />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="nav-link cursor-pointer hover:text-blue-500"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="ml-3 cursor-pointer nav-link hover:text-blue-500"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="ml-3 cursor-pointer nav-link hover:text-blue-500"
          >
            Skills
          </Link>
        </li>
        <li>
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="ml-3 cursor-pointer nav-link hover:text-blue-500"
          >
            Projects
          </Link>
        </li>
        <li className="ml-3 cursor-pointer nav-link hover:text-blue-500">
          <a
            href=" https://drive.google.com/file/d/1vngXjNyf6fQfIpG6-kx7woYh_xi63a87/view "
            target="_blank"
          >
            Resume
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#040405] hover:bg-blue-600 flex flex-col justify-center items-center"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          {" "}
          <a
            href="https://drive.google.com/file/d/1vngXjNyf6fQfIpG6-kx7woYh_xi63a87/view"
            target="blank"
          >
            <Link onClick={handleClick} smooth={true} duration={500}>
              Resume
            </Link>
          </a>
        </li>
      </ul>

      {/* Social icons */}
      <div className="  lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[130px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/john-kagiri-93770b262"
              target="blank"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[130px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/Johnkagiri"
              target="blank"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[130px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-300 bg-[#29a527]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://kagirijohn124@gmail.com"
              target="blank"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[130px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[1px] duration-300 bg-[#27b2b9]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://drive.google.com/file/d/1vngXjNyf6fQfIpG6-kx7woYh_xi63a87/view"
              target="blank"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
