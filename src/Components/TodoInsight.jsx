import React, { useState, useRef, useEffect } from "react";
import RadialChartImg from '../assets/icons/Chart.png'; // adjust the path as needed


const TodoInsight = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown if clicked outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
<div className="h-[430px] mt-4 w-full bg-black border-2 border-gray-500 rounded-lg shadow-sm dark:border-gray-600 dark:bg-gray-800 p-4 md:p-6 relative">
      {/* Header */}
      <div className="flex justify-between mb-3">
        <div className="flex items-center">
          <div className="flex justify-center items-center relative">
            <h5 className="text-xl font-bold leading-none text-gray-500 dark:text-white pe-1">
              Your team's progress
            </h5>
            <svg
              data-popover-target="chart-info"
              data-popover-placement="bottom"
              className="w-3.5 h-3.5 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white cursor-pointer ms-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
              // Tooltip on hover is better handled with title or a tooltip lib; skipping complex popover logic here
              title="Info about the chart"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm0 16a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Zm1-5.034V12a1 1 0 0 1-2 0v-1.418a1 1 0 0 1 1.038-.999 1.436 1.436 0 0 0 1.488-1.441 1.501 1.501 0 1 0-3-.116.986.986 0 0 1-1.037.961 1 1 0 0 1-.96-1.037A3.5 3.5 0 1 1 11 11.466Z" />
            </svg>
          </div>
        </div>
      </div>

      {/* Progress stats */}
      <div className="bg-neutral-900 dark:bg-gray-800 p-3 rounded-lg">
        <div className="grid grid-cols-3 gap-3 mb-2">
          <dl className="bg-orange-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
            <dt className="w-8 h-8 rounded-full bg-orange-100 dark:bg-gray-500 text-orange-600 dark:text-orange-300 text-sm font-medium flex items-center justify-center mb-1">
              12
            </dt>
            <dd className="text-orange-600 dark:text-orange-300 text-sm font-medium">To do</dd>
          </dl>
          <dl className="bg-teal-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
            <dt className="w-8 h-8 rounded-full bg-teal-100 dark:bg-gray-500 text-teal-600 dark:text-teal-300 text-sm font-medium flex items-center justify-center mb-1">
              23
            </dt>
            <dd className="text-teal-600 dark:text-teal-300 text-sm font-medium">In progress</dd>
          </dl>
          <dl className="bg-blue-50 dark:bg-gray-600 rounded-lg flex flex-col items-center justify-center h-[78px]">
            <dt className="w-8 h-8 rounded-full bg-blue-100 dark:bg-gray-500 text-blue-600 dark:text-blue-300 text-sm font-medium flex items-center justify-center mb-1">
              64
            </dt>
            <dd className="text-blue-600 dark:text-blue-300 text-sm font-medium">Done</dd>
          </dl>
        </div>

        {/* Show more details toggle */}
        <button
          onClick={() => setShowDetails(!showDetails)}
          className="hover:underline text-xs text-gray-500 dark:text-gray-400 font-medium inline-flex items-center"
          aria-expanded={showDetails}
          aria-controls="more-details"
          type="button"
        >
          Show more details
          <svg
            className={`w-2 h-2 ms-1 transition-transform ${showDetails ? "rotate-180" : ""}`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 1 4 4 4-4"
            />
          </svg>
        </button>

        {/* Collapsible details */}
        {showDetails && (
          <div
            id="more-details"
            className="border-gray-200 border-t dark:border-gray-600 pt-3 mt-3 space-y-2"
          >
            <dl className="flex items-center justify-between">
              <dt className="text-gray-500 dark:text-gray-400 text-sm font-normal">
                Average task completion rate:
              </dt>
              <dd className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
                <svg
                  className="w-2.5 h-2.5 me-1.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13V1m0 0L1 5m4-4 4 4"
                  />
                </svg>{" "}
                57%
              </dd>
            </dl>
            <dl className="flex items-center justify-between">
              <dt className="text-gray-500 dark:text-gray-400 text-sm font-normal">
                Days until sprint ends:
              </dt>
              <dd className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-gray-600 dark:text-gray-300">
                13 days
              </dd>
            </dl>
            <dl className="flex items-center justify-between">
              <dt className="text-gray-500 dark:text-gray-400 text-sm font-normal">Next meeting:</dt>
              <dd className="bg-gray-100 text-gray-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-gray-600 dark:text-gray-300">
                Thursday
              </dd>
            </dl>
          </div>
        )}
      </div>

      {/* Radial Chart placeholder */}
      <div className="py-6" id="radial-chart">
        <img src={RadialChartImg} alt="Radial Chart" className="w-32 h-auto max-w-xs mx-auto" />
      </div>

      {/* Bottom controls with dropdown */}
      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
        <div className="flex justify-between items-center pt-5">
          {/* Dropdown toggle button */}
          <div className="relative" ref={dropdownRef}>
            <button
              id="dropdownDefaultButton"
              onClick={() => setDropdownOpen(!dropdownOpen)}
              className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
              type="button"
              aria-haspopup="true"
              aria-expanded={dropdownOpen}
            >
              Last 7 days
              <svg
                className="w-2.5 m-2.5 ms-1.5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 10 6"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 4 4 4-4"
                />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="z-10 absolute bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 mt-2">
                <ul
                  className="py-2 text-sm text-gray-700 dark:text-gray-200"
                  aria-labelledby="dropdownDefaultButton"
                >
                  {["Yesterday", "Today", "Last 7 days", "Last 30 days", "Last 90 days"].map(
                    (label) => (
                      <li key={label}>
                        <a
                          href="#"
                          className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                          onClick={(e) => {
                            e.preventDefault();
                            // Handle dropdown item click here
                            console.log("Selected:", label);
                            setDropdownOpen(false);
                          }}
                        >
                          {label}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </div>
            )}
          </div>

          {/* Progress report link */}
          <a
            href="#"
            className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500 hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 px-3 py-1"
          >
            View progress report
            <svg
              className="w-3 h-3 ms-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TodoInsight;
