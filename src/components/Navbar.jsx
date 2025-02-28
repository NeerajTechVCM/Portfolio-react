import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; 

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const CloseMenu=()=>{
    setIsOpen(false);
  }

  return (
    <nav className="bg-[#b164fa] w-full  sticky top-0 text-white p-4 shadow-md  z-10" >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">PortFolio</div>
        <div className="hidden md:flex space-x-6">
       <a href="#home" className="block py-2 hover:underline ">Home</a>
        <a href="#about" className="block py-2 hover:underline">About</a>
        <a href="#education" className="block py-2 hover:underline">Education</a>
        <a href="#skills" className="block py-2 hover:underline">Skills</a>
       
        <a href="#projects" className="block py-2 hover:underline">Projects</a>
        <a href="#contact" className="block py-2 hover:underline">Contact</a>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

    
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden absolute left-0 top-0 w-full bg-[#dfc4f9] text-center py-4 mt-16`}
      >
        <a href="#home" className="block py-2 hover:underline" onClick={CloseMenu}>Home</a>
        <a href="#about" className="block py-2 hover:underline" onClick={CloseMenu}>About</a>
        <a href="#education" className="block py-2 hover:underline" onClick={CloseMenu}>Education</a>
        <a href="#skills" className="block py-2 hover:underline" onClick={CloseMenu}>Skills</a>
        <a href="#projects" className="block py-2 hover:underline" onClick={CloseMenu}>Projects</a>
        <a href="#contact" className="block py-2 hover:underline" onClick={CloseMenu}>Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
