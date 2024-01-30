import React, { useState } from 'react';
import ImageComponent from './ImageComponent'; 
import addup from '../assets/icons/addup.png';
import Dots from '../assets/icons/three-dots.svg';

const AddTask = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="p-2 mb-4 rounded-lg mt-10">
      <div className="absolute right-0 p-2">
        <button 
          className="relative flex items-center justify-between text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm sm:text-base px-3 py-2 sm:px-5 sm:py-2.5 me-2 mb-2 rounded p-4"
        >
          <button type="button" className="p-2 rounded-full text-white">
            <ImageComponent src={addup} alt="Add Up" className="w-4 h-4" />
          </button>
          <span className="leading-tight">Create new task</span>
          <button 
            type="button"
            id="dropdownHoverButton"
            onClick={toggleDropdown}
            className="p-2 rounded-full text-white"
          >
            <ImageComponent src={Dots} alt="Add Up" className="w-4 h-4" />
          </button>
        </button>
        <div
          id="dropdownHover"
          className={`z-10 ${isDropdownOpen ? '' : 'hidden'} absolute right-0 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownHoverButton"
          >
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                New task
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Ongoing task
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Completed task
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AddTask;
