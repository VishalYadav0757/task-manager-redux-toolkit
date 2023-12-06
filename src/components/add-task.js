import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTask } from "../features/tasks-slice";
import "./index.css";

const AddTask = () => {
  const dispatch = useDispatch();
  const [taskName, setTaskName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (taskName.trim() !== "") {
      const newTask = {
        id: uuidv4(),
        name: taskName.trim(),
        completed: false,
      };

      dispatch(addTask(newTask));
      setTaskName("");
    } else {
      alert("Please add a task title !!");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add task..."
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button className="add-btn" type="submit">Add</button>
    </form>
  );
};

export default AddTask;
