import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineKeyboardArrowDown } from 'react-icons/md';
import projecttop from '../images/projects-top.png';
import { GoLocation } from "react-icons/go";
import { HiOutlineHomeModern } from "react-icons/hi2";
import project1 from '../images/project1.png';  
import project2 from '../images/project2.png';       
import project3 from '../images/project3.png';       
import project4 from '../images/project4.png';       
import project5 from '../images/project5.png';       
import project6 from '../images/project6.png';       
import project7 from '../images/project7.png';       
import project8 from '../images/project8.png';       
import project9 from '../images/project9.png';       
import { GoArrowRight } from "react-icons/go";

import { FaChevronRight } from "react-icons/fa";

const Sunroom = () => {
  const handleScrollDown = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <div className="our-projects bg-[#e7e7e9] min-h-screen flex flex-col justify-between">
        <motion.div 
          className="top w-full"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={projecttop} className="w-full pt-8" alt="Project" />
        </motion.div>

        <motion.div 
          className="bottom grid md:grid-cols-2 grid-rows-2 xl:grid-cols-2 md:px-32 px-8 xl:px-48 py-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <motion.div 
            className="left flex-col gap-12 flex items-start"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="text-4xl md:text-6xl">Our Projects</h1>
            <motion.div 
              className="wrapper cursor-pointer flex items-center gap-4"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScrollDown}
            >
              <MdOutlineKeyboardArrowDown className="text-5xl md:text-6xl border border-gray-400 rounded-full hover:bg-black hover:text-white transition-all ease-in-out duration-200" />
              <h1 className="text-3xl md:text-4xl font-medium">Scroll Down</h1>
            </motion.div>
          </motion.div>

          <motion.div 
            className="right flex items-start flex-col gap-6"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <h3 className="text-lg md:text-xl">
              Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar. 
              Ac hendrerit nisl rhoncus nisl tempus. Ante quis sed nibh cras. Ornare ullamcorper libero 
              at elementum enim morbi pulvinar. Ac hendrerit nisl.
            </h3>
            <motion.div 
              className="wrapper"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a 
                href="/" 
                className="bg-black w-fit text-white px-4 py-2 text-2xl md:text-3xl cursor-pointer hover:bg-white hover:text-black transition-all ease-in-out duration-200 hover:border-black border active:text-black rounded-3xl"
              >
                Home
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="cards md:grid-cols-2 md:gap-8 grid-cols-1 grid xl:grid-cols-3 xl:gap-12 xl:grid-rows-3 md:px-24 px-12 gap-6 xl:px-32 py-12 bg-[#eee]">
        <div className="card1 bg-white border border-gray-800 px-4 py-2 w-fit rounded-3xl flex flex-col items-start gap-12">
          <img src={project1} alt="" />
          <div className="wrapper gap-4 flex flex-col items-start">
          <h1 className='text-4xl font-semibold'>Villa with garden</h1>
          <div className="wrapper flex items-center gap-4 bg-[#bdbdbe] w-fit px-4 py-2 text-2xl rounded-2xl">
            <GoLocation />

            <p>Trani - Italy</p>
          </div>
           <div className="wrapper flex items-center gap-4 bg-[#bdbdbe] w-fit px-4 py-2 text-2xl rounded-2xl">
           <HiOutlineHomeModern />

            <p>Sloped Pergolas, Glass walls</p>
          </div>
          </div>
<div className="wrapper flex gap-20 text-2xl items-center border-2 rounded-full py-2 px-4 hover:bg-black hover:text-white cursor-pointer transition-all ease-in-out duration-200 border-black">
<h1>Find Out More</h1>
<FaChevronRight />
</div>
        </div>
        <div className="card1 bg-white border border-gray-800 px-4 py-2 w-fit rounded-3xl flex flex-col items-start gap-12">
          <img src={project2} alt="" />
          <div className="wrapper gap-4 flex flex-col items-start">
          <h1 className='text-4xl font-semibold'>Villa with garden</h1>
          <div className="wrapper flex items-center gap-4 bg-[#bdbdbe] w-fit px-4 py-2 text-2xl rounded-2xl">
            <GoLocation />

            <p>Trani - Italy</p>
          </div>
           <div className="wrapper flex items-center gap-4 bg-[#bdbdbe] w-fit px-4 py-2 text-2xl rounded-2xl">
           <HiOutlineHomeModern />

            <p>Sloped Pergolas, Glass walls</p>
          </div>
          </div>
