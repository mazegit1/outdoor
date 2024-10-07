import React from 'react';
import pergola1 from '../images/pergola1.png';
import pergola2 from '../images/pergola2.png';
import { GoArrowRight } from "react-icons/go";
import { motion } from 'framer-motion';
import { FaChevronRight } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import pergolaimg from '../images/pergolaimg.png';

const handleScrollDown = () => {
  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
};

const Pergola = () => {
  return (
    <>
      {/* Top Image Section */}
      <motion.div
        className="top w-full"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img src={pergolaimg} className="w-full pt-8" alt="Project" />
      </motion.div>

      {/* Main Project Section */}
      <motion.div
        className="bottom grid md:grid-cols-2 gap-12 px-8 xl:px-48 py-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <motion.div
          className="left flex flex-col gap-12 items-start"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold">Pergola</h1>
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
          className="right flex flex-col gap-6"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h3 className="text-lg md:text-xl leading-relaxed">
            Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar. 
            Ac hendrerit nisl rhoncus nisl tempus. Ante quis sed nibh cras.
          </h3>
          <motion.div
            className="wrapper"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <a
              href="/"
              className="bg-black text-white px-4 py-2 text-2xl md:text-3xl cursor-pointer hover:bg-white hover:text-black transition-all ease-in-out duration-200 hover:border-black border active:text-black rounded-3xl"
            >
              Home
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Request Section */}
      <div className="request grid grid-cols-1 md:grid-cols-2 bg-[#F0F2F3] h-auto text-black p-8 rounded-3xl mx-8 md:mx-20 my-20">
        <div className="left mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-semibold">Request information <br /> or a quote</h1>
        </div>
        <div className="right flex flex-col items-start gap-6">
          <h3 className="text-xl md:text-2xl">
            Venenatis neque odio tempor proin ultrices arcu turpis amet iaculis. Cursus maecenas tristique eget duis elit lectus turpis leo molestie. Scelerisque nec mattis.
          </h3>
          <a
            href="https://mazegit-portfolio.netlify.app/contacts"
            className="wrapper rounded-3xl py-2 px-4 text-xl hover:bg-white hover:text-black transition-all ease-in-out duration-200 border-black border flex items-center gap-6 bg-black text-white"
          >
            <h1>Request a Project</h1>
            <GoArrowRight className="text-white bg-black rounded-full p-3 text-5xl" />
          </a>
        </div>
      </div>

      {/* Cards Section */}
      <div className="cards grid grid-cols-1 md:grid-cols-2 gap-12 px-8 md:px-20 py-10">
        {[pergola1, pergola2,pergola1,pergola2].map((image, index) => (
          <motion.div
            key={index}
            className="card flex flex-col gap-4 shadow-lg p-4 rounded-lg bg-white"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <img src={image} alt={`Pergola ${index + 1}`} className="rounded-lg" />
            <h1 className="text-3xl font-bold">Sloped Pergolas</h1>
            <h3>Ante quis sed nibh cras.</h3>
            <motion.div
              className="w-fit flex gap-4 items-center border-2 rounded-full py-2 px-4 cursor-pointer transition-all ease-in-out duration-200 border-black hover:bg-black hover:text-white"
            >
              <a href="/">Find Out More</a>
              <FaChevronRight />
            </motion.div>
          </motion.div>
        ))}
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

export default Pergola;
