import "./learningcenter.css";
import LearningTopbar from "../../components/learningtopbar/LearningTopbar";

const LearningCenter = () => {
  return (
    <div>
    <div className="learnContainer">
        <div className="learnFirstSection">
          <h1 className="learnHeader">Number</h1>
        </div>
        <div className="learnSection">
          <h1 className="learnHeader">Algebra</h1>
        </div>
        <div className="learnSection">
          <h1 className="learnHeader">Trigonometry</h1>
        </div>
        <div className="learnSection">
          <h1 className="learnHeader">Ratio</h1>
        </div>
        <div className="learnSection">
          <h1 className="learnHeader">Probability</h1>
        </div>
    </div>
    </div>
  );
};

export default LearningCenter;
