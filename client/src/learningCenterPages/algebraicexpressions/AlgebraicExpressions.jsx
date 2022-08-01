import "./algebraicexpressions.css";
import aSquared from "../images/a.png";
import cSquared from "../images/c.png";
import bSquared from "../images/bsqr.png";
import SqrA from "../images/SqrA.png";
import eSqr from "../images/eSqr.png";
import { useState } from "react";

function AlgebraicExpressions() {
  const [click, setClick] = useState(false);
  const [click1, setClick1] = useState(false);
  const [click2, setClick2] = useState(false);
  const [click3, setClick3] = useState(false);
  const [click4, setClick4] = useState(false);

  const [style, setStyle] = useState("AEpage");
  const [style1, setStyle1] = useState("AEpage1");
  const [style2, setStyle2] = useState("AEpage2");

  const [page, setPage] = useState(0);

  function handleClick() {
    setClick(true);
    setStyle("AEpages");
  }

  function removeClick() {
    setClick(false);
    setStyle("AEpage");
  }

  function handleClick1() {
    setClick1(true);
    setStyle1("AEpages1")
  }

  function removeClick1() {
    setClick1(false);
    setStyle1("AEpage1")
  }

  function handleClick2() {
    setClick2(true);
    setStyle1("AEpagess1")
  }

  function removeClick2() {
    setClick2(false);
    setStyle1("AEpages1")
  }

  function handleClick3() {
    setClick3(true);
    setStyle2("AEpages2")
  }

  function removeClick3() {
    setClick3(false);
    setStyle2("AEpage2")
  }

  function handleClick4() {
    setClick4(true);
    setStyle2("AEpagess2")
  }

  function removeClick4() {
    setClick4(false);
    setStyle2("AEpages2")
  }

  function nextPage() {
    setPage(1);
    window.scrollTo(0, 0);

  }

  function nextPage1() {
    setPage(2);
    window.scrollTo(0, 0);
  }

  function prevPage() {
    setPage(0);
  }

  function nextPage2() {
    setPage(3);
    window.scrollTo(0, 0);
  }

  function prevPage1() {
    setPage(1);
  }

  return (
    <>
      {page === 0 && (
        <div className={style}>
          <div className="AEspace">
            <h1 className="AEtitle">Algebraic Expressions</h1>
            <p className="AEinfo">
              Algebraic expressions are equations that use addition,
              subtraction, multiplication and division; however the equations
              are done with 'variables' alongside numbers.
            </p>
            <p className="AEinfo2">
              These variables often take the shape of letters!
            </p>
          </div>
          <div className="AElearning">
            <h2 className="AElearningHeader">Introductory Expressions</h2>
            <p className="AEinfo1">
              In algebra, variables are used instead of actual numbers, and the
              value of these variables can be unknown.
            </p>
            <p className="AEinfo1">
              A term is a number or letter on its own, or numbers and letters
              multiplied together, such as -7, 4x or 2b.
            </p>
            <p className="AEinfo2">
              An expression is when multiple terms are added, subtracted,
              multiplied or divided by each other. An exmaple of this would be:
              -7 + 2b.
            </p>
            <h1 className="AElearningHeader">Writing Expressions</h1>
            <p className="AEinfo2">
              Apples are sold in packs of 6, and bananas are sold in a set of 4.
            </p>
            <p className="AEinfo2">
              A parent buys a pack apples, and a set of bananas.
            </p>
            <p className="AEinfo2">
              There are 6 apples in a one pack, so the parent bought 6 apples,
              or (apples x 6), or 6a
            </p>
            <p className="AEinfo2">
              There are 4 bananas in a set, therefore the parent bought 4
              bananas, or (bananas x 4), or 4b
            </p>
            <p className="AEinfo2">
              Individually, '4b' and '6a' are 'terms', however if we add 4b +
              6a, we now have an 'expression' that equals 4 bananas + 6 apples.
            </p>
            <p className="AEinfo2">
              The important thing to note here is that the '4b' and the '6a'
              terms stay separate even when added together. This is because they
              have different variables, and therefore impossible to add
              together.
            </p>
            <h1 className="AElearningHeader">Question</h1>
            <p className="AEinfo2">
              If Jonathan is 'b' years old, and Kelly is twice Jonathan's age,
              but Ricky is half Jonathan's age, how would we show that using
              algebraic terms?
            </p>
            {!click && (
              <button className="AEbtn" onClick={handleClick}>
                Show Answer
              </button>
            )}
            {click && (
              <button className="AEbtn" onClick={removeClick}>
                Hide Answer
              </button>
            )}
            {click && (
              <>
                <p className="AEanswer1">
                  From the question we know that Jonathan is b years old.
                </p>
                <p className="AEanswer2">
                  Kelly is twice, or 2 x Jonathan's age, and this can be shown
                  with '2b'.
                </p>
                <p className="AEanswer2">
                  Ricky is half of Jonathan's age, this can be shown as 'b/2'.
                </p>
              </>
            )}
            <div>
              <button className="nextPage" onClick={nextPage}>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      {page === 1 && (
        <div className={style1}>
          <div className="AEspace">
            <h1 className="AEtitle">Algebraic Expressions</h1>
            <p className="AEinfo">
              Algebraic expressions are equations that use addition,
              subtraction, multiplication and division; however the equations
              are done with 'variables' alongside numbers.
            </p>
            <p className="AEinfo2">
              These variables often take the shape of letters!
            </p>
          </div>
          <div className="AElearning1">
            <h2 className="AElearningHeader">Simplifying Expressions</h2>
            <p className="AEinfo2">Collecting like terms</p>
            <p className="AEinfo2">
              What is meant be 'collecting like terms' is to simplify an
              expression, where the variables are the same.
            </p>
            <p className="AEinfo2">For example, if we have the expression:</p>
            <p className="AEanswer2">2a + 3c + 4a + c</p>
            <p className="AEinfo2">
              The 'like terms' will be the 2a + 4a, which would make 6a.
            </p>
            <p className="AEinfo2">Then 3c + c, which would make 4c.</p>
            <p className="AEinfo2">Leaving us with the finsihed expression:</p>
            <p className="AEanswer2">6a + 4c</p>

            <p className="AEinfo1">
              Another example of collecting like terms could be 3a + 4a - 2a.
            </p>
            <p className="AEinfo2">
              First of all we do the addition, following BIDMAS, 3a + 4a = 7a.
            </p>
            <p className="AEinfo2">Then we do the subtraction.</p>
            <p className="AEanswer2">
              7a - 2a = 5a, giving us our final answer.
            </p>

            <p className="AElearningHeader1">Our third example is this:</p>
            <p className="AEanswer2">4b - 2c + b</p>
            <p className="AEinfo2">
              Again, we start with finding the like terms and the addition.
            </p>
            <p className="AEanswer2">4b + b = 5b</p>
            <p className="AEanswer2">Then we have the - 2c</p>
            <p className="AEinfo2">
              But because we have 5b - 2c, and these are not like terms, or have
              different variables, they cannot be added, subtracted, multipled
              or divided by one another.
            </p>
            <p className="AEinfo2">Therefore, our final answer is:</p>
            <p className="AEanswer2">5b - 2c.</p>
            <h2 className="AElearningHeader">Question</h2>
            <p className="AEinfo1">Simplify:</p>
            <p className="AEinfo2">2x + x + 4c - 3c + 6d</p>
            {!click1 && (
              <button className="AEbtn" onClick={handleClick1}>
                Show Answer
              </button>
            )}
            {click1 && (
              <button className="AEbtn" onClick={removeClick1}>
                Hide Answer
              </button>
            )}
            {click1 && (
              <>
                <p className="AEanswer1">
                  In this expression we have 3 variables, so let's start by
                  organising them.
                </p>
                <p className="AEanswer2">2x + x = 3x</p>
                <p className="AEanswer2">4c - 3c = c</p>
                <p className="AEanswer2">+ 6d</p>
                <p className="AEanswer2">Final answer: 3x + c + 6d</p>
              </>
            )}

            <h2 className="AElearningHeader">Question 2</h2>
            <p className="AEinfo1">Simplify:</p>
            <p className="AEinfo2">2a + 4a + 7c + 4b - 2c + d</p>
            {!click2 && (
              <button className="AEbtn" onClick={handleClick2}>
                Show Answer
              </button>
            )}
            {click2 && (
              <button className="AEbtn" onClick={removeClick2}>
                Hide Answer
              </button>
            )}
            {click2 && (
              <>
                <p className="AEanswer1">
                  In this expression we have 3 variables, so let's start by
                  organising them.
                </p>
                <p className="AEanswer2">2a + 4a = 6a</p>
                <p className="AEanswer2">7c - 2c = 5c</p>
                <p className="AEanswer2">+ d</p>
                <p className="AEanswer2">+ 4b</p>
                <p className="AEanswer2">Final answer: 6a + 5c + d + 4b</p>
              </>
            )}
            <div className="arrowForm">
              <button className="prevPage" onClick={prevPage}>
                <i class="fa-solid fa-arrow-left"></i>
              </button>
              <button className="nextPage1" onClick={nextPage1}>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      )}

      {page === 2 && (
        <div className={style2}>
          <div className="AEspace">
            <h2 className="AEtitle">Algebraic Expressions</h2>
            <p className="AEinfo1">
              Algebraic expressions are equations that use addition,
              subtraction, multiplication and division; however the equations
              are done with 'variables' alongside numbers.
            </p>
            <p className="AEinfo2">
              These variables often take the shape of letters!
            </p>
          </div>
          <div className="AElearning2">
            <h2 className="AElearningHeader">Expression Multiplications</h2>
            <p className="AEinfo1">
              Algebraic expressions can be added and subtracted, however they
              can also be multiplied, so let's take a look at that!
            </p>
            <h3 className="AElearningHeader">First Example</h3>
            <p className="AEinfo1">Simplify A x A</p>
            <p className="AEinfo2">
              When you multiply a number by itself, you square it, this is the
              same in algebraic expressions.
            </p>
            <div className="squared">
              <p className="AEanswer2">So, A x A =</p>
              <img className="sqrImg" src={aSquared} alt="" />
            </div>
            <h3 className="AElearningHeader">Second Example</h3>
            <p className="AEinfo1">Simplify C x C x C x C</p>
            <p className="AEinfo2">
              For this example, c is being multiplied by itself four times.
            </p>
            <p className="AEinfo2">
              The logic follows from the previous example.
            </p>
            <div className="squared">
              <p className="AEanswer2">C x C x C x C =</p>
              <img className="sqrImg" src={cSquared} alt="" />
            </div>
            <h3 className="AElearningHeader">Question</h3>
            <p className="AEinfo1">Simplify 2b x 7b</p>

            {!click3 && (
              <button className="AEbtn" onClick={handleClick3}>
                Show Answer
              </button>
            )}
            {click3 && (
              <button className="AEbtn" onClick={removeClick3}>
                Hide Answer
              </button>
            )}
            {click3 && (
              <>
                <p className="AEanswer1">
                  The first thing to do is take the numbers, and multiply them
                  separately.
                </p>
                <p className="AEanswer1">This is 2 x 7 = 14.</p>
                <div className="squared">
                  <p className="AEanswer1">Then multiply the variables:</p>
                  <img className="bSqr" src={bSquared} alt="" />
                </div>
                <div className="squared">
                  <p className="AEanswer1">The final answer is</p>
                  <img className="sqrImg1" src={SqrA} alt="" />
                </div>
              </>
            )}

            <h3 className="AElearningHeader">Question 2</h3>
            <div className="div squared">
              <p className="AEinfo1">Simplify</p>
              <img className="eSqr" src={eSqr} alt="" />
            </div>

            {!click4 && (
              <button className="AEbtn" onClick={handleClick4}>
                Show Answer
              </button>
            )}
            {click4 && (
              <button className="AEbtn" onClick={removeClick4}>
                Hide Answer
              </button>
            )}
            {click4 && (
              <>
                <p className="AEanswer1">
                  The first thing to do is take the numbers, and multiply them
                  separately.
                </p>
                <p className="AEanswer1">This is 2 x 7 = 14.</p>
                <div className="squared">
                  <p className="AEanswer1">Then multiply the variables:</p>
                  <img className="bSqr" src={bSquared} alt="" />
                </div>
                <div className="squared">
                  <p className="AEanswer1">The final answer is</p>
                  <img className="sqrImg1" src={SqrA} alt="" />
                </div>
              </>
            )}
            <div className="arrowForm">
              <button className="prevPage" onClick={prevPage1}>
                <i class="fa-solid fa-arrow-left"></i>
              </button>
              <button className="nextPage1" onClick={nextPage2}>
                <i className="fa-solid fa-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default AlgebraicExpressions;
