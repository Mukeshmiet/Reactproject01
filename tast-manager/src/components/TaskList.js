import React from "react";
import Task from "./Task";

const TaskList = ({ tasks, deleteTask, updateTask }) => {
  return (
    <div>
      <h2>Task List</h2>
      {tasks.length === 0 ? (
        <p>No tasks available</p>
      ) : (
        tasks.map((task, index) => (
          <Task
            key={index}
            task={task}
            index={index}
            deleteTask={deleteTask}
            updateTask={updateTask}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
