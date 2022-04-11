import "./ratio.css";
import circles from "./images/circleRatio.png";
import fraction from "./images/fraction.png";
import { useState } from "react";

const Ratio = () => {
  const [ans, setAns] = useState();
  const [ans1, setAns1] = useState();
  const [ans2, setAns2] = useState();
  const [ans3, setAns3] = useState();
  const [ans4, setAns4] = useState();
  const [ans5, setAns5] = useState();
  const [ans6, setAns6] = useState();

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

  const handleSubmit5 = () => {
    setAns5(true);
  };

  const handleFalseSubmit5 = () => {
    setAns5(false);
  };

  const handleSubmit6 = () => {
    setAns6(true);
  };

  const handleFalseSubmit6 = () => {
    setAns6(false);
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
          <p className="question4">
            There are 36 lollipop's available between the last 3 children at the
            party,
          </p>
          <p className="question44">which of these is a possible ratio?</p>
        </div>
        <div className="answerPos">
          {ans3 === true && <h1 className="questionT">Correct!</h1>}
          {ans3 === false && <h1 className="questionF">Incorrect!</h1>}
        </div>
        <ul className="questions">
          <input
            onClick={handleSubmit3}
            name="algQ4"
            className="radioBtn1"
            type="radio"
          />
          <p className="qText1">2 : 1 : 1</p>
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

      <div className="ratCard1">
        <div className="qTop">
          <div className="qNum">5</div>
          <p className="question1">Simplify 5.6 : 4</p>
        </div>
        <div className="answerPos">
          {ans4 === true && <h1 className="questionT">Correct!</h1>}
          {ans4 === false && <h1 className="questionF">Incorrect!</h1>}
        </div>
        <ul className="questions">
          <input
            onClick={handleFalseSubmit4}
            name="algQ5"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">56 : 40</p>
        </ul>
        <ul className="questions">
          <input
            onClick={handleSubmit4}
            name="algQ5"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">7 : 5</p>
        </ul>
        <ul className="questions">
          <input
            onClick={handleFalseSubmit4}
            name="algQ5"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">8 : 4</p>
        </ul>
      </div>

      <div className="ratCard2">
        <div className="qTop">
          <div className="qNum">6</div>
          <p className="question6">
            If a class of girls and boys was divided in the ratio of 5 : 3,
          </p>
          <p className="question66">could there be 42 students?</p>
        </div>
        <div className="answerPos">
          {ans5 === true && <h1 className="questionT">Correct!</h1>}
          {ans5 === false && <h1 className="questionF">Incorrect!</h1>}
        </div>
        <ul className="questions">
          <input
            onClick={handleFalseSubmit5}
            name="algQ6"
            className="radioBtn1"
            type="radio"
          />
          <p className="qText1">Yes</p>
        </ul>
        <ul className="questions">
          <input
            onClick={handleSubmit5}
            name="algQ6"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">No</p>
        </ul>
        <ul className="questions">
          <input
            onClick={handleFalseSubmit5}
            name="algQ6"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">Impossible to tell</p>
        </ul>
      </div>

      <div className="ratCard2">
        <div className="qTop">
          <div className="qNum">7</div>
          <p className="question7">
            Three women receive a £240 bonus at work to be shared at a ratio of
            5 : 3 : 2.
          </p>
          <p className="question77">How much do they each recieve?</p>
        </div>
        <div className="answerPos">
          {ans6 === true && <h1 className="questionT">Correct!</h1>}
          {ans6 === false && <h1 className="questionF">Incorrect!</h1>}
        </div>
        <ul className="questions">
          <input
            onClick={handleSubmit6}
            name="algQ7"
            className="radioBtn1"
            type="radio"
          />
          <p className="qText1">£120, £72, £48</p>
        </ul>
        <ul className="questions">
          <input
            onClick={handleFalseSubmit6}
            name="algQ7"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">£140, £70, £30</p>
        </ul>
        <ul className="questions">
          <input
            onClick={handleFalseSubmit6}
            name="algQ7"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">£120, £70, £50</p>
        </ul>
      </div>
    </div>
  );
};

export default Ratio;
