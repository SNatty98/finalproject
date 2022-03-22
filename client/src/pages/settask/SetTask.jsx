import "./settask.css";

const SetTask = () => {
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

export default SetTask;
