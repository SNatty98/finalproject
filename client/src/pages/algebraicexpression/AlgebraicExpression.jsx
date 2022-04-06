import Sidebar from "../../components/sidebar/Sidebar";
import AlgebraicExpressions from "../../learningCenterPages/algebraicexpressions/AlgebraicExpressions";
import "./algebraicexpression.css"

const AlgebraicExpression = () => {
  return (
    <div className="divider">
      <AlgebraicExpressions />
      <Sidebar />
    </div>
  );
};

export default AlgebraicExpression;
