import React from 'react';
import { SlArrowRight } from "react-icons/sl";
import { motion } from 'framer-motion';
import herobg from '../images/herobg.png';
import hometitle from '../images/herotitle.png';
import { GoArrowRight } from "react-icons/go";
import sunroom from '../images/sunroom.png'
import louver from '../images/louver.png'
import pergola from '../images/pergola.png'
import designimg from '../images/designimg.png'
const Home = () => {
  return (
   <>
    <motion.div
  className="home flex flex-col items-start justify-between px-6 md:px-20 lg:px-32 py-12 md:py-24 lg:py-32"
  style={{
    backgroundImage: `url(${herobg})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '100vh',
  }}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.5 }}
>
  <motion.div
    className="home-title uppercase justify-center text-5xl md:text-5xl lg:text-7xl pt-16 md:pt-28 lg:pt-36 text-white"
    initial={{ y: -50 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <h1 className="font-semibold leading-tight">
      Live Sustainable <br />
    </h1>
    <div className="wrapper xl:flex flex-col xl:flex-row md:flex-row items-center gap-6 xl:gap-10 md:block md:gap-12 hidden lg:gap-12 mt-6">
      <h1 className="font-normal">Feel the nature with</h1>
      <img src={hometitle} className="scale-90 md:scale-100 lg:scale-110" alt="hometitle" />
    </div>
  </motion.div>

  <motion.div
    className="home-bottom text-white flex flex-col md:flex-row items-center gap-6 md:gap-8 lg:gap-12 mt-8"
    initial={{ y: 50 }}
    animate={{ y: 0 }}
    transition={{ duration: 0.5 }}
  >
    <a 
      href='./sunroom' 
      className="wrapper hover:bg-black hover:text-white transition-all ease-in-out duration-200 hover:border-black border border-white p-4 md:p-6 lg:p-8 rounded-full flex items-center"
    >
      <SlArrowRight className="text-2xl md:text-3xl lg:text-4xl" />
    </a>
    <div className="wrapper text-lg md:text-xl lg:text-2xl text-center md:text-left">
      <h1 className="font-semibold">Sunroom</h1>
      <h1>GALAX</h1>
    </div>
  </motion.div>
</motion.div>

<motion.div
  className="about bg-[#F0F2F3] px-6 py-16 md:px-12 lg:px-20 xl:px-28 2xl:px-40"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <motion.div
    className="about-top px-4 md:px-8 lg:px-16"
    initial={{ y: -30, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    <motion.p
      className="pb-8 text-base md:text-lg lg:text-xl"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.7 }}
    >
      Sustainable Outdoor Living Structures I Custom Pergolas, Sunrooms, Louvers & ADU Modules
    </motion.p>

    <motion.h1
      className="text-2xl md:text-3xl lg:text-4xl leading-relaxed md:leading-loose lg:leading-normal"
      initial={{ x: -50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.7 }}
    >
      Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar. Ac <br className="hidden md:block" />
      hendrerit nisl rhoncus nisl tempus. Ante quis sed nibh cras. Ornare ullamcorper libero at elementum enim morbi pulvinar. <br className="hidden md:block" />
      Ac hendrerit nisl rhoncus nisl tempus.
    </motion.h1>

    <motion.div
      className="wrapper pt-8 text-xl md:text-2xl lg:text-3xl flex items-center gap-4 text-[#11A3FF] cursor-pointer"
      transition={{ type: "spring", stiffness: 300 }}
    >
      <GoArrowRight />
      <h1>Learn More</h1>
    </motion.div>
  </motion.div>

  <motion.div
    className="about-bottom mt-16 px-6 md:px-12 lg:px-20 xl:px-32"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.8, duration: 1 }}
  >
    <motion.h1
      className="text-3xl md:text-4xl lg:text-5xl font-semibold text-center mb-12"
      initial={{ y: 30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      Meet Our Collection
    </motion.h1>

    <motion.div
      className="cards grid grid-cols-1 md:grid-cols-3 gap-12 xl:flex xl:items-center "
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2,
          },
        },
      }}
    >
      <motion.div
        className="card text-center"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <img src={pergola} alt="Pergola" className="mx-auto mb-4" />
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">Pergola</h1>
      </motion.div>

      <motion.div
        className="card text-center"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <img src={sunroom} alt="Sunroom" className="mx-auto mb-4" />
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">Sunroom</h1>
      </motion.div>

      <motion.div
        className="card text-center"
        variants={{
          hidden: { opacity: 0, y: 20 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <img src={louver} alt="Louver" className="mx-auto mb-4" />
        <h1 className="text-xl md:text-2xl lg:text-3xl font-semibold">Louver</h1>
      </motion.div>
    </motion.div>
  </motion.div>
</motion.div>
<motion.div
  className="whyoutdoor bg-gray-50 px-6 py-16 md:px-12 lg:px-20 xl:px-36"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <motion.h1
    className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mb-4"
    initial={{ y: -50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.8, ease: 'easeOut' }}
  >
    Why OUTDOOR
  </motion.h1>

  <motion.h3
    className="text-lg md:text-xl lg:text-2xl font-medium text-center mb-12"
    initial={{ y: 50, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ delay: 0.2, duration: 0.8 }}
  >
    Enhance your living environment. <br />
    Unmatched quality, innovation, and affordability
  </motion.h3>

  <motion.div
    className="infos grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16 lg:gap-20"
    initial="hidden"
    animate="visible"
    variants={{
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: {
          delayChildren: 0.3,
          staggerChildren: 0.2,
        },
      },
    }}
  >
    <motion.div
      className="info p-4 bg-white shadow-md rounded-md"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <h1 className="text-blue-400 text-xl md:text-2xl lg:text-3xl font-semibold">
        Increase the value of <br /> your property
      </h1>
      <h3 className="text-gray-600 text-sm md:text-base mt-4">
        Our products are designed to improve the quality of life for homeowners and increase the value of your property.
      </h3>
    </motion.div>

    <motion.div
      className="info p-4 bg-white shadow-md rounded-md"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <h1 className="text-blue-400 text-xl md:text-2xl lg:text-3xl font-semibold">
        Increase the value of <br /> your property
      </h1>
      <h3 className="text-gray-600 text-sm md:text-base mt-4">
        Our products are designed to improve the quality of life for homeowners and increase the value of your property.
      </h3>
    </motion.div>

    <motion.div
      className="info p-4 bg-white shadow-md rounded-md"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <h1 className="text-blue-400 text-xl md:text-2xl lg:text-3xl font-semibold">
        Increase the value of <br /> your property
      </h1>
      <h3 className="text-gray-600 text-sm md:text-base mt-4">
        Our products are designed to improve the quality of life for homeowners and increase the value of your property.
      </h3>
    </motion.div>

    <motion.div
      className="info p-4 bg-white shadow-md rounded-md"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <h1 className="text-blue-400 text-xl md:text-2xl lg:text-3xl font-semibold">
        Increase the value of <br /> your property
      </h1>
      <h3 className="text-gray-600 text-sm md:text-base mt-4">
        Our products are designed to improve the quality of life for homeowners and increase the value of your property.
      </h3>
    </motion.div>

    <motion.div
      className="info p-4 bg-white shadow-md rounded-md"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <h1 className="text-blue-400 text-xl md:text-2xl lg:text-3xl font-semibold">
        Increase the value of <br /> your property
      </h1>
      <h3 className="text-gray-600 text-sm md:text-base mt-4">
        Our products are designed to improve the quality of life for homeowners and increase the value of your property.
      </h3>
    </motion.div>

    <motion.div
      className="info p-4 bg-white shadow-md rounded-md"
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.05 }}
      transition={{ type: 'spring', stiffness: 100 }}
    >
      <h1 className="text-blue-400 text-xl md:text-2xl lg:text-3xl font-semibold">
        Increase the value of <br /> your property
      </h1>
      <h3 className="text-gray-600 text-sm md:text-base mt-4">
        Our products are designed to improve the quality of life for homeowners and increase the value of your property.
      </h3>
    </motion.div>
  </motion.div>
</motion.div>
<motion.div 
      className="design grid grid-cols-1 md:grid-cols-2 gap-8 px-8 md:px-16 lg:px-20 py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.7 }}
    >
      <motion.div 
        className="design-left"
        initial={{ x: -50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src={designimg} alt="Design Image" className="rounded-xl w-full object-cover" />
      </motion.div>

      <motion.div 
        className="design-right justify-between bg-[#070707] flex flex-col items-start w-full p-8 md:p-10 rounded-2xl text-white"
        initial={{ x: 50 }}
        animate={{ x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="dov">
        <motion.h1 
          className="text-[#11A3FF] text-3xl md:text-4xl"
          initial={{ y: -20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Tailored
        </motion.h1>

        <motion.h1 
          className="text-3xl md:text-4xl mt-4"
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Project Design
        </motion.h1>
        </div>

        <motion.p 
          className="text-base md:text-xl text-gray-400 mt-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          We design your outdoor and backyard space to maximize the usage,
          ultimately all year around. Let’s make your dreams come true now.
        </motion.p>

        <motion.div 
          className="wrapper flex items-center text-[#11A3FF] mt-8 cursor-pointer"
          whileHover={{ scale: 1.1 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h1 className="text-xl md:text-2xl">Explore</h1>
          <GoArrowRight className="ml-2 text-2xl" />
        </motion.div>
      </motion.div>
    </motion.div>
   </>
  );
};

export default Home;