<div className="wrapper flex gap-20 text-2xl items-center border-2 rounded-full py-2 px-4 hover:bg-black hover:text-white cursor-pointer transition-all ease-in-out duration-200 border-black">
<h1>Find Out More</h1>
<FaChevronRight />
</div>
        </div>
        <div className="card1 bg-white border border-gray-800 px-4 py-2 w-fit rounded-3xl flex flex-col items-start gap-12">
          <img src={project3} alt="" />
          <div className="wrapper gap-4 flex flex-col items-start">
          <h1 className='text-4xl font-semibold'>Villa with garden</h1>
          <div className="wrapper flex items-center gap-4 bg-[#bdbdbe] w-fit px-4 py-2 text-2xl rounded-2xl">
            <GoLocation />

            <p>Trani - Italy</p>
          </div>
           <div className="wrapper flex items-center gap-4 bg-[#bdbdbe] w-fit px-4 py-2 text-2xl rounded-2xl">
           <HiOutlineHomeModern />

            <p>Sloped Pergolas, Glass walls</p>
          </div>
          </div>
<div className="wrapper flex gap-20 text-2xl items-center border-2 rounded-full py-2 px-4 hover:bg-black hover:text-white cursor-pointer transition-all ease-in-out duration-200 border-black">
<h1>Find Out More</h1>
<FaChevronRight />
</div>
        </div>
        <div className="card1 bg-white border border-gray-800 px-4 py-2 w-fit rounded-3xl flex flex-col items-start gap-12">
          <img src={project4} alt="" />
          <div className="wrapper gap-4 flex flex-col items-start">
          <h1 className='text-4xl font-semibold'>Villa with garden</h1>
          <div className="wrapper flex items-center gap-4 bg-[#bdbdbe] w-fit px-4 py-2 text-2xl rounded-2xl">
            <GoLocation />

            <p>Trani - Italy</p>
          </div>
           <div className="wrapper flex items-center gap-4 bg-[#bdbdbe] w-fit px-4 py-2 text-2xl rounded-2xl">
           <HiOutlineHomeModern />

            <p>Sloped Pergolas, Glass walls</p>
          </div>
          </div>
<div className="wrapper flex gap-20 text-2xl items-center border-2 rounded-full py-2 px-4 hover:bg-black hover:text-white cursor-pointer transition-all ease-in-out duration-200 border-black">
<h1>Find Out More</h1>
<FaChevronRight />
</div>
        </div>
        <div className="card1 bg-white border border-gray-800 px-4 py-2 w-fit rounded-3xl flex flex-col items-start gap-12">
          <img src={project5} alt="" />
          <div className="wrapper gap-4 flex flex-col items-start">
          <h1 className='text-4xl font-semibold'>Villa with garden</h1>
          <div className="wrapper flex items-center gap-4 bg-[#bdbdbe] w-fit px-4 py-2 text-2xl rounded-2xl">
            <GoLocation />

            <p>Trani - Italy</p>
          </div>
           <div className="wrapper flex items-center gap-4 bg-[#bdbdbe] w-fit px-4 py-2 text-2xl rounded-2xl">
           <HiOutlineHomeModern />

            <p>Sloped Pergolas, Glass walls</p>
          </div>
          </div>
<div className="wrapper flex gap-20 text-2xl items-center border-2 rounded-full py-2 px-4 hover:bg-black hover:text-white cursor-pointer transition-all ease-in-out duration-200 border-black">
<h1>Find Out More</h1>
<FaChevronRight />
</div>
        </div>
        <div className="card1 bg-white border border-gray-800 px-4 py-2 w-fit rounded-3xl flex flex-col items-start gap-12">
          <img src={project6} alt="" />
          <div className="wrapper gap-4 flex flex-col items-start">
          <h1 className='text-4xl font-semibold'>Villa with garden</h1>
          <div className="wrapper flex items-center gap-4 bg-[#bdbdbe] w-fit px-4 py-2 text-2xl rounded-2xl">
            <GoLocation />

            <p>Trani - Italy</p>
          </div>
           <div className="wrapper flex items-center gap-4 bg-[#bdbdbe] w-fit px-4 py-2 text-2xl rounded-2xl">
           <HiOutlineHomeModern />

            <p>Sloped Pergolas, Glass walls</p>
          </div>
          </div>
