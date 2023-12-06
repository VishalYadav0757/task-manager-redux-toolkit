import React from "react";
import { Provider } from "react-redux";
import store from "./features/store";
import AddTask from "./components/add-task";
import TaskList from "./components/task-list";

function App() {
  return (
    <Provider store={store}>
      <div>
        <h1>&#9776; Task Manager</h1>
        <AddTask />
        <TaskList />
      </div>
    </Provider>
  );
}

export default App;
