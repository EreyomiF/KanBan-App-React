import React from 'react';
import ImageComponent from './ImageComponent';
import chick from '../assets/icons/chick.png';
import Unicorn from '../assets/icons/unicorn-clipart-transparent-20.png';
import jackpot from '../assets/icons/jackpot.png';

const GridWithBoxes = () => {
  return (
    <div className="p-2 mb-4 rounded-lg mt-8">
      <div className="grid grid-cols-3 gap-4 mt-4">
        <div className="flex flex-col items-center justify-center text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
          <ImageComponent src={chick} alt="Add Up" className="w-6 h-6 mb-2" />
          <span className="leading-tight">New</span>
        </div>

        <div className="flex flex-col items-center justify-center text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">
          <ImageComponent src={Unicorn} alt="Chick" className="w-10 h-10 mb-1" />
          <span className="leading-tight">Ongoing</span>
        </div>

        <div className="flex flex-col items-center justify-center text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900">
          <ImageComponent src={jackpot} alt="Unicorn" className="w-9 h-9 mb-1" />
          <span className="leading-tight">Completed</span>
        </div>
      </div>
    </div>
  );
};

export default GridWithBoxes;
