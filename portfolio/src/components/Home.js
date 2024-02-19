import React from "react";
import { Link } from "react-scroll";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className=" h-screen  ">
      {/* Container */}
      <div className="md:w-9/12 md:m-auto pt-28">
        <div className="md:max-w-[1000px] mx-auto ml-6 md:ml-0 md:px-8 p-6 flex flex-col justify-center h-full ">
          <p className="text-blue-400">Hi, my name is</p>
          <h1 className="md:text-4xl font-bold text-[#ccd6f6]">JOHN NJOROGE</h1>
          <h2 className="  text-4xl md:text-7xl font-bold text-[#8892b0]">
            I'm a Full Stack Developer.
          </h2>
          <p className="text-[#8892b0] md:py-4 md:max-w-[700px]">
            I’m a full-stack developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently,
            I’m focused on building responsive full-stack web applications.
          </p>
          <div>
            <Link
              to="work" // Specify the target section's name
              smooth={true}
              duration={500}
              spy={true}
              offset={-80} // Adjust the offset if needed to correctly position the target section
            >
              <button className="text-white group border-2 md:px-6 md:py-3 md:my-2 flex items-center hover:bg-blue-600 hover:border-blue-600">
                View Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="md:ml-3 " />
                </span>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
