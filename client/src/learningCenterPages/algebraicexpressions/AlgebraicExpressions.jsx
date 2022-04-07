import "./algebraicexpressions.css";
import { useState } from "react";

function AlgebraicExpressions() {
  const [click, setClick] = useState(false);
  const [page, setPage] = useState(0);

  function handleClick() {
    setClick(true);
  }

  function handleClick1() {
    setClick(false);
  }

  function nextPage() {
    setPage(1);
  }

  return (
    <>
      {page === 0 && (
        <div className="AEpage">
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
              <button className="AEbtn" onClick={handleClick1}>
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
        <div className="AEpage">
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
          </div>
        </div>
      )}
    </>
  );
}

export default AlgebraicExpressions;
