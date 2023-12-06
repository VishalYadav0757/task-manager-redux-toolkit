import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: "tasks",

  initialState: {
    tasks: [],
  },

  reducers: {
    addTask: (state, action) => {
      state.tasks.push(action.payload);
    },

    updateTask: (state, action) => {
      const { id, updatedTask } = action.payload;
      const taskToUpdate = state.tasks.find((task) => task.id === id);

      if (taskToUpdate) {
        Object.assign(taskToUpdate, updatedTask);
      }
    },

    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    },
  },
});

export const { addTask, updateTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
