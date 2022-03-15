import "./learningcenter.css";
import LearningTopbar from "../../components/learningtopbar/LearningTopbar";

const LearningCenter = () => {
  return (
    <div>
      <LearningTopbar />
    <div className="learnContainer">
        <div className="learnFirstSection"></div>
        <div className="learnSecondSection"></div>
    </div>
    </div>
  );
};

export default LearningCenter;
