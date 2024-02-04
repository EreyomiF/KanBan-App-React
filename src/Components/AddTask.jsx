import React, { useState } from 'react';
import ImageComponent from './ImageComponent';
import addup from '../assets/icons/addup.png';
import TodoInput from './TodoInput';
import TodoList from './TodoList'; 
import TimeHeader from './TimeHeader';
import TodoHeader from './TodoHeader'

const AddTask = () => {
  const [isModalVisible, setModalVisibility] = useState(false);
  const [tasks, setTasks] = useState([]);

  const handleToggleModal = () => {
    setModalVisibility(!isModalVisible);
  };

  const addTask = (newTask) => {
    setTasks((prevTasks) => [...prevTasks, newTask]);
  };

  return (
    <div className="p-2 mb-4 rounded-lg mt-10 relative">
      <div className="absolute right-0 p-4 flex items-center space-x-4">
        <button
          onClick={handleToggleModal}
          className="flex items-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          <ImageComponent src={addup} alt="Add Up" className="w-4 h-4" />
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
          isModalVisible ? '' : 'hidden'
        } fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 bg-white p-6 rounded-lg shadow-lg w-96`}
      >
        <TodoInput onAddTask={addTask} onCloseModal={handleToggleModal} />
      </div>
       <TimeHeader />
       <TodoHeader />
      <TodoList items={tasks} />

    </div>
  );
};

export default AddTask;
