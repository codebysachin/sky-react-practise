import React, { useState } from "react";
import TaskList from "./TaskList";

function Todo() {
  const [taskList, setTaskList] = useState([]);
  const [task, setTask] = useState("");

  const handleAdd = (e) => {
    e.preventDefault();
    const newTask = {
      id: taskList.length ? taskList[taskList.length - 1].id + 1 : 1,
      item: task,
      checked: false,
    };
    const newTaskList = [...taskList, newTask];
    setTaskList(newTaskList);
    setTask("");
  };

  const handleCheck = (id) => {
    const updateTask = taskList.map((task) =>
      task.id === id ? { ...task, checked: !task.checked } : task
    );
    setTaskList(updateTask);
  };

  const handleDelete = (id) => {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
  };

  return (
    <>
      <form onSubmit={handleAdd}>
        <input
          autoFocus
          type="text"
          value={task}
          placeholder="Add your items here"
          onChange={(e) => setTask(e.target.value)}
        />
        <button type="submit">Add</button>
        <TaskList
          taskList={taskList}
          handleDelete={handleDelete}
          handleCheck={handleCheck}
        />
      </form>
    </>
  );
}

export default Todo;
