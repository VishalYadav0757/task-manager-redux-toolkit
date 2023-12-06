import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks-slice";
import EditTask from "./edit-task";
import "./index.css";

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);
  const dispatch = useDispatch();
  const [editTaskId, setEditTaskId] = useState(null);

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));

    if (editTaskId === id) {
      setEditTaskId(null);
    }
  };

  const handleEditTask = (id) => {
    setEditTaskId(id);
  };

  const handleCloseEdit = () => {
    setEditTaskId(null);
  };

  return (
    <ul>
      {tasks?.map((task) => (
        <li key={task?.id}>
          {editTaskId === task?.id ? (
            <EditTask taskId={task?.id} onClose={handleCloseEdit} />
          ) : (
            <>
              <div className="task-name">&#9900; {task?.name}</div>
              <button
                className="edit-button"
                onClick={() => handleEditTask(task?.id)}
              >
                Edit
              </button>
              <button
                className="delete-button"
                onClick={() => handleDeleteTask(task?.id)}
              >
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
