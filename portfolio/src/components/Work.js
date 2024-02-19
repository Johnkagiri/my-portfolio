import React from "react";
import { FaGithub, FaLink } from "react-icons/fa";
// import { data } from '../data/data.js';

const Work = () => {
  return (
    <div name="work">
      <h1 className="text-white text-4xl md:w-9/12 md:m-auto">
        <b>Projects</b>
      </h1>
      <div className=" p-1 text-white w-full md:w-9/12 md:m-auto grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-4 text-center py-8">
        {/* project bank */}
        <div className=" md:p-3 shadow-md shadow-[#486d9c] hover:scale-110 duration-500">
          <div className=" flex flex-row ">
            <a
              href="https://github.com/Johnkagiri/PROJBANK"
              target="_blank"
              className=" ml-1 "
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://project-bank-wjjt.onrender.com"
              target="blank"
              className=" ml-1 "
            >
              <FaLink size={20} style={{ color: "blue" }} />
            </a>{" "}
          </div>
          <h1 className="my-4 font-bold">Project storage system</h1>
          <p className="text-sm">
            This is a full-stack project with APIs and a database. It is a
            school system to store student projects and cohorts. md:
          </p>
        </div>
        {/* Bethel */}
        <div className="shadow-md shadow-[#486d9c] hover:scale-110 duration-500 md:p-3">
          <div className=" flex flex-row ">
            <a
              href="https://github.com/Johnkagiri/Bethel-garden"
              target="_blank"
              className=" ml-1 "
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://bethel.onrender.com"
              target="blank"
              className=" ml-1 "
            >
              <FaLink size={20} style={{ color: "blue" }} />
            </a>{" "}
          </div>
          <h1 className="my-4 font-bold">Bethel</h1>
          <p className="text-sm">
            This is a front end project to help market a tent, chairs, sound
            system and picnic ground hiring business.{" "}
          </p>
        </div>
        {/* blog */}
        <div className="shadow-md shadow-[#486d9c] hover:scale-110 duration-500 md:p-3">
          <div className=" flex flex-row ">
            <a
              href="https://github.com/Johnkagiri/blogs"
              target="_blank"
              className=" ml-1 "
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://blog-m5ra.onrender.com/"
              target="blank"
              className=" ml-1 "
            >
              <FaLink size={20} style={{ color: "blue" }} />
            </a>{" "}
          </div>
          <h1 className="my-4  font-bold">Blogs website</h1>
          <p className="text-sm">
            This is a full stack projectk, which is a website to read and create
            blogs.
          </p>
        </div>
        {/* Bots p-3 */}
        <div className="shadow-md shadow-[#486d9c] hover:scale-110 duration-500 md:p-3">
          <div className=" flex flex-row ">
            <a
              href="https://github.com/Johnkagiri/BotBattlr"
              target="_blank"
              className=" ml-1 "
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://github.com/Johnkagiri/BotBattlr"
              target="blank"
              className=" ml-1 "
            >
              <FaLink size={20} style={{ color: "blue" }} />
            </a>{" "}
          </div>
          <h1 className="my-4 font-bold">Bots</h1>
          <p className="text-sm">
            This is a project to show case my ability to use APIs. Different
            bots are being fetched from my own deployed db.json API.{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
