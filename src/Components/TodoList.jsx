// TodoList.jsx
import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ items }) {
  return (
    <div className="grid grid-cols-3 gap-4 mt-4">
      {items.map((item, index) => (
        <TodoItem key={index} title={item.title} body={item.body} />
      ))}
    </div>
  );
}

export default TodoList;