<div className="wrapper flex gap-20 text-2xl items-center border-2 rounded-full py-2 px-4 hover:bg-black hover:text-white cursor-pointer transition-all ease-in-out duration-200 border-black">
<h1>Find Out More</h1>
<FaChevronRight />
</div>
        </div>
        <div className="card1 bg-white border border-gray-800 px-4 py-2 w-fit rounded-3xl flex flex-col items-start gap-12">
          <img src={project7} alt="" />
          <div className="wrapper gap-4 flex flex-col items-start">
          <h1 className='text-4xl font-semibold'>Villa with garden</h1>
          <div className="wrapper flex items-center gap-4 bg-[#bdbdbe] w-fit px-4 py-2 text-2xl rounded-2xl">
            <GoLocation />

            <p>Trani - Italy</p>
          </div>
           <div className="wrapper flex items-center gap-4 bg-[#bdbdbe] w-fit px-4 py-2 text-2xl rounded-2xl">
           <HiOutlineHomeModern />

            <p>Sloped Pergolas, Glass walls</p>
          </div>
          </div>
<div className="wrapper flex gap-20 text-2xl items-center border-2 rounded-full py-2 px-4 hover:bg-black hover:text-white cursor-pointer transition-all ease-in-out duration-200 border-black">
<h1>Find Out More</h1>
<FaChevronRight />
</div>
        </div>
        <div className="card1 bg-white border border-gray-800 px-4 py-2 w-fit rounded-3xl flex flex-col items-start gap-12">
          <img src={project8} alt="" />
          <div className="wrapper gap-4 flex flex-col items-start">
          <h1 className='text-4xl font-semibold'>Villa with garden</h1>
          <div className="wrapper flex items-center gap-4 bg-[#bdbdbe] w-fit px-4 py-2 text-2xl rounded-2xl">
            <GoLocation />

            <p>Trani - Italy</p>
          </div>
           <div className="wrapper flex items-center gap-4 bg-[#bdbdbe] w-fit px-4 py-2 text-2xl rounded-2xl">
           <HiOutlineHomeModern />

            <p>Sloped Pergolas, Glass walls</p>
          </div>
          </div>
<div className="wrapper flex gap-20 text-2xl items-center border-2 rounded-full py-2 px-4 hover:bg-black hover:text-white cursor-pointer transition-all ease-in-out duration-200 border-black">
<h1>Find Out More</h1>
<FaChevronRight />
</div>
        </div>
        <div className="card1 bg-white border border-gray-800 px-4 py-2 w-fit rounded-3xl flex flex-col items-start gap-12">
          <img src={project9} alt="" />
          <div className="wrapper gap-4 flex flex-col items-start">
          <h1 className='text-4xl font-semibold'>Villa with garden</h1>
          <div className="wrapper flex items-center gap-4 bg-[#bdbdbe] w-fit px-4 py-2 text-2xl rounded-2xl">
            <GoLocation />

            <p>Trani - Italy</p>
          </div>
           <div className="wrapper flex items-center gap-4 bg-[#bdbdbe] w-fit px-4 py-2 text-2xl rounded-2xl">
           <HiOutlineHomeModern />

            <p>Sloped Pergolas, Glass walls</p>
          </div>
          </div>
<div className="wrapper flex gap-20 text-2xl items-center border-2 rounded-full py-2 px-4 hover:bg-black hover:text-white cursor-pointer transition-all ease-in-out duration-200 border-black">
<h1>Find Out More</h1>
<FaChevronRight />
</div>
        </div>
        </div>
      </div>
      <div className="errorinput text-white text-2xl justify-center flex items-center flex-col gap-8 text-center py-12 px-24 bg-[#1D1D1D] xl:my-20 my-12 mx-auto">
  <h1>Couldn’t Find What You Are Looking For ?</h1> 
  <div className="wrapper">
    <p className='text-xl'>We are always ready to help you to get the best out of our services <br />
    <span className='text-[#11A3FF] text-xl'>7 / 24 Active Service</span></p>
  </div>
  <a href='https://mazegit-portfolio.netlify.app/contacts' className="wrapper rounded-3xl py-4 px-8 overflow-hidden flex items-center gap-6 bg-white text-black">
    <h1>Request a Project</h1>
    <GoArrowRight className='text-white bg-black rounded-full p-3 text-5xl'/>
  </a>
</div>

    </>
  );
};

export default Sunroom;
