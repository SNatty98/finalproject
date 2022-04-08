import React from "react";
import axios from "axios";
import { useState } from "react";

const StudentInfo = () => {
  const [taskAlg, setTaskAlg] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTasks = {
      taskAlg,
    };
    try {
      await axios.post("http://localhost:5000/api/auth/users", newTasks);
      window.location.replace("/adminhome");
    } catch (err) {}
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <button type="submit"></button>
      </form>
    </div>
  );
};

export default StudentInfo;
