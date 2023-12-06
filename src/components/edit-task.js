import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTask } from "../features/tasks-slice";
import "./index.css";

const EditTask = ({ taskId, onClose }) => {
  const task = useSelector((state) =>
    state.tasks.tasks.find((task) => task.id === taskId)
  );
  const dispatch = useDispatch();
  const [editedTaskName, setEditedTaskName] = useState(task ? task.name : "");

  const handleEdit = (e) => {
    e.preventDefault();

    if (editedTaskName.trim() !== "") {
      dispatch(
        updateTask({
          id: taskId,
          updatedTask: { ...task, name: editedTaskName.trim() },
        })
      );
      onClose();
    } else {
      alert("Please enter a valid task title !!");
    }
  };

  return (
    <form onSubmit={handleEdit}>
      <span>&#9900; </span>
      <input
        type="text"
        value={editedTaskName}
        onChange={(e) => setEditedTaskName(e.target.value)}
      />
      <button className="update-button" type="submit">
        Update
      </button>
      <button className="cancel-button" type="button" onClick={onClose}>
        Cancel
      </button>
    </form>
  );
};

export default EditTask;
