import React, { useState } from "react";
import TodoItem from "./TodoItem";

const TodoInput = ({ onAddTask, onCloseModal }) => {
  const [titleInput, setTitleInput] = useState("");
  const [bodyInput, setBodyInput] = useState("");

  const handleTitleChange = (event) => {
    const newValue = event.target.value;
    setTitleInput(newValue);
  };

  const handleBodyChange = (event) => {
    const newValue = event.target.value;
    setBodyInput(newValue);
  };

  const addItem = () => {
    const newItem = { title: titleInput, body: bodyInput };
    onAddTask(newItem);
    onCloseModal();
  };

  return (
    <div>
      <form className="p-4 md:p-5">
              <div className="grid gap-4 mb-4 grid-cols-2">
                <div className="col-span-2">
                  <label
                    htmlFor="name"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Type Task name"
                    required
                    value={titleInput}
                    onChange={handleTitleChange}

                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="price"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                  Number 
                  </label>
                  <input
                    type="number"
                    name="Task number"
                    id="Tak number"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    placeholder="Task number"
                    required
                    value={bodyInput}
                   onChange={handleBodyChange}

                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label
                    htmlFor="category"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Category
                  </label>
                  <select
                    id="category"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  >
                    <option value="" disabled selected>
                      Select category
                    </option>
                    <option value="TV">New</option>
                    <option value="PC">Ongoing</option>
                    <option value="GA">Completed/Console</option>
                    <option value="PH">Old</option>
                  </select>
                </div>
                <div className="col-span-2">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Task Description
                  </label>
                  <textarea
                    rows="4"
                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    value={bodyInput}
                    onChange={handleBodyChange}
                    type="text"
                    id="small-input"
                   placeholder="e.g fix company A code tomorrow"
                  ></textarea>
                </div>
              </div>
              <button
          type="submit"
          className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          onClick={addItem}
        >
          Create task
        </button>
      </form>
    </div>
    );
  };
    
export default TodoInput;

