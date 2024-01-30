
import React from 'react';

const GradientContainer = ({ color, children }) => {
  const getGradientStyles = () => {
    switch (color) {
      case 'purpleToBlue':
        return 'bg-gradient-to-br from-purple-600 to-blue-500';
      case 'cyanToBlue':
        return 'bg-gradient-to-br from-cyan-500 to-blue-500';
      case 'greenToBlue':
        return 'bg-gradient-to-br from-green-400 to-blue-600';
      case 'purpleToPink':
        return 'bg-gradient-to-br from-purple-500 to-pink-500';
      case 'pinkToOrange':
        return 'bg-gradient-to-br from-pink-500 to-orange-400';
      case 'tealToLime':
        return 'bg-gradient-to-br from-teal-300 to-lime-300';
      case 'redToYellow':
        return 'bg-gradient-to-br from-red-200 via-red-300 to-yellow-200';
      default:
        return '';
    }
  };

  return (
    <div className={`relative p-0.5 mb-2 me-2 overflow-hidden rounded-lg ${getGradientStyles()}`}>
      {children}
    </div>
  );
};

export default GradientContainer;




<div className="w-full max-w-sm p-4 bg-white border border-gray-200 rounded-lg shadow sm:p-6 md:p-8 dark:bg-gray-800 dark:border-gray-700">
    <form className="space-y-6" action="#">
        <h5 className="text-xl font-medium text-gray-900 dark:text-white">Sign in to our platform</h5>
        <div>
        <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Title Input</label>
          <input
            type="text"
            id="default-input"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={titleInput}
            onChange={handleTitleChange}
          />
        </div>
        <div>
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
    </form>
    <div className="grid grid-cols-3 gap-4 mt-4 flex-wrap">
        {items.map((item, index) => (
          <TodoItem key={index} title={item.title} body={item.body} />
        ))}
      </div>
</div>
