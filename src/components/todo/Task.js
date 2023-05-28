import React from "react";

function Task({ task, onDelete, onCheck }) {
  return (
    <>
      <div key={task.id}>
        <input
          type="checkbox"
          selected={task.checked}
          onChange={() => onCheck(task.id)}
        />
        <span
          style={{ textDecoration: task.checked ? "line-through" : "none" }}
        >
          {task.item}
        </span>
        <button onClick={() => onDelete(task.id)}> Delete</button>
      </div>
    </>
  );
}

export default Task;
