import React, { useState } from 'react';

const TodoInput = ({ onAdd }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      onAdd(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Tambahkan tugas..."
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button type="submit">Tambah</button>
    </form>
  );
};

export default TodoInput;
