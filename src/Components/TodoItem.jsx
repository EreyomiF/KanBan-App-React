import React, { useState } from 'react';

const cardBackgrounds = {
  New: "#FFE4E6",
  Ongoing: "#EDE9FE",
  Completed: "#DCFCE7",
  Old: "#FEF9C3",
};

const categoryStyles = {
  New: "bg-pink-100 text-pink-700",
  Ongoing: "bg-violet-100 text-violet-700",
  Completed: "bg-green-100 text-green-700",
  Old: "bg-yellow-100 text-yellow-700",
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

function TodoItem({ task, onDelete }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const createdAt = task.createdAt ? new Date(task.createdAt) : new Date();
  const displayTime =
    task.createdAt && !isNaN(createdAt) ? getRelativeTime(createdAt) : "just now";

  const cardStyle = {
    backgroundColor: cardBackgrounds[task.category] || '#F9FAFB',
  };

  return (
    <>
      <div
        className="p-5 rounded-2xl shadow-lg relative border border-gray-200 transition-transform duration-200 hover:scale-[1.01] hover:shadow-xl"
        style={cardStyle}
      >
        {/* Time Label */}
        <p className="absolute top-3 left-3 text-xs text-gray-500 flex items-center gap-1">
          <svg
            className="w-4 h-4 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M12 21a9 9 0 1 1 0-18 9 9 0 0 1 0 18Zm0-9V7m0 5h4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"/>
          </svg>
          {displayTime}
        </p>

        {/* Delete Button */}
        <button
          onClick={() => onDelete(task)}
          className="absolute top-3 right-3 text-red-500 hover:text-red-700 text-lg"
          title="Delete Task"
        >
          🗑
        </button>

        {/* Task Content */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-800">{task.title}</h3>
          <p className="text-sm text-gray-600 mt-1">
            <span className="font-medium">Number:</span> {task.number}
          </p>

          <p className="mt-3">
            <span
              className={`inline-block px-3 py-1 text-xs font-semibold rounded-full ${categoryStyles[task.category] || "bg-gray-100 text-gray-800"}`}
            >
              {task.category}
            </span>
          </p>
        </div>

        {/* Action Button */}
    <button
      onClick={() => setIsModalOpen(true)}
      className="mt-4 w-full flex items-center justify-center gap-2 py-2 px-4 rounded-xl bg-white/40 backdrop-blur-sm text-gray-800 text-sm font-medium hover:bg-white/30 transition duration-200"
    >
      {/* SVG Icon */}

      Open Task
      <svg class="w-6 h-6 text-gray-700 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
        <path fill-rule="evenodd" d="M21.707 21.707a1 1 0 0 1-1.414 0l-3.5-3.5a1 1 0 0 1 1.414-1.414l3.5 3.5a1 1 0 0 1 0 1.414ZM2 10a8 8 0 1 1 16 0 8 8 0 0 1-16 0Zm9-3a1 1 0 1 0-2 0v2H7a1 1 0 0 0 0 2h2v2a1 1 0 1 0 2 0v-2h2a1 1 0 1 0 0-2h-2V7Z" clip-rule="evenodd"/>
      </svg>

    </button>
      </div>

      {/* Modal */}
{isModalOpen && (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
    <div className="relative bg-white/10 backdrop-blur-lg border border-white/20 rounded-2xl shadow-2xl w-full max-w-md p-6 text-white space-y-4">
      {/* Modal Title */}
      <div className="flex items-center gap-3 border-b border-white/20 pb-3">
        <h2 className="text-xl font-bold">📌 Task Details</h2>
      </div>

      {/* Task Details Grid */}
      <div className="grid grid-cols-1 gap-4">
        {/* Title */}
        <div className="flex items-start gap-3">
          <div className="text-white/70">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 10h16M4 14h16M4 18h16" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500 mb-2">Title</p>
            <p className="text-sm">{task.title}</p>
          </div>
        </div>

        {/* Description */}
        <div className="flex items-start gap-3">
          <div className="text-white/70">
          <svg class="w-6 h-6 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 9h6m-6 3h6m-6 3h6M6.996 9h.01m-.01 3h.01m-.01 3h.01M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"/>
          </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500 mb-2">Description</p>
            <p className="text-sm">{task.description}</p>
          </div>
        </div>

        {/* Number */}
        <div className="flex items-start gap-3">
          <div className="text-white/70">
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c1.104 0 2-.896 2-2s-.896-2-2-2S10 4.896 10 6s.896 2 2 2zm0 2c-2.21 0-4 1.79-4 4v2h8v-2c0-2.21-1.79-4-4-4z" />
            </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500 mb-2">Number</p>
            <p className="text-sm">{task.number}</p>
          </div>
        </div>

        {/* Category */}
        <div className="flex items-start gap-3">
          <div className="text-white/70">
        <svg class="w-6 h-6 text-gray-400 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8v8a5 5 0 1 0 10 0V6.5a3.5 3.5 0 1 0-7 0V15a2 2 0 0 0 4 0V8"/>
        </svg>
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-500 mb-2">Category</p>
            <span className={`inline-block px-3 py-1 mt-1 text-xs font-medium rounded-full ${categoryStyles[task.category] || "bg-white/20 text-white"}`}>
              {task.category}
            </span>
          </div>
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex justify-end mt-4">
        <button
          onClick={() => setIsModalOpen(false)}
          className="px-4 py-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 rounded-lg transition duration-200"
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
