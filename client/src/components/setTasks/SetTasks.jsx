import "./settasks.css";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import axios from "axios";

const SetTasks = () => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    const getTask = async () => {
      const res = await axios.get("http://localhost:5000/api/tasks");
      setTask(res);
    };
    getTask();
  }, []);

  return (
    <div className="backgroundColor">
      <div className="setTaskPage">
        <h1 className="setTaskTitle">Set Your Students Tasks Here!</h1>

        <div className="taskContainer">
          <label>Search Students</label>
          <input type="text" />
          <label>Search Tasks</label>
          <input type="text" />
          <button className="addTaskBtn">Add Task</button>
        </div>
      </div>
    </div>
  );
};

export default SetTasks;
