// TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ items }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
      {items.map((item, index) => (
        <div key={index} className="mb-4">
          <TodoItem title={item.title} body={item.body} />
        </div>
      ))}
    </div>
  );
}

export default TodoList;
