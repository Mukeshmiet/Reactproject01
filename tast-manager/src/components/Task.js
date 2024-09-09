import React, { useState } from "react";

const Task = ({ task, index, deleteTask, updateTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTask, setEditedTask] = useState(task);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    updateTask(index, editedTask);
    setIsEditing(false);
  };

  return (
    <div>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editedTask.title}
            onChange={(e) => setEditedTask({ ...editedTask, title: e.target.value })}
          />
          <select
            value={editedTask.priority}
            onChange={(e) => setEditedTask({ ...editedTask, priority: e.target.value })}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
          <input
            type="text"
            value={editedTask.category}
            onChange={(e) => setEditedTask({ ...editedTask, category: e.target.value })}
          />
          <input
            type="checkbox"
            checked={editedTask.completed}
            onChange={(e) => setEditedTask({ ...editedTask, completed: e.target.checked })}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div>
          <p>Title: {task.title}</p>
          <p>Priority: {task.priority}</p>
          <p>Category: {task.category}</p>
          <p>Completed: {task.completed ? "Yes" : "No"}</p>
          <button onClick={handleEdit}>Edit</button>
          <button onClick={() => deleteTask(index)}>Delete</button>
        </div>
      )}
    </div>
  );
};

export default Task;
