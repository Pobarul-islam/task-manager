import React from "react";
import TaskListContextProvider from "../contexts/TaskListContext";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";
import "../App.css";
import Header from "./Header";
import Navbar from "./Navbar/Navbar";


const App = () => {
  return (
    <TaskListContextProvider>
      <Navbar></Navbar>
      <div className="container">
        
        <div className="app-wrapper">
          <Header />
          <div className="main">
            <TaskForm />
            <TaskList />
          </div>
        </div>
      </div>
    </TaskListContextProvider>
  );
};

export default App;
