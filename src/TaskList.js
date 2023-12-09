import React, { useState } from 'react';
import Task from './Task';

const TaskList = ({ tasks, onAddTask, onEditTask, onDeleteTask, onToggleTaskCompletion }) => {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [error, setError] = useState('');

  const handleAddTask = () => {
    const trimmedTitle = newTaskTitle.trim();

    if (trimmedTitle === '') {
      setError('Task title cannot be empty.');
      return;
    }

    onAddTask(trimmedTitle);
    setNewTaskTitle('');
    setError('');
  };

  return (
    <div className="task-list">
      <div className="input-group mb-5">
        <input
          type="text"
          className="form-control"
          style={{
            borderColor: error ? 'red' : '',
            borderWidth: error ? '2px' : '1px',
          }}
          placeholder="Add a new task"
          value={newTaskTitle}
          onChange={(e) => {
            setNewTaskTitle(e.target.value);
            setError('');
          }}
        />
        {error && (
          <div style={{ color: 'red', fontSize: '14px', marginTop: '6px', fontStyle: 'italic' }}>
            <i className="fas fa-exclamation-circle" style={{ marginRight: '4px' }}></i>
            write something...
          </div>
        )}

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
