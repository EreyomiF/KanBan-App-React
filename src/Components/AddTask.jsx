import React, { useState } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList'; 

const AddTask = () => {
  const [isModalVisible, setModalVisibility] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleToggleModal = () => {
    setModalVisibility(!isModalVisible);
  };

  const addTask = (newTask) => {
    const taskWithId = { ...newTask, id: Date.now().toString() };
    setTasks((prevTasks) => [...prevTasks, taskWithId]);
  };

  const handleDeleteTask = (taskToDelete) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskToDelete.id));
  };

  return (
    <div className="p-2 mb-4 rounded-lg relative">
      {/* Button aligned to right */}
      <div className="p-4 flex justify-end ">
        <div className="w-full sm:w-full md:w-auto -mt-56 mb-4">
          <button
            onClick={handleToggleModal}
            className="w-full sm:w-full md:w-auto flex flex-col items-center justify-center text-gray-200 border-2 border-dashed border-gray-500 bg-transparent   bg-neutral-800 font-medium rounded-lg text-sm px-5 py-4 text-center dark:text-purple-400"
            type="button"
          >
            <svg
              className="w-10 h-10 p-3 text-gray-200 bg-indigo-500 rounded-full flex items-center justify-center dark:text-purple-400"
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
                d="M5 12h14m-7 7V5"
              />
            </svg>
            <span className="leading-tight mt-2 text-center">Create new task</span>
            <span className="leading-tight mt-2 text-center">
              or use <small><a className="text-pink-500">invite link</a></small>
            </span>
          </button>
        </div>
      </div>

      {/* Modal Overlay with lighter opacity */}
      {isModalVisible && (
        <div
          className="fixed inset-0 bg-black opacity-20 z-40"
          onClick={handleToggleModal}
        ></div>
      )}

    {/* Modal Content */}
    <div
      id="crud-modal"
      className={`${
        isModalVisible ? "" : "hidden"
      } fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-6 rounded-lg shadow-lg w-96`}
    >
    <div className="flex justify-end">
      <button
        onClick={handleToggleModal}
        className="p-2 bg-red-500 text-white rounded hover:bg-red-600 focus:outline-none flex items-center justify-center"
        aria-label="Cancel"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

  <TodoInput onAddTask={addTask} onCloseModal={handleToggleModal} />
  
  {/* Cancel Button */}
</div>

      {/* Task List */}
      <div className="-mt-16">
        <TodoList items={tasks} onDeleteTask={handleDeleteTask} />
      </div>
    </div>
  );
};

export default AddTask;
