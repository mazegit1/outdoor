import React from 'react';
import { SlArrowRight } from "react-icons/sl";
import { motion } from 'framer-motion';
import herobg from '../images/herobg.png';
import hometitle from '../images/herotitle.png';

const Home = () => {
  return (
   <>
    <motion.div
      className="home flex flex-col items-start justify-between px-4 md:px-16 lg:px-20 py-10 md:py-20"
      style={{
        backgroundImage: `url(${herobg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100vw',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="home-title uppercase text-4xl md:text-6xl lg:text-8xl pt-24 md:pt-32 lg:pt-48 text-white"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className='font-semibold'>live sustainable <br /></h1>
        <div className="wrapper flex flex-col md:flex-row items-center gap-4 md:gap-8">
          <h1 className='font-normal'>feel the nature with</h1>
          <img src={hometitle} className='scale-75 md:scale-90 lg:scale-110' alt="hometitle" />
        </div>
      </motion.div>
      <motion.div
        className="home-bottom text-white flex flex-col md:flex-row items-center gap-4 md:gap-6"
        initial={{ y: 50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <a 
          href='./sunroom' 
          className="wrapper hover:bg-black hover:text-white transition-all ease-in-out duration-200 hover:border-black border border-white p-4 md:p-6 rounded-full flex items-center"
        >
          <SlArrowRight className='text-2xl md:text-3xl' />
        </a>
        <div className="wrapper text-lg md:text-xl lg:text-2xl text-center md:text-left">
          <h1 className='font-semibold'>Sunroom</h1>
          <h1>GALAX</h1>
        </div>
      </motion.div>
    </motion.div>
    <div className="about">
      <div className="about-top">
      
      </div>
    <div className="about-bottom">
      
    </div>
    </div>
   </>
  );
};

export default Home;
