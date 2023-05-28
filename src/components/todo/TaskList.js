import React from "react";
import Task from "./Task";

function TaskList({ taskList, onDelete, onCheck }) {
  return (
    <>
      {taskList.map((task) => (
        <Task key={task.id} task={task} onDelete={onDelete} onCheck={onCheck} />
      ))}
    </>
  );
}

export default TaskList;
