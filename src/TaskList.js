import React, { useState } from 'react';
import Task from './Task';

const TaskList = ({ tasks, onAddTask, onEditTask, onDeleteTask, onToggleTaskCompletion }) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = () => {
    if (newTaskTitle.trim() !== '') {
      onAddTask(newTaskTitle);
      setNewTaskTitle('');
    }
  };

  return (
    <div className="task-list">
      <div className="input-group mb-5">
        <input
          type="text"
          className="form-control"
          placeholder=" add todo"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <div className="input-group-append">
          <button className="btn btn-success ml-3" type="button" onClick={handleAddTask}>
            add todo
          </button>
        </div>
      </div>
      <ul className="list-group">
        {tasks.map((task) => (
          <Task
            key={task.id}
            task={task}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
            onToggleTaskCompletion={onToggleTaskCompletion}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
