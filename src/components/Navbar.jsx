import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className={`flex justify-between items-center w-[92%] mx-auto bg-white ${isMenuOpen ? 'mb-8' : ''}`}>
        <div>
          <div className="text-xl font-bold cursor-pointer text-black">
            IEEE
          </div>
        </div>
        <div
          className={` duration md:static absolute bg-white text-black md:min-h-fit min-h-[60vh] ${
            isMenuOpen ? 'top-[9%]' : 'top-[-100%]'
          } md:w-auto w-full flex items-center px-5`}
        >
          <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
            <li>
              <a className="hover:text-gray  no-underline text-black" href="#">
                Home
              </a>
            </li> no-underline
            <li>
              <a className="hover:text-gray no-underline text-black" href="#">
                About
              </a>
            </li>
            <li>
              <a className="hover:text-gray no-underline text-black" href="#">
                Gallery
              </a>
            </li>
            <li>
              <a className="hover:text-gray no-underline text-black" href="#">
                Committee
              </a>
            </li>
            <li>
              <a className="hover:text-gray no-underline text-black" href="#">
                Speakers
              </a>
            </li>
            <li>
              <a className="hover:text-gray no-underline text-black" href="#">
                Registration
              </a>
            </li>
            <li>
              <a className="hover:text-gray no-underline text-black" href="#">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
        <div className="flex items-center gap-6">
          {isMenuOpen ? (
            <FaTimes
              onClick={toggleMenu}
              className="text-3xl cursor-pointer md:hidden"
            />
          ) : (
            <FaBars
              onClick={toggleMenu}
              className="text-3xl cursor-pointer md:hidden"
            />
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
