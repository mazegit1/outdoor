import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using React Router
import { motion } from 'framer-motion'; // Import Framer Motion
import footertitle from '../images/footertitle.png';

const Footer = () => {
  const menuItems = [
    { name: 'Sunroom', path: './sunroom' },
    { name: 'Louver', path: './louver' },
    { name: 'Pergola', path: './pergola' },
    { name: 'Blinds', path: './blinds' },
    { name: 'Windows & Doors', path: './windows-doors' },
  ];

  return (
    <div className="footer px-6 md:px-20 py-10 bg-[#070707] text-white">
      <div className="top flex-col gap-4 flex items-center justify-center text-center">
        <motion.img 
          src={footertitle} 
          alt="Footer image" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 1 }}
        />
        <motion.p 
          initial={{ y: 20, opacity: 0 }} 
          animate={{ y: 0, opacity: 1 }} 
          transition={{ duration: 1, delay: 0.2 }}
        >
          Sustainable Outdoor Living Structures | Custom Pergolas, Sunrooms, Louvers & ADU Modules
        </motion.p>
      </div>
      <hr className='my-8' />
      <div className="subtop pt-8">
        <ul className="menu-items grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 text-2xl md:text-3xl px-4 md:px-20">
          {menuItems.map((item, index) => (
            <li key={index}>
              <motion.div 
                whileHover={{ scale: 1.1, color: '#FFD700' }} // Animation on hover
                transition={{ duration: 0.3 }}
              >
                <Link to={item.path}>{item.name}</Link>
              </motion.div>
            </li>
          ))}
        </ul>
      </div>
      <hr className='mt-16' />
      <div className="footer-contacts flex flex-col md:flex-row items-center justify-between px-4 md:px-20 py-4 text-xl">
        <div className="contact flex flex-col items-start gap-2">
          <h1>Contact</h1>
          <h3>Baku, Azerbaijan</h3>
        </div>
        <div className="contact flex flex-col items-start gap-2">
          <a href="mailto:editor.azer@gmail.com">Email Me</a>
          <a href="tel:+994556881500">Call Me: 055 688 15 00</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
