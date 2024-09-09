import React, { useState } from "react";

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [category, setCategory] = useState("");
  const [completed, setCompleted] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);

  const validateForm = () => {
    if (title && priority && category) {
      setIsFormValid(true);
    } else {
      setIsFormValid(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      addTask({ title, priority, category, completed });
      setTitle("");
      setPriority("Medium");
      setCategory("");
      setCompleted(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Title:
        <input
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
            validateForm();
          }}
        />
      </label>
      <label>
        Priority:
        <select
          value={priority}
          onChange={(e) => {
            setPriority(e.target.value);
            validateForm();
          }}
        >
          <option value="High">High</option>
          <option value="Medium">Medium</option>
          <option value="Low">Low</option>
        </select>
      </label>
      <label>
        Category:
        <input
          type="text"
          value={category}
          onChange={(e) => {
            setCategory(e.target.value);
            validateForm();
          }}
        />
      </label>
      <label>
        Completed:
        <input
          type="checkbox"
          checked={completed}
          onChange={(e) => setCompleted(e.target.checked)}
        />
      </label>
      <button type="submit" disabled={!isFormValid}>
        Add Task
      </button>
    </form>
  );
};

export default TaskForm;
