import React, { useState } from "react";

const TodoInput = ({ onAddTask, onCloseModal }) => {
  const [titleInput, setTitleInput] = useState("");
  const [numberInput, setNumberInput] = useState("");
  const [descriptionInput, setDescriptionInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");

  const addItem = (e) => {
    e.preventDefault(); // prevent form submit
    const newItem = {
      title: titleInput,
      number: numberInput,
      description: descriptionInput,
      category: categoryInput,
        createdAt: new Date().toISOString(), // ✅ important

    };
    onAddTask(newItem);
    onCloseModal();
    setTitleInput("");
    setNumberInput("");
    setDescriptionInput("");
    setCategoryInput("");
  };

  return (
    <div>
      <form className="p-4 md:p-5" onSubmit={addItem}>
        <div className="grid gap-4 mb-4 grid-cols-2">
          <div className="col-span-2">
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Type Task name"
              required
              value={titleInput}
              onChange={(e) => setTitleInput(e.target.value)}
            />
          </div>

          <div className="col-span-2 sm:col-span-1">
            <label
              htmlFor="number"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Number
            </label>
            <input
              type="number"
              name="number"
              id="number"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              placeholder="Task number"
              required
              value={numberInput}
              onChange={(e) => setNumberInput(e.target.value)}
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
              value={categoryInput}
              onChange={(e) => setCategoryInput(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
              required
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="New">New</option>
              <option value="Ongoing">Ongoing</option>
              <option value="Completed">Completed</option>
              <option value="Old">Old</option>
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
              id="description"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
              placeholder="e.g fix company A code tomorrow"
              value={descriptionInput}
              onChange={(e) => setDescriptionInput(e.target.value)}
              required
            ></textarea>
          </div>
        </div>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 font-medium rounded-lg text-sm px-5 py-2.5"
        >
          Create task
        </button>
      </form>
    </div>
  );
};

export default TodoInput;
