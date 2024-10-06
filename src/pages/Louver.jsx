import React from 'react';
import { GoArrowRight } from "react-icons/go";
import { motion } from 'framer-motion';
import bottom from '../images/bottom.png';
import moreimg from '../images/moreimg.png';
import { FaChevronRight } from 'react-icons/fa';
import { HiOutlineHomeModern } from 'react-icons/hi2';
import { GoLocation } from 'react-icons/go';

const Louver = () => {
  return (
    <>
      <motion.div 
        className="hero px-6 md:px-20 py-32 md:py-48 bg-[#d6d6d6]"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="hero-top">
          <div className="flex flex-col md:flex-row items-start justify-between">
            <motion.h1 
              className="text-4xl md:text-6xl mb-8 md:mb-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              Family House With <br /> Garden
            </motion.h1>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4 bg-[#bdbdbe] w-fit px-4 py-2 text-xl md:text-2xl rounded-2xl">
                <GoLocation />
                <p>Trani - Italy</p>
              </div>
              <div className="flex items-center gap-4 bg-[#bdbdbe] w-fit px-4 py-2 text-xl md:text-2xl rounded-2xl">
                <HiOutlineHomeModern />
                <p>Sloped Pergolas, Glass walls</p>
              </div>
            </div>
          </div>
          <motion.div 
            className="py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <h1 className="text-lg md:text-2xl">
              Scelerisque netus at ornare duis facilisis diam placerat. <br />
              Rhoncus lacus eu porttitor et nibh suscipit cursus sollicitudin. <br />
              Sit gravida aliquam amet tellus vitae morbi. Feugiat ac tincidunt euismod amet ante sed aliquam cursus. Posuere vulputate quis.
            </h1>
          </motion.div>
        </div>
        <motion.div 
          className="hero-bottom"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <img src={moreimg} className="overflow-hidden rounded-2xl" alt="More" />
        </motion.div>
      </motion.div>

      <div className="cards px-6 md:px-20 py-20 grid gap-8 grid-cols-1 md:grid-cols-[1fr_2fr]">
        <div className="top grid gap-8 md:grid-cols-2">
          <motion.div 
            className="rounded-xl shadow-xl px-4 py-6 border border-black"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h1 className="text-3xl md:text-4xl font-medium">Project needs</h1>
            <h3 className="text-lg md:text-xl text-gray-500 mt-4">
              Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget duis elit lectus turpis leo molestie.
              Cras quis libero porttitor faucibus. Scelerisque nec mattis.
            </h3>
          </motion.div>
          <motion.div 
            className="rounded-xl shadow-xl px-4 py-6 border border-black"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <h1 className="text-3xl md:text-4xl font-medium">Project features</h1>
            <h3 className="text-lg md:text-xl text-gray-500 mt-4">
              Id lorem sapien lectus hendrerit dignissim dui facilisis viverra eleifend. A non vehicula sit eget consequat.
              Nisi erat at mattis quisque.
            </h3>
            <h3 className="text-lg md:text-xl text-gray-500 mt-4">
              Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget duis elit lectus turpis leo molestie. 
              Cras quis libero porttitor faucibus. Scelerisque nec mattis.
            </h3>
          </motion.div>
        </div>

        <div className="bottom grid gap-8 md:grid-cols-2">
          <div className="bottom-left shadow-xl border border-black rounded-xl p-4">
            <div className="wrapper mb-8">
              <p>USED PRODUCTS</p>
              <h1 className="uppercase text-xl md:text-4xl font-medium">Sloped Pergola used in <br /> this Project</h1>
              <h3 className="text-lg md:text-xl text-gray-500 mt-4">
                Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget duis elit lectus turpis leo molestie.
                Cras quis libero porttitor faucibus. Scelerisque nec mattis.
              </h3>
            </div>
            <motion.div 
              className="w-fit flex gap-8 text-xl md:text-2xl items-center border-2 rounded-full py-2 px-4 cursor-pointer transition-all ease-in-out duration-200 border-black hover:bg-black hover:text-white"
              initial={{ scale: 0.9 }}
              whileHover={{ scale: 1.05 }}
            >
              <a href='/'>Find Out More</a>
              <FaChevronRight />
            </motion.div>
          </div>
          <motion.div 
            className="bottom-right"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            <img src={bottom} alt="Bottom " />
          </motion.div>
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

export default Louver;
