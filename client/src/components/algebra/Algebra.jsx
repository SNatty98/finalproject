import "./algebra.css";
import { useState } from "react";
import firstImg from "./images/ef2.png";
import secondImg from "./images/e2f.png";
import thirdImg from "./images/bef2.png";
import fourthImg from "./images/bigNum.png"
import fifthImg from "./images/b.png"
import sixthImg from "./images/ba.png"
import seventhImg from "./images/onlyNum.png"

const Algebra = () => {
  const [ans, setAns] = useState();
  const [ans1, setAns1] = useState();
  const [ans2, setAns2] = useState();
  const [ans3, setAns3] = useState();
  const [ans4, setAns4] = useState();

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

  const handleSubmit4 = () => {
    setAns4(true);
  };

  const handleFalseSubmit4 = () => {
    setAns4(false);
  };

  return (
    <div className="taskPage">
      <div className="headerSection">
        <h1 className="taskHeader">Your Algebra Questions</h1>
      </div>
      <div className="algCard">
        <div className="qTop">
          <p className="qNum">1</p>
          <p className="question">
            Claire is 'n' years old, Johnson is twice Claire's age, but Beatriz
            is half of Claire's age. How can we show this in algebraic terms?
          </p>
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

        <div className="algCard1">
          <form>
            <div className="qTop">
              <p className="qNum">2</p>
              <p className="question1">
                Simplify this expression, 2b - 3d + b.
              </p>
            </div>
            <div className="answerPos">
              {ans1 === true && <h1 className="questionT">Correct!</h1>}
              {ans1 === false && <h1 className="questionF">Incorrect!</h1>}
            </div>
            <ul className="questions">
              <input
                onClick={handleSubmit1}
                name="algQ2"
                className="radioBtn"
                type="radio"
              />
              <p className="qText">3b - 3d</p>
            </ul>
            <ul className="questions">
              <input
                onClick={handleFalseSubmit1}
                name="algQ2"
                className="radioBtn"
                type="radio"
              />
              <p className="qText">b + 3d</p>
            </ul>
            <ul className="questions">
              <input
                onClick={handleFalseSubmit1}
                name="algQ2"
                className="radioBtn"
                type="radio"
              />
              <p className="qText">3bd</p>
            </ul>
          </form>
        </div>

        <div className="algCard2">
          <div className="qTop">
            <p className="qNum">3</p>
            <p className="question1">Which of these is not, an expression?</p>
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
            <p className="qText">-3b</p>
          </ul>
          <ul className="questions">
            <input
              onClick={handleFalseSubmit2}
              name="algQ3"
              className="radioBtn"
              type="radio"
            />
            <p className="qText">t + 4a</p>
          </ul>
          <ul className="questions">
            <input
              onClick={handleFalseSubmit2}
              name="algQ3"
              className="radioBtn"
              type="radio"
            />
            <p className="qText">4c + 2c</p>
          </ul>
        </div>

        <div className="algCard2">
          <div className="qTop">
            <p className="qNum">4</p>

            <p className="question1">What is 2ef x 6e simplified?</p>
          </div>
          <div className="answerPos">
            {ans3 === true && <h1 className="questionT">Correct!</h1>}
            {ans3 === false && <h1 className="questionF">Incorrect!</h1>}
          </div>
          <ul className="questions">
            <div className="wrap">
              <input
                onClick={handleFalseSubmit3}
                name="algQ4"
                className="radioBtn"
                type="radio"
              />
              <img className="firstImg" src={firstImg} alt="" />
            </div>
          </ul>
          <ul className="questions">
            <div className="wrap">
              <input
                onClick={handleSubmit3}
                name="algQ4"
                className="radioBtn"
                type="radio"
              />
              <img className="secondImg" src={secondImg} alt="" />
            </div>
          </ul>
          <ul className="questions">
            <div className="wrap">
              <input
                onClick={handleFalseSubmit3}
                name="algQ4"
                className="radioBtn"
                type="radio"
              />
              <img className="thirdImg" src={thirdImg} alt="" />
            </div>
          </ul>
        </div>

        <div className="algCard2">
          <div className="qTop">
            <p className="qNum">5</p>
            <div className="wrap">
              <p className="question1">What is </p>
              <img className="fourthImg" src={fourthImg} alt="" />
              <p className="question5">simplified?</p>
            </div>
          </div>
          <div className="answerPos">
            {ans4 === true && <h1 className="questionT">Correct!</h1>}
            {ans4 === false && <h1 className="questionF">Incorrect!</h1>}
          </div>
          <ul className="questions">
            <div className="wrap">
              <input
                onClick={handleFalseSubmit4}
                name="algQ5"
                className="radioBtn"
                type="radio"
              />
              <img className="firstImg" src={fifthImg} alt="" />
            </div>
          </ul>
          <ul className="questions">
            <div className="wrap">
              <input
                onClick={handleSubmit4}
                name="algQ5"
                className="radioBtn"
                type="radio"
              />
              <img className="fifthImg" src={sixthImg} alt="" />
            </div>
          </ul>
          <ul className="questions">
            <div className="wrap">
              <input
                onClick={handleFalseSubmit4}
                name="algQ5"
                className="radioBtn"
                type="radio"
              />
              <img className="sixthImg" src={seventhImg} alt="" />
            </div>
          </ul>
        </div>

        <div className="algCard2">
          <div className="qTop">
            <p className="qNum">6</p>
            <div className="wrap">
              <p className="question1">What is </p>
              <img className="fourthImg" src={fourthImg} alt="" />
              <p className="question5">simplified?</p>
            </div>
          </div>
          <div className="answerPos">
            {ans4 === true && <h1 className="questionT">Correct!</h1>}
            {ans4 === false && <h1 className="questionF">Incorrect!</h1>}
          </div>
          <ul className="questions">
            <div className="wrap">
              <input
                onClick={handleFalseSubmit4}
                name="algQ5"
                className="radioBtn"
                type="radio"
              />
              <img className="firstImg" src={fifthImg} alt="" />
            </div>
          </ul>
          <ul className="questions">
            <div className="wrap">
              <input
                onClick={handleSubmit4}
                name="algQ5"
                className="radioBtn"
                type="radio"
              />
              <img className="fifthImg" src={sixthImg} alt="" />
            </div>
          </ul>
          <ul className="questions">
            <div className="wrap">
              <input
                onClick={handleFalseSubmit4}
                name="algQ5"
                className="radioBtn"
                type="radio"
              />
              <img className="sixthImg" src={seventhImg} alt="" />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Algebra;
