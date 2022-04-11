import "./ratio.css";
import { useState } from "react";

const Ratio = () => {
  const [ans, setAns] = useState();

  const handleSubmit = () => {
    setAns(true);
  };

  const handleFalseSubmit = () => {
    setAns(false);
  };

  return (
    <div className="taskPage">
      <div className="headerSection">
        <h1 className="taskHeader">Your Ratio Questions</h1>
      </div>
      <div className="ratCard">
        <div className="qTop">
          <div className="qNum">1</div>
          <p className="question1">What is the ratio of these circles?</p>
        </div>
        <div className="answerPos">
          {ans === true && <h1 className="questionT">Correct!</h1>}
          {ans === false && <h1 className="questionF">Incorrect!</h1>}
        </div>
        <ul className="questions">
          <input
            onClick={handleFalseSubmit}
            name="algQ1"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">Claire = n. Johnson = 2xn. Beatriz = 1. </p>
        </ul>
        <ul className="questions">
          <input
            onClick={handleFalseSubmit}
            name="algQ1"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">Claire = b. Johnson = b + n. Beatriz = n/2.</p>
        </ul>
        <ul className="questions">
          <input
            onClick={handleSubmit}
            name="algQ1"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">Claire = n. Johnson = 2n. Beatriz = n/2.</p>
        </ul>
      </div>
    </div>
  );
};

export default Ratio;
