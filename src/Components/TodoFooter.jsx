import React from "react";
import TodoInsight from "./TodoInsight";
import TodoSke from "./TodoSke";

const TodoFooter = ({ todo }) => {
  return (
    <footer className="rounded-lg shadow-sm dark:bg-gray-900 mt-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between mb-8">
        
          <a
            href="https://flowbite.com/"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
             <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Last Projects 
            </span>

            <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs  text-neutral-300 bg-neutral-700 rounded-full">
            2
            </span>

          </a>
          <ul className="flex flex-wrap gap-6 items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
          <li>
            <a
              href="#"
              className="flex items-center space-x-2 hover:underline bg-neutral-900 rounded-xl shadow-md px-3 py-2"
            >
              {/* SVG Icon */}
              <span className="bg-neutral-800 p-1 rounded-full">
                <svg
                  className="w-4 h-4 text-gray-100 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M5 7h14M5 12h14M5 17h10"
                  />
                </svg>
              </span>

              {/* First text */}
              <span className="text-gray-100">Filters</span>

              {/* Second text */}
              <span className="inline-flex items-center justify-center w-4 h-4 text-[10px] text-indigo-400 bg-neutral-800 rounded-full shadow-sm">
                6
              </span>
            </a>
          </li>

        <li>
          <a href="#" className="flex items-center space-x-2 hover:underline">
            {/* First text */}
            <span className="text-gray-200">Color:</span>

            {/* Tiny color circles */}
            <span className="flex items-center space-x-1 ms-2">
              <span className="w-6 h-6 rounded-full bg-red-500"></span>
              <span className="w-6 h-6 rounded-full bg-yellow-400"></span>
              <span className="w-6 h-6 rounded-full bg-green-500"></span>
              <span className="w-6 h-6 rounded-full bg-sky-300"></span>
              <span className="w-6 h-6 rounded-full bg-indigo-500"></span>
            </span>
          </a>
        </li>
            <li>
              <a
                href="#"
                className="flex items-center space-x-2 px-4 py-2 bg-neutral-900 text-gray-200 shadow-lg rounded-full hover:shadow-xl transition duration-200"
              >
                {/* Edit Icon */}
                <span className="p-1 bg-neutral-800 rounded-full">
                  <svg
                    className="w-4 h-4 text-indigo-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                    />
                  </svg>
                </span>

                {/* Upload Icon */}
                <span className="p-1 bg-neutral-800 rounded-full">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 5v9m-5 0H5a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1h-2M8 9l4-5 4 5m1 8h.01"
                    />
                  </svg>
                </span>

                {/* Mic Icon */}
                <span className="p-1 bg-neutral-800 rounded-full">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8"
                    />
                  </svg>
                </span>

                {/* Bookmark Icon */}
                <span className="p-1 bg-neutral-800 rounded-full">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m17 21-5-4-5 4V3.889a.92.92 0 0 1 .244-.629.808.808 0 0 1 .59-.26h8.333a.81.81 0 0 1 .589.26.92.92 0 0 1 .244.63V21Z"
                    />
                  </svg>
                </span>
              </a>
            </li>
          <li>
        <a href="#" className="flex items-center space-x-2 hover:underline">
              {/* SVG Icon */}
        <svg
          className="w-5 h-5 text-gray-100"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.5499 15.15L19.8781 14.7863C17.4132 13.4517 16.1808 12.7844 14.9244 13.0211C13.6681 13.2578 12.763 14.3279 10.9528 16.4679L7.49988 20.55M3.89988 17.85L5.53708 16.2384C6.57495 15.2167 7.09388 14.7059 7.73433 14.5134C7.98012 14.4396 8.2352 14.4011 8.49185 14.3993C9.16057 14.3944 9.80701 14.7296 11.0999 15.4M11.9999 21C12.3154 21 12.6509 21 12.9999 21C16.7711 21 18.6567 21 19.8283 19.8284C20.9999 18.6569 20.9999 16.7728 20.9999 13.0046C20.9999 12.6828 20.9999 12.3482 20.9999 12C20.9999 11.6845 20.9999 11.3491 20.9999 11.0002C20.9999 7.22883 20.9999 5.34316 19.8283 4.17158C18.6568 3 16.7711 3 12.9998 3H10.9999C7.22865 3 5.34303 3 4.17145 4.17157C2.99988 5.34315 2.99988 7.22877 2.99988 11C2.99988 11.349 2.99988 11.6845 2.99988 12C2.99988 12.3155 2.99988 12.651 2.99988 13C2.99988 16.7712 2.99988 18.6569 4.17145 19.8284C5.34303 21 7.22921 21 11.0016 21C11.3654 21 11.7021 21 11.9999 21ZM7.01353 8.85C7.01353 9.84411 7.81942 10.65 8.81354 10.65C9.80765 10.65 10.6135 9.84411 10.6135 8.85C10.6135 7.85589 9.80765 7.05 8.81354 7.05C7.81942 7.05 7.01353 7.85589 7.01353 8.85Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
          ></path>
        </svg>
              
              {/* First text */}
              <span className="text-gray-100">Add image</span>
              
            </a>
          </li>
          <li>
            <a href="#" className="flex items-center space-x-2 hover:underline">
              {/* SVG Icon */}
              <svg class="w-5 h-5 text-red-400 bg-neutral-800 p-1 rounded-lg " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 7h14m-9 3v8m4-8v8M10 3h4a1 1 0 0 1 1 1v3H9V4a1 1 0 0 1 1-1ZM6 7h12v13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V7Z"/>
              </svg>
              
              {/* First text */}
              <span>Deleted</span>
              
              {/* Second text */}
            <span class="inline-flex items-center justify-center w-4 h-4 ms-2 text-xs  text-red-400 bg-neutral-800 rounded-full">
            21
            </span>
            </a>
          </li>
          </ul>
        </div>

        {/* Insert TodoInsight and TodoSke side by side */}
        <div className="flex flex-col md:flex-row md:justify-between gap-6 mb-6">
          <div className="flex-1">
            <TodoInsight todo={todo} />
          </div>
          <div className="flex-1">
            <TodoSke />
          </div>
        </div>

        <hr className="my-6 border-gray-400 sm:mx-auto dark:border-gray-700 lg:my-8" />

        <div className="mt-6 text-center">
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2025{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              EreyomiF 💕💕
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default TodoFooter;
