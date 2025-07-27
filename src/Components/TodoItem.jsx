import React, { useEffect, useState } from 'react';

const cardBackgrounds = {
  New: "#FFC0CB",
  Ongoing: "#D8B4FE",
  Completed: "#ADFF2F",
  Old: "#FFFF00",
};


function TodoItem({ task, onDelete }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
const createdAt = task.createdAt ? new Date(task.createdAt) : new Date();
const displayTime =
  task.createdAt && !isNaN(createdAt) ? getRelativeTime(createdAt) : "just now";

  const cardStyle = {
    backgroundColor: cardBackgrounds[task.category] || '#FFFFFF',
  };

  const categoryStyles = {
  New: "bg-pink-100 text-pink-800",
  Ongoing: "bg-yellow-100 text-yellow-800",
  Completed: "bg-green-100 text-green-800",
  Old: "bg-purple-100 text-purple-800",
};


function getRelativeTime(createdAt) {
  const now = new Date();
  const diff = Math.floor((now - new Date(createdAt)) / 1000); // in seconds

  const timeUnits = [
    { label: 'd', seconds: 86400 },
    { label: 'h', seconds: 3600 },
    { label: 'm', seconds: 60 },
    { label: 's', seconds: 1 },
  ];

  for (const unit of timeUnits) {
    const value = Math.floor(diff / unit.seconds);
    if (value >= 1) return `${value}${unit.label}`;
  }
  return 'just now';
}


  return (
    <>
      <div
        className="max-w-sm p-6 border border-gray-200 rounded-lg shadow dark:border-gray-700 relative"
        style={cardStyle}
      >
        <p
          className="absolute top-2 left-2 text-gray-500   rounded-full px-2 py-0.5 select-none inline-flex items-center gap-1"
          style={{ fontSize: "0.6rem" }}
        >
          <svg
            className="w-4 h-4 text-gray-500 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M12 21a9 9 0 0 1-.5-17.986V3c-.354.966-.5 1.911-.5 3a9 9 0 0 0 9 9c.239 0 .254.018.488 0A9.004 9.004 0 0 1 12 21Z" />
          </svg>
          {displayTime}
        </p>

        {/* Delete bin button in top-right corner */}
        <button
          onClick={() => onDelete(task)}
          className="absolute top-2 right-2 text-red-600 hover:text-red-800"
          title="Delete Task"
        >
          🗑
        </button>

        <h5 className="mb-2 text-base font-semibold  tracking-tight mt-4 text-gray-900 dark:text-white">
          {task.title}
        </h5>
        <p className="mb-2 text-gray-700">
          <small>Number:</small> {task.number}
        </p>
        <p className="mb-6">
          <strong className="text-gray-700"></strong>{" "}
          <span
            className={`inline-block px-2 py-1 text-sm font-medium rounded-full ${
              categoryStyles[task.category] || "bg-gray-100 text-gray-800"
            }`}
          >
            {task.category}
          </span>
        </p>

        <button
          onClick={() => setIsModalOpen(true)}
          className=" w-full justify-center inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white/30 backdrop-blur-md rounded-xl hover:bg-white/20 animate-jump"
        >
          Open Task
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
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
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
          <div className="relative bg-white rounded-2xl shadow-lg max-w-md w-full p-6 border border-gray-200 animate-fade-in">
            <h2 className="text-2xl font-bold text-gray-800 mb-4 border-b pb-2">
              📌 Task Details
            </h2>

            <div className="mb-4">
              <p className="text-gray-600">
                <span className="font-semibold text-gray-800">Title:</span>{" "}
                {task.title}
              </p>
              <p className="text-gray-600 mt-2">
                <span className="font-semibold text-gray-800">
                  Description:
                </span>{" "}
                {task.description}
              </p>
              <p className="text-gray-600 mt-2">
                <span className="font-semibold text-gray-800">Number:</span>{" "}
                {task.number}
              </p>
              <p className="mb-3">
                <strong className="text-gray-700">Category:</strong>{" "}
                <span
                  className={`inline-block px-2 py-1 text-sm font-medium rounded-full ${
                    categoryStyles[task.category] || "bg-gray-100 text-gray-800"
                  }`}
                >
                  {task.category}
                </span>
              </p>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => setIsModalOpen(false)}
                className="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default TodoItem;
