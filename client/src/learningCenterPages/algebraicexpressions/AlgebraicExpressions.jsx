import "./algebraicexpressions.css";

const AlgebraicExpressions = () => {
  return (
    <div className="AEpage">
      <div className="AEspace">
        <h1 className="AEtitle">Algebraic Expressions</h1>
        <p className="AEinfo">
          Algebraic expressions are equations that use addition, subtraction,
          multiplication and division; however the equations are done with
          'variables' alongside numbers.
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
          An expression is when multiple terms are added, subtracted, multiplied
          or divided by each other. An exmaple of this would be: -7 + 2b.
        </p>
      </div>
    </div>
  );
};

export default AlgebraicExpressions;
