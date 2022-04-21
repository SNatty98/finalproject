import "./mytasks.css";
import Tasks from "../../components/tasks/Tasks"
import Sidebar from "../../components/sidebar/Sidebar";

// return <div>USE POST TO FIGURE OUT HOW TO DO IT. USERNAME ATTACHED TO (PUT) TASK BY ADMIN, USERNAME IS KEY. USE PUT METHOD TO ASSIGN THE USERNAME TO THE TASK. DOWNSIDE: ONLY ONE USER CAN BE ASSIGNED A TASK AT A TIME.</div>;
// {task1 && showttask1}
// {task2 && showttask2}
// {task3 && showttask3}
//background-color: rgb(22, 134, 22);

const MyTasks = () => {
  
  return (
    <div className="divider">
      <Tasks /> 
      <Sidebar />
    </div>
  );
};

export default MyTasks;
