import HomeImage from "./HomeImage.png";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="info">
        <div className="separator">
          <h1 className="header">Welcome to FreedomMaths! </h1>
          <p className="mainText">
            Here at Freedom Maths we are all about helping your development as a
            mathmetician!
          </p>
          <p className="mainText1">
            We are always looking for ways to improve our application, if there
            is any comments or suggestions you would like to make, you can use
            the contact us page located in the top bar!
          </p>
          <div className="thisBtn">
            <Link className="link" to="/about">
              <Button text="More Info?" />
            </Link>
          </div>
        </div>
        <div className="homeImg">
          <img className="img" src={HomeImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
