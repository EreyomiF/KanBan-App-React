import React, { useState } from 'react';
import ImageComponent from './ImageComponent';
import addup from '../assets/icons/addup.png';
import TodoInput from './TodoInput';
import TodoList from './TodoList'; 
import TimeHeader from './TimeHeader';

const AddTask = () => {
  const [isModalVisible, setModalVisibility] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleToggleModal = () => {
    setModalVisibility(!isModalVisible);
  };

  // Add task with unique id
  const addTask = (newTask) => {
    const taskWithId = { ...newTask, id: Date.now().toString() };
    setTasks((prevTasks) => [...prevTasks, taskWithId]);
  };

  // Delete task handler
  const handleDeleteTask = (taskToDelete) => {
    setTasks((prevTasks) => prevTasks.filter(task => task.id !== taskToDelete.id));
  };

  return (
    <div className="p-2 mb-4 rounded-lg -mt-10 relative">
      <div className="absolute right-0 p-4 flex items-center space-x-4">
      <button
        onClick={handleToggleModal}
        className="flex items-center text-purple-500 border-2 border-dashed border-purple-500 bg-transparent hover:bg-purple-100 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-purple-400 dark:border-purple-400 dark:hover:bg-purple-700 dark:hover:text-white dark:focus:ring-purple-800"
        type="button"
      >
        <svg
          className="w-6 h-6 text-purple-500 dark:text-purple-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
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
        <span className="leading-tight ml-2">Create new task</span>
      </button>
      </div>

      {isModalVisible && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={handleToggleModal}
        ></div>
      )}

      <div
        id="crud-modal"
        className={`${
          isModalVisible ? "" : "hidden"
        } fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-6 rounded-lg shadow-lg w-96`}
      >
        <TodoInput onAddTask={addTask} onCloseModal={handleToggleModal} />
      </div>

      <TimeHeader />

      {/* Pass delete handler here */}
      <TodoList items={tasks} onDeleteTask={handleDeleteTask} />
    </div>
  );
};

export default AddTask;
