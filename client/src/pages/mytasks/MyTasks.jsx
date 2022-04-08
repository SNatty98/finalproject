import "./mytasks.css";
import { useContext } from "react";
import { Context } from "../../context/Context";

const MyTasks = () => {
  const { user } = useContext(Context);
  // return <div>USE POST TO FIGURE OUT HOW TO DO IT. USERNAME ATTACHED TO (PUT) TASK BY ADMIN, USERNAME IS KEY. USE PUT METHOD TO ASSIGN THE USERNAME TO THE TASK. DOWNSIDE: ONLY ONE USER CAN BE ASSIGNED A TASK AT A TIME.</div>;
  // {task1 && showttask1}
  // {task2 && showttask2}
  // {task3 && showttask3}
  return (
    <>
      {user.taskAlg && <div>This is taskAlg</div>}
      {user.taskTrig && <div>This is taskTrig</div>}
      {user.taskWN && <div>This is taskWN</div>}
    </>
  );
};

export default MyTasks;
