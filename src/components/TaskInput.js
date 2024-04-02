import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    setTask(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (task.trim() === '') return;
    dispatch({ type: 'ADD_TASK', payload: { id: Date.now(), text: task } });
    setTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={task} onChange={handleChange} />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskInput;
