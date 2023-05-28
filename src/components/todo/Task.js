import React from "react";

function Task({ task, handleCheck, handleDelete }) {
  return (
    <>
      <div key={task.id}>
        <input
          type="checkbox"
          selected={task.checked}
          onChange={() => handleCheck(task.id)}
        />
        <span
          style={{ textDecoration: task.checked ? "line-through" : "none" }}
        >
          {task.item}
        </span>
        <button onClick={() => handleDelete(task.id)}> Delete</button>
      </div>
    </>
  );
}

export default Task;
