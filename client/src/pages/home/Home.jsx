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
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            officiis vero rem sunt velit tenetur, harum repellat aperiam, nulla
            quasi nesciunt quibusdam beatae sint molestias, incidunt eveniet
            iste totam explicabo! Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Fugit numquam possimus rem, recusandae delectus
            sint modi commodi porro neque eum, ullam tempora molestiae
            consequuntur ducimus pariatur provident inventore dignissimos
            doloribus? Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Hic, esse? Excepturi aperiam nisi ea cupiditate sed fugiat, ipsum
            numquam odio nam saepe magnam facilis quam odit, at laudantium non
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio
            excepturi suscipit, sapiente voluptate voluptas nemo amet magnam
            inventore, debitis fuga modi corrupti consequuntur, voluptatem ea
            maiores nostrum eveniet tempora ad. 
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
