import "./ratio.css";
import circles from "./images/circleRatio.png";
import fraction from "./images/fraction.png";
import fraction1 from "./images/fraction1.png";
import { useState } from "react";

const Ratio = () => {
  const [ans, setAns] = useState(null);
  const [ans1, setAns1] = useState(null);
  const [ans2, setAns2] = useState(null);
  const [ans3, setAns3] = useState(null);
  const [ans4, setAns4] = useState(null);
  const [ans5, setAns5] = useState(null);
  const [ans6, setAns6] = useState(null);
  const [ans7, setAns7] = useState(null);
  const [ans8, setAns8] = useState(null);
  const [ans9, setAns9] = useState(null);

  const [tip, setTip] = useState(false);
  const [tip1, setTip1] = useState(false);
  const [tip2, setTip2] = useState(false);
  const [tip3, setTip3] = useState(false);
  const [tip4, setTip4] = useState(false);
  const [tip5, setTip5] = useState(false);
  const [tip6, setTip6] = useState(false);
  const [tip7, setTip7] = useState(false);
  const [tip8, setTip8] = useState(false);
  const [tip9, setTip9] = useState(false);

  const handleTip = () => {
    setTip(true);
  };

  const handleTip1 = () => {
    setTip1(true);
  };

  const handleTip2 = () => {
    setTip2(true);
  };

  const handleTip3 = () => {
    setTip3(true);
  };

  const handleTip4 = () => {
    setTip4(true);
  };

  const handleTip5 = () => {
    setTip5(true);
  };

  const handleTip6 = () => {
    setTip6(true);
  };

  const handleTip7 = () => {
    setTip7(true);
  };

  const handleTip8 = () => {
    setTip8(true);
  };

  const handleTip9 = () => {
    setTip9(true);
  };

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

  const handleSubmit7 = () => {
    setAns7(true);
  };

  const handleFalseSubmit7 = () => {
    setAns7(false);
  };

  const handleSubmit8 = () => {
    setAns8(true);
  };

  const handleFalseSubmit8 = () => {
    setAns8(false);
  };

  const handleSubmit9 = () => {
    setAns9(true);
  };

  const handleFalseSubmit9 = () => {
    setAns9(false);
  };

  return (
    <div className="ratPage">
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
        {tip === false && ans === null && (
          <button className="tipBtn" onClick={handleTip}>
            Need a hint?
          </button>
        )}
        {tip === true && ans === null && (
          <div className="hintPos">
            <p className="hint">
              The formatting is important! Try to remember back to the learning
              center.
            </p>
          </div>
        )}
        {ans && (
          <div className="correctAns">
            <p className="correctPos">
              Well done! Ratio's are always separated by colons ":"
            </p>
          </div>
        )}
        {ans === false && (
          <div className="falseAns">
            <p className="correctPos">
              Ratio's are always separated by colons ":" be more careful next
              time!
            </p>
          </div>
        )}
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
        <div className="ansPos">
          {tip1 === false && ans1 === null && (
            <button className="tipBtn" onClick={handleTip1}>
              Need a hint?
            </button>
          )}
          {tip1 === true && ans1 === null && (
            <div className="hintPos">
              <p className="hint">Look for common factors!</p>
            </div>
          )}
          {ans1 && (
            <div className="correctAns">
              <p className="correctPos">
                Well done! Full number ratio's are easily simplified through
                division!
              </p>
            </div>
          )}
          {ans1 === false && (
            <div className="falseAns">
              <p className="correctPos">
                Ratio's can be separated through division! Can your answer be
                simplified further?
              </p>
            </div>
          )}
        </div>
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
        <div className="ansPos">
          {tip2 === false && ans2 === null && (
            <button className="tipBtn" onClick={handleTip2}>
              Need a hint?
            </button>
          )}
          {tip2 === true && ans2 === null && (
            <div className="hintPos">
              <p className="hint">Start by finding a common denominator.</p>
            </div>
          )}
          {ans2 && (
            <div className="correctAns">
              <p className="correctPos">
                Good Job! Finding a common denominator (12), and then
                multiplying by that denominator will give you the correct
                answer.
              </p>
            </div>
          )}
          {ans2 === false && (
            <div className="falseAns">
              <p className="correctPos">
                Unlucky! After finding the common denominator, multiply by the
                denominator, bottom and top. Then ensure it is fully simplified!
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="ratCard1">
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
        <div className="ansPos1">
          {tip3 === false && ans3 === null && (
            <button className="tipBtn" onClick={handleTip3}>
              Need a hint?
            </button>
          )}
          {tip3 === true && ans3 === null && (
            <div className="hintPos">
              <p className="hint">36 divides by 9, use it!</p>
            </div>
          )}
          {ans3 && (
            <div className="correctAns">
              <p className="correctPos">
                Good job! Dividing by 3, then dividing by the answer (9), puts
                you on the path to success!
              </p>
            </div>
          )}
          {ans3 === false && (
            <div className="falseAns">
              <p className="correctPos">
                Unlucky! Dividing by 3, then dividing by the answer (9), puts
                you on the path to success!
              </p>
            </div>
          )}
        </div>
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
        <div className="ansPos">
          {tip4 === false && ans4 === null && (
            <button className="tipBtn" onClick={handleTip4}>
              Need a hint?
            </button>
          )}
          {tip4 === true && ans4 === null && (
            <div className="hintPos">
              <p className="hint">Multiply up and find the common factors.</p>
            </div>
          )}
          {ans4 && (
            <div className="correctAns">
              <p className="correctPos">
                Well done! Multiplying up and then simplifying is the route.
              </p>
            </div>
          )}
          {ans4 === false && (
            <div className="falseAns">
              <p className="correctPos">
                Unlucky! Multiplying up and then simplifying is the route.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="ratCard1">
        <div className="qTop">
          <div className="qNum">6</div>
          <p className="question2">
            Could a class of 64 boys and girls be divided in the ratio of 5 : 3?
          </p>
        </div>
        <div className="answerPos">
          {ans5 === true && <h1 className="questionT">Correct!</h1>}
          {ans5 === false && <h1 className="questionF">Incorrect!</h1>}
        </div>
        <ul className="questions">
          <input
            onClick={handleSubmit5}
            name="algQ6"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">Yes</p>
        </ul>
        <ul className="questions">
          <input
            onClick={handleFalseSubmit5}
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
        <div className="ansPos">
          {tip5 === false && ans5 === null && (
            <button className="tipBtn" onClick={handleTip5}>
              Need a hint?
            </button>
          )}
          {tip5 === true && ans5 === null && (
            <div className="hintPos">
              <p className="hint">64 is dividable by (5 + 3) = 8, use it!</p>
            </div>
          )}
          {ans5 && (
            <div className="correctAns">
              <p className="correctPos">
                Well done! 8 x 5 = 40. 3 x 8 = 24. 24 + 40 = 64.
              </p>
            </div>
          )}
          {ans5 === false && (
            <div className="falseAns">
              <p className="correctPos">
                Unlucky! 5 x 8 = 40. 3 x 8 = 24. 24 + 40 = 64.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="ratCard1">
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
        <div className="ansPos1">
          {tip6 === false && ans6 === null && (
            <button className="tipBtn" onClick={handleTip6}>
              Need a hint?
            </button>
          )}
          {tip6 === true && ans6 === null && (
            <div className="hintPos">
              <p className="hint">
                240 is dividable by (5 + 3 + 2) = 10, use it!
              </p>
            </div>
          )}
          {ans6 && (
            <div className="correctAns">
              <p className="correctPos">
                Well done! 5 is half of (5 + 3 + 2 = 10), which equates to 120.
                120 / 5 = 24. 24 x 3 = 72. 24 x 2 = 48.
              </p>
            </div>
          )}
          {ans6 === false && (
            <div className="falseAns">
              <p className="correctPos">
                Unlucky! 5 is half of (5 + 3 + 2 = 10), which equates to 120.
                120 / 5 = 24. 24 x 3 = 72. 24 x 2 = 48.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="ratCard1">
        <div className="qTop">
          <div className="qNum">8</div>
          <p className="question1">How can you simplify the ratio 3 : 67?</p>
        </div>
        <div className="answerPos">
          {ans7 === true && <h1 className="questionT">Correct!</h1>}
          {ans7 === false && <h1 className="questionF">Incorrect!</h1>}
        </div>
        <ul className="questions">
          <input
            onClick={handleFalseSubmit7}
            name="algQ8"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">2 : 6</p>
        </ul>
        <ul className="questions">
          <input
            onClick={handleFalseSubmit7}
            name="algQ8"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">Impossible</p>
        </ul>
        <ul className="questions">
          <input
            onClick={handleSubmit7}
            name="algQ8"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">1 : 9</p>
        </ul>
        <div className="ansPos">
          {tip7 === false && ans7 === null && (
            <button className="tipBtn" onClick={handleTip7}>
              Need a hint?
            </button>
          )}
          {tip7 === true && ans7 === null && (
            <div className="hintPos">
              <p className="hint">Is 3 a factor of 67?</p>
            </div>
          )}
          {ans7 && (
            <div className="correctAns">
              <p className="correctPos">
                Well done! 3 / 3 = 1. 67 / 3 = 9. 1 : 9.
              </p>
            </div>
          )}
          {ans7 === false && (
            <div className="falseAns">
              <p className="correctPos">
                Unlucky! 3 / 3 = 1. 67 / 3 = 9. 1 : 9.
              </p>
            </div>
          )}
        </div>
      </div>

      <div className="ratCard1">
        <div className="qTop">
          <div className="qNum">9</div>
          <div className="wrap">
            <p className="question1">Simplify</p>
            <img className="fractionsImg1" src={fraction1} alt="" />
          </div>
        </div>
        <div className="answerPos">
          {ans8 === true && <h1 className="questionT">Correct!</h1>}
          {ans8 === false && <h1 className="questionF">Incorrect!</h1>}
        </div>
        <ul className="questions">
          <input
            onClick={handleSubmit8}
            name="algQ9"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">32 : 15</p>
        </ul>
        <ul className="questions">
          <input
            onClick={handleFalseSubmit8}
            name="algQ9"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">16 : 7.5</p>
        </ul>
        <ul className="questions">
          <input
            onClick={handleSubmit8}
            name="algQ9"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">7 : 20</p>
        </ul>
        <div className="ansPos">
          {tip8 === false && ans8 === null && (
            <button className="tipBtn" onClick={handleTip8}>
              Need a hint?
            </button>
          )}
          {tip8 === true && ans8 === null && (
            <div className="hintPos">
              <p className="hint">Start by finding a common denominator</p>
            </div>
          )}
          {ans8 && (
            <div className="correctAns1">
              <p className="correctPos">
                Good Job! Finding a common denominator (40), then multiplying
                the numerator, and then multiplying both by that denominator
                will give you the correct answer.
              </p>
            </div>
          )}
          {ans8 === false && (
            <div className="falseAns">
              <p className="correctPos">wrong</p>
            </div>
          )}
        </div>
      </div>

      <div className="ratCard2">
        <div className="qTop">
          <div className="qNum">10</div>
          <p className="question1">Can you simplify 15 : 2.5?</p>
        </div>
        <div className="answerPos">
          {ans9 === true && <h1 className="questionT">Correct!</h1>}
          {ans9 === false && <h1 className="questionF">Incorrect!</h1>}
        </div>
        <ul className="questions">
          <input
            onClick={handleFalseSubmit9}
            name="algQ10"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">30 : 5</p>
        </ul>
        <ul className="questions">
          <input
            onClick={handleFalseSubmit9}
            name="algQ10"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">Nope!</p>
        </ul>
        <ul className="questions">
          <input
            onClick={handleSubmit9}
            name="algQ10"
            className="radioBtn"
            type="radio"
          />
          <p className="qText">6 : 1</p>
        </ul>
        <div className="ansPos">
          {tip9 === false && ans9 === null && (
            <button className="tipBtn1" onClick={handleTip9}>
              Need a hint?
            </button>
          )}
          {tip9 === true && ans9 === null && (
            <div className="hintPos1">
              <p className="hint">Multiply until 2.5 is a whole number?</p>
            </div>
          )}
          {ans9 && (
            <div className="correctAns2">
              <p className="correctPos">
                Well done! To deal with decimals in ratio's, multiply the ratio
                until it's a whole number, and then simplified if possible!
              </p>
            </div>
          )}
          {ans9 === false && (
            <div className="falseAns2">
              <p className="correctPos">
                Unlucky! To deal with decimals in ratio's, multiply the ratio
                until it's a whole number, and then simplified if possible!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ratio;
