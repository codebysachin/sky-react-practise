import React, { useState } from "react";
import Task from "./Task";

function TaskList({ taskList, handleDelete, handleCheck }) {
  return (
    <>
      {taskList.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
      ))}
    </>
  );
}

export default TaskList;
