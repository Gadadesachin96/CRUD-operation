import React, { useState } from 'react';

const Task = ({ task, onEditTask, onDeleteTask, onToggleTaskCompletion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(task.title);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleCancelEdit = () => {
    setIsEditing(false);
    setEditedTitle(task.title);
  };

  const handleSaveEdit = () => {
    onEditTask(task.id, editedTitle);
    setIsEditing(false);
  };

  return (
    <li className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'bg-success text-white' : ''}`}>
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggleTaskCompletion(task.id)}
        />
        {isEditing ? (
          <input
            type="text"
            className="form-control"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        ) : (
          <span>{task.title}</span>
        )}
      </div>
      <div>
        {isEditing ? (
          <>
            <button className="btn btn-success" onClick={handleSaveEdit}>
              save
            </button>
            <button className="btn btn-secondary ml-2" onClick={handleCancelEdit}>
              Cancel
            </button>
          </>
        ) : (
          <>
            <button className="btn btn-info" onClick={handleEditClick}>
              edit
            </button>
            <button className="btn btn-danger ml-2" onClick={() => onDeleteTask(task.id)}>
              delete
            </button>
          </>
        )}
      </div>
    </li>
  );
};

export default Task;
