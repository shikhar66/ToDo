import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

const TaskList = () => {
  const tasks = useSelector(state => state.tasks.tasks);
  const dispatch = useDispatch();

  const handleDelete = id => {
    dispatch({ type: 'DELETE_TASK', payload: id });
  };

  const handleToggle = id => {
    dispatch({ type: 'TOGGLE_TASK', payload: id });
  };

  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} className={task.completed ? 'completed' : ''}>
          <span>{task.text}</span>
          <div>
            <button onClick={() => handleToggle(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
