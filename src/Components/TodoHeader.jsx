import React from 'react';
import Chick from "../assets/icons/chick.png";
import Jackpot from "../assets/icons/jackpot.png";
import Unicorn from "../assets/icons/unicorn-clipart-transparent-20.png";

const TodoHeader = () => {
  return (
    <div className="p-2 mb-4 rounded-lg mt-14">
      <div className="grid grid-cols-3 gap-4">
        <button
          type="button"
          className="flex items-center justify-center text-gray-900 font-medium bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-red-100 dark:focus:ring-red-400 font-medium rounded-lg text-lg px-8 py-4 text-center me-2 mb-2"
        >
          <div className="flex items-center">
            <img 
              src={Chick}
              alt="user photo"
              aria-hidden="true"
              className="w-8 h-7 me-2 -ms-1"
            />
            <span className="leading-tight">New</span>
          </div>
        </button>
        <button
          type="button"
          className="flex items-center font-medium justify-center text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-lg px-8 py-4 me-2 mb-2"
        >
          <div className="flex items-center">
            <img 
              src={Unicorn}
              alt="user photo"
              aria-hidden="true"
              className="w-12 h-12 me-2 -ms-1"
            />
            
            <span className="leading-tight">In progress</span>
          </div>
        </button>
        <button
          type="button"
          className="flex items-center font-medium justify-center text-gray-900 bg-gradient-to-r from-teal-200 to-lime-200 hover:bg-gradient-to-l hover:from-teal-200 hover:to-lime-200 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-teal-700 font-medium rounded-lg text-lg px-8 py-4 me-2 mb-2"
        >
          <div className="flex items-center">
            <img 
              src={Jackpot}
              alt="user photo"
              aria-hidden="true"
              className="w-10 h-10 me-2 -ms-1"
            />
            <span className="leading-tight">Complete</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default TodoHeader;
