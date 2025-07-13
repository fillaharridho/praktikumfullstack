import React from 'react';

const TodoItem = ({ todo, onToggle }) => {
  return (
    <li
      onClick={() => onToggle(todo.id)}
      style={{
        textDecoration: todo.completed ? 'line-through' : 'none',
        cursor: 'pointer',
        margin: '5px 0'
      }}
    >
      {todo.task}
    </li>
  );
};

export default TodoItem;
