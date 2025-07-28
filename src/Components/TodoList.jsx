import React from 'react';
import TodoItem from './TodoItem';

import NewIcon from '../assets/icons/chick.png';        // Adjust paths accordingly
import OngoingIcon from "../assets/icons/Unicorn2.webp";
import CompletedIcon from '../assets/icons/arc.png';
import OldIcon from '../assets/icons/folder3.png';          // Use PNG or convert SVG to PNG or vice versa

function TodoList({ items, onDeleteTask }) {
  const categoryOrder = ['New', 'Ongoing', 'Completed', 'Old'];

  const categoryIcons = {
    New: NewIcon,
    Ongoing: OngoingIcon,
    Completed: CompletedIcon,
    Old: OldIcon,
  };

    const headerColors = {
    New: 'bg-yellow-300 text-black',
    Ongoing: 'bg-pink-500 text-white',
    Completed: 'bg-sky-200 text-white',
    Old: 'bg-indigo-300 text-black',
  };


  const groupedTasks = {};
  categoryOrder.forEach(category => {
    groupedTasks[category] = [];
  });

  items.forEach(item => {
    if (groupedTasks[item.category]) {
      groupedTasks[item.category].push(item);
    }
  });

  

return (
<div className="grid gap-6 mt-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 overflow-x-hidden">
    {categoryOrder.map(category => (
      <div
        key={category}
        className="flex flex-col gap-4 p-4 bg-black rounded-lg shadow min-h-[150px] border border-gray-500"
      >
        <div className={`flex flex-col items-center border-b pb-4 rounded-t-lg w-full ${headerColors[category]}`}>
          <img
            src={categoryIcons[category]}
            alt={`${category} icon`}
            className="w-12 h-12 mx-auto"
          />
          <h2 className="text-lg font-bold text-gray-800 mt-1 text-center">
            {category}
          </h2>
        </div>

        {groupedTasks[category].length > 0 ? (
          groupedTasks[category].map(task => (
            <TodoItem key={task.id} task={task} onDelete={onDeleteTask} />
          ))
        ) : (
          <p className="text-sm text-gray-400 text-center italic">No tasks yet</p>
        )}
      </div>
    ))}
  </div>
);
}

export default TodoList;
