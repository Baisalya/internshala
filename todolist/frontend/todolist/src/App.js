

import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Fetch the tasks from backend 
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await axios.get('http://localhost:5000/tasks');
      console.log('Tasks:', response.data); // Log tasks 
      setTasks(response.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send task to backend for storage
      await axios.post('http://localhost:5000/tasks', { task: taskInput }); 
      console.log('Task added:', taskInput); // Log added task 
      // Update tasks  to display the new task
      fetchTasks(); // Fetch the updated tasks after adding
      // Clear task input
      setTaskInput('');
    } catch (error) {
      console.error(' adding task Error:', error);
    }
  };
  

  const handleClearStorage = async () => {
    try {
      // Clear storage in backend
      await axios.delete('http://localhost:5000/tasks');
      // Clear the tasks 
      setTasks([]);
    } catch (error) {
      console.error(' clearing storage Error: ', error);
    }
  };

  return (
    <div className="container">
      <div className="App">
        <h1>To-Do List App</h1>
        <div className="todolistcontent">
          <form onSubmit={handleSubmit}>
            <button>Enter the task</button>
            <input
              type="text"
              value={taskInput}
              onChange={handleInputChange}
              placeholder="Enter task..."
            />
            <button className="button" type="submit" onClick={handleSubmit}>
              Add Task
            </button>
          </form>
          <button onClick={handleClearStorage}>Clear All Tasks</button>
          <ul>
            {tasks.map((task, index) => (
              <li key={index}>{task}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
  
  
}

export default App;
