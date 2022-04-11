import "./ratio.css";
import circles from "./images/circleRatio.png";
import fraction from "./images/fraction.png";
import { useState } from "react";

const Ratio = () => {
  const [ans, setAns] = useState();
  const [ans1, setAns1] = useState();
  const [ans2, setAns2] = useState();
  const [ans3, setAns3] = useState();

  const handleSubmit = () => {
    setAns(true);
  };

  const handleFalseSubmit = () => {
    setAns(false);
  };

  const handleSubmit1 = () => {
    setAns1(true);
  };

  const handleFalseSubmit1 = () => {
    setAns1(false);
  };

  const handleSubmit2 = () => {
    setAns2(true);
  };

  const handleFalseSubmit2 = () => {
    setAns2(false);
  };

  const handleSubmit3 = () => {
    setAns3(true);
  };

  const handleFalseSubmit3 = () => {
    setAns3(false);
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
          <img className="circlesImg" src={circles} alt="" />
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
          <p className="qText">5 : 3 and 4</p>
        </ul>
        <ul className="questions">
          <input
            onClick={handleFalseSubmit}
            name="algQ1"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">5 and 3 and 4</p>
        </ul>
        <ul className="questions">
          <input
            onClick={handleSubmit}
            name="algQ1"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">5 : 3 : 4</p>
        </ul>
      </div>

      <div className="ratCard1">
        <div className="qTop">
          <div className="qNum">2</div>
          <p className="question1">Simplify 6 : 30</p>
        </div>
        <div className="answerPos">
          {ans1 === true && <h1 className="questionT">Correct!</h1>}
          {ans1 === false && <h1 className="questionF">Incorrect!</h1>}
        </div>
        <ul className="questions">
          <input
            onClick={handleFalseSubmit1}
            name="algQ2"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">3 : 15</p>
        </ul>
        <ul className="questions">
          <input
            onClick={handleSubmit1}
            name="algQ2"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">1 : 5</p>
        </ul>
        <ul className="questions">
          <input
            onClick={handleFalseSubmit1}
            name="algQ2"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">5 : 3</p>
        </ul>
      </div>

      <div className="ratCard1">
        <div className="qTop">
          <div className="qNum">3</div>
          <div className="wrap">
            <p className="question1">Simplify</p>
            <img className="fractionsImg" src={fraction} alt="" />
          </div>
        </div>
        <div className="answerPos">
          {ans2 === true && <h1 className="questionT">Correct!</h1>}
          {ans2 === false && <h1 className="questionF">Incorrect!</h1>}
        </div>
        <ul className="questions">
          <input
            onClick={handleSubmit2}
            name="algQ3"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">8 : 9</p>
        </ul>
        <ul className="questions">
          <input
            onClick={handleFalseSubmit2}
            name="algQ3"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">2 : 3</p>
        </ul>
        <ul className="questions">
          <input
            onClick={handleFalseSubmit2}
            name="algQ3"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">4 : 5</p>
        </ul>
      </div>

      <div className="ratCard2">
        <div className="qTop">
          <div className="qNum">4</div>
          <p className="question1">
            There are 36 lollipop's available between the last 3 children at the
            party, which of these is a possible ratio?
          </p>
        </div>
        <div className="answerPos">
          {ans3 === true && <h1 className="questionT">Correct!</h1>}
          {ans3 === false && <h1 className="questionF">Incorrect!</h1>}
        </div>
        <ul className="questions">
          <input
            onClick={handleSubmit3}
            name="algQ4"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">2 : 1 : 1</p>
        </ul>
        <ul className="questions">
          <input
            onClick={handleFalseSubmit3}
            name="algQ4"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">1 : 3 : 4</p>
        </ul>
        <ul className="questions">
          <input
            onClick={handleFalseSubmit3}
            name="algQ4"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">3 : 3 : 3</p>
        </ul>
      </div>
    </div>
  );
};

export default Ratio;
