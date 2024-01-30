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
        const newItem = { title: titleInput, body: bodyInput };
      
        setItems((prevItems) => [...prevItems, newItem]);
      
        setTitleInput("");
        setBodyInput("");
      };
                      
  
  
    return (
      <div>
      <div class="flex justify-center">
      <div className=" w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
       <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Add Task</h5>
        <div>
        <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title </label>
          <input
            type="text"
            id="default-input"
            placeholder="e.g Buy Milk"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={titleInput}
            onChange={handleTitleChange}
          />
        </div>
        <div>
        <label htmlFor="small-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Content</label>
          <input
            type="text"
            id="small-input"
            placeholder="e.g  Go to the store tommorrow to get some milk."
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
    </form>
    </div>
    </div>
    <div className="grid grid-cols-3 gap-4 mt-4 flex-wrap">
        {items.map((item, index) => (
          <TodoItem key={index} title={item.title} body={item.body} />
        ))}
      </div>
      </div>
    );
  };
    
export default TodoInput;

