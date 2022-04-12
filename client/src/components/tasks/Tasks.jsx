import { useState } from "react";
import { Link } from "react-router-dom";
import Algebra from "../algebra/Algebra";
import Ratio from "../ratio/Ratio";
import "./tasks.css";

// return <div>USE POST TO FIGURE OUT HOW TO DO IT. USERNAME ATTACHED TO (PUT) TASK BY ADMIN, USERNAME IS KEY. USE PUT METHOD TO ASSIGN THE USERNAME TO THE TASK. DOWNSIDE: ONLY ONE USER CAN BE ASSIGNED A TASK AT A TIME.</div>;
// {task1 && showttask1}
// {task2 && showttask2}
// {task3 && showttask3}

const MyTasks = () => {
  const [alg, setAlg] = useState(false);
  const [rat, setRat] = useState(false);
  const [wn, setWn] = useState(false);

  //const handleRadioClick = (e: React.ChangeEvent<HTMLInputElement>): void => setAns(e.currentTarget.value)

  const algTrue = () => {
    setAlg(true);
    window.scrollTo(0, 20);
  };

  const algFalse = () => {
    setAlg(false);
  };

  const ratTrue = () => {
    window.scrollTo(0, 20);
    setRat(true);
  };

  const ratFalse = () => {
    setRat(false);
  };

  const wnTrue = () => {
    window.scrollTo(0, 20);
    setWn(true);
  };

  const wnFalse = () => {
    setWn(false);
  };

  //background-color: rgb(22, 134, 22);
  return (
    <>
      {!alg && !rat && !wn && (
        <>
          <div className="taskPage1">
            <div className="headerSection">
              <h1 className="taskHeader">Your Available Tasks</h1>
            </div>
            <div className="taskCard">
              <p className="taskTitle">Algebra Expressions Tasks</p>
              <button className="showTaskBtn" onClick={algTrue}>
                Show Tasks
              </button>
            </div>
            <div className="taskCard">
              <p className="taskTitle">Ratio Tasks</p>
              <button className="showTaskBtn" onClick={ratTrue}>
                Show Tasks
              </button>
            </div>
            <div className="taskCard">
              <p className="taskTitle">Whole Number Tasks</p>
              <button className="showTaskBtn" onClick={wnTrue}>
                Show Tasks
              </button>
            </div>
          </div>
        </>
      )}

      {alg  && !rat && !wn && <Algebra />}

      {!alg && rat && !wn && <Ratio />}

      {!alg && !rat && wn && (
        <>
          <div className="taskPage">
            <div className="headerSection">
              <h1 className="taskHeader">Your Whole Number Questions</h1>
            </div>
            <div className="algCard">
              <button className="hideBtnPos" onClick={wnFalse}>
                Hide Task
              </button>
              <p>WN</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default MyTasks;
