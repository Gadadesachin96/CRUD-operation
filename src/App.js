import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    setTasks([...tasks, { id: Date.now(), title, completed: false }]);
  };

  const editTask = (id, newTitle) => {
    setTasks(tasks.map((task) => (task.id === id ? { ...task, title: newTitle } : task)));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'all') return true;
    if (filter === 'completed') return task.completed;
    if (filter === 'uncompleted') return !task.completed;
    return false;
  });

  return (
    <div className="container" style={{width:"600px"}}>
      <h1 className="text-center">CRUD </h1>
      <TaskList
        tasks={filteredTasks}
        onAddTask={addTask}
        onEditTask={editTask}
        onDeleteTask={deleteTask}
        onToggleTaskCompletion={toggleTaskCompletion}
      />
      <div className="btn-group d-flex mt-3" role="group" aria-label="Basic example">
        <button type="button" className="btn btn-primary" onClick={() => setFilter('all')}>
          All
        </button>
        <button type="button" className="btn btn-secondary" onClick={() => setFilter('completed')}>
          Completed
        </button>
        <button type="button" className="btn btn-warning" onClick={() => setFilter('uncompleted')}>
          Uncompleted
        </button>
      </div>
    </div>
  );
};

export default App;
