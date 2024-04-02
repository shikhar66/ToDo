// src/App.js

import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import './styles.css';
function App() {
  return (
    <div>
      <h1>ToDo App</h1>
      <p>A to-do website is a digital tool for creating and managing tasks, helping users stay organized and productive.</p>
      <TaskInput />
      <TaskList />
    </div>
  );
}

export default App;
