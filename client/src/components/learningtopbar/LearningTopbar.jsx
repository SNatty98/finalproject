import "./learningtopbar.css";
import { Link } from "react-router-dom";

const LearningTopbar = () => {
  return (
    <div className="learnTopbar">
      <div className="lTopCenter">
        <ul className="learnTopList">
          <Link className="link" to="/number">
            <li className="lTopListItem">Number</li>
          </Link>
          <Link className="link" to="/algebra">
            <li className="lTopListItem">Algebra</li>
          </Link>
          <Link className="link" to="/trigonometry">
            <li className="lTopListItem">Trigonometry</li>
          </Link>
          <Link className="link" to="/ratio">
            <li className="lTopListItem">Ratio</li>
          </Link>
          <Link className="link" to="/probability">
            <li className="lTopListItem">Probability</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default LearningTopbar;
