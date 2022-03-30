import classes from "./learningcenter.module.css";
import "./arrowStyling.css";

const LearningCenter = () => {
  return (
    <div>
      <div className={classes.learnContainer}>
          <h3 className={classes.lHeader}>Topics</h3>
        <div className={classes.numLearnSection}>
          <h1 className={classes.numHeader}>Number</h1>
          <i className="arrowIcon fa-solid fa-circle-arrow-right"></i>
          <ul className={classes.listed}>
            <div className={classes.listArea}>
              <p className={classes.numText}>Whole Numbers</p>
              <p className={classes.numText}>Decimals</p>
              <p className={classes.numText}>Fractions</p>
              <p className={classes.numText}>Standard Form</p>
              <p className={classes.numText}>
                Converting Fractions, decimals and percentages
              </p>
            </div>
          </ul>
        </div>
        <div className={classes.algLearnSection}>
          <h1 className={classes.algHeader}>Algebra</h1>
          <i className="arrowIcon fa-solid fa-circle-arrow-right"></i>
          <ul className={classes.listed}>
            <div className={classes.listArea}>
              <p className={classes.algText}>Algebraic Expressions</p>
              <p className={classes.algText}>Algebraic Formulae</p>
              <p className={classes.algText}>Solving Linear Equations</p>
              <p className={classes.algText}>Solving Simultaneous Equations</p>
              <p className={classes.algText}>Quadratic Equations</p>
              <p className={classes.algText}>Inequalities</p>
            </div>
          </ul>
        </div>
        <div className={classes.geomLearnSection}>
          <h1 className={classes.geomHeader}>Geometry</h1>
          <i className="arrowIcon fa-solid fa-circle-arrow-right"></i>
          <ul className={classes.listed}>
            <div className={classes.listArea}>
              <p className={classes.geomText}>Angles, Lines and Polygons</p>
              <p className={classes.geomText}>Pythagoras</p>
              <p className={classes.geomText}>Vectors</p>
              <p className={classes.geomText}>Transformations</p>
              <p className={classes.geomText}>Trigonometry</p>
              <p className={classes.geomText}>2-Dimensional Shapes</p>
            </div>
          </ul>
        </div>
        <div className={classes.ratLearnSection}>
          <h1 className={classes.ratHeader}>Ratio</h1>
          <i className="arrowIcon fa-solid fa-circle-arrow-right"></i>
          <ul className={classes.listed}>
            <div className={classes.listArea}>
              <p className={classes.ratText}>Ratio In Context</p>
              <p className={classes.ratText}>Pecentages</p>
              <p className={classes.ratText}>Direct and Inverse Proportion</p>
            </div>
          </ul>
        </div>
        <div className={classes.probLearnSection}>
          <div className={classes.headerSection}>
            <h3 className={classes.firstProbHeader}>Problem</h3>
            <h3 className={classes.probHeader}>Solving</h3>
          </div>
          <i className="probArrowIcon fa-solid fa-circle-arrow-right"></i>
          <ul className={classes.listed}>
            <div className={classes.listArea}>
              <p className={classes.probText}>Problem Solving Introduction</p>
              <p className={classes.probText}>Solving Number Problems</p>
              <p className={classes.probText}>Solving Algebraic problems</p>
              <p className={classes.probText}>Solving Statistical Problems</p>
              <p className={classes.probText}>Solving Geometric Problems</p>
              <p className={classes.probText}>Solving Graphical Problems</p>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default LearningCenter;
