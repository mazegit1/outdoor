import React, { useState } from 'react';
import { LuSearch } from "react-icons/lu";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import navbarlogo from '../images/navbarlogo.png';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const menuItems = [
    { name: 'Our Projects', path: './sunroom' },
    { name: 'Louver', path: './louver' },
    { name: 'Pergola', path: './pergola' },
    { name: 'Blinds', path: './blinds' },
    { name: 'Windows & Doors', path: './windows-doors' },
  ];

  return (
    <>
      <div className="header fixed w-full text-white flex items-center justify-between py-8 px-16 bg-transparent z-50">
        <a href='/' className="header-left">
          <img src={navbarlogo} alt="navbar-logo" />
        </a>
        <div className="header-right hidden md:flex items-center gap-8 text-2xl">
          {menuItems.map(item => (
            <Link key={item.name} to={item.path} className="transition-all ease-in-out duration-200 hover:text-black hover:underline">{item.name}</Link>
          ))}
          <LuSearch className='text-2xl' />
        </div>
        <div className="md:hidden">
          {isMenuOpen ? (
            <MdClose className='text-4xl' onClick={toggleMenu} />
          ) : (
            <MdOutlineMenu className='text-4xl' onClick={toggleMenu} />
          )}
        </div>
      </div>
      {isMenuOpen && (
        <motion.div
          className="mobile-menu fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 z-40 flex flex-col justify-center items-center space-y-8 text-white text-3xl md:hidden"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.3 }}
        >
          {menuItems.map(item => (
            <Link key={item.name} to={item.path} className="transition-all ease-in-out duration-200 hover:text-gray-500 hover:underline" onClick={toggleMenu}>{item.name}</Link>
          ))}
        </motion.div>
      )}
    </>
  );
};

export default Navbar;
