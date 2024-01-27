import React, { useState } from "react";
import TodoItem from "./TodoItem";


const TodoInput = () => {
    const [titleInput, setTitleInput] = useState("");
    const [bodyInput, setBodyInput] = useState("");

    const [items, setItems] = useState([]);
  
    const handleTitleChange = (event) => {
        const newValue = event.target.value;
        setTitleInput(newValue);
      };
    
      const handleBodyChange = (event) => {
        const newValue = event.target.value;
        setBodyInput(newValue);
      };
              
  

      const addItem = () => {
        // Create a new item object
        const newItem = { title: titleInput, body: bodyInput };
      
        // Update the state
        setItems((prevItems) => [...prevItems, newItem]);
      
        // Clear the input fields
        setTitleInput("");
        setBodyInput("");
      };
                      
  
  
    return (
        <div>
        <div className="p-2 mb-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
          <div className="mb-2">
            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title Input</label>
            <input
              type="text"
              id="default-input"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={titleInput}
              onChange={handleTitleChange}
            />
          </div>
          <div className="mb-2">
            <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Body Input</label>
            <input
              type="text"
              id="small-input"
              className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={bodyInput}
              onChange={handleBodyChange}
            />
          </div>
          <button
            type="button"
            onClick={addItem}
            className="bg-blue-500 text-white p-2 rounded"
          >
            Create new task
          </button>
        </div>
  
        <div className="grid grid-cols-3 gap-4 mt-4">
          {items.map((item, index) => (
            <TodoItem
              key={index}
              title={item.title}
              body={item.body}
            />
          ))}
        </div>
      </div>
    );
  };
    
export default TodoInput;
