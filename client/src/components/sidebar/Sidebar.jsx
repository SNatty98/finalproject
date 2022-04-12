import "./sidebar.css";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">Learning Center Links</span>
      </div>
      <div className="sidebarLinks">
        <p className="sidebarLink2">
          <Link className="link" to="/wholenumber">
            Whole Numbers
          </Link>
        </p>
        <p className="sidebarLink">
          <Link className="link" to="/">
            Decimals
          </Link>
        </p>
        <p className="sidebarLink">
          <Link className="link" to="/">
            Fractions
          </Link>
        </p>
        <p className="sidebarLink">
          <Link className="link" to="/">
            Standard Form
          </Link>
        </p>
        <p className="sidebarLink">
          <Link className="link" to="/">
            Converting Fractions
          </Link>
        </p>

        <p className="sidebarLink1">
          <Link className="link" to="/expressions">
            Algebraic Expressions
          </Link>
        </p>
        <p className="sidebarLink">
          <Link className="link" to="/expressions">
            Algebraic Formulae
          </Link>
        </p>
        <p className="sidebarLink">
          <Link className="link" to="/expressions">
            Linear Equations
          </Link>
        </p>
        <p className="sidebarLink">
          <Link className="link" to="/expressions">
            Inequalities
          </Link>
        </p>

        <p className="sidebarLink1">
          <Link className="link" to="/">
            Ratios
          </Link>
        </p>
        <p className="sidebarLink">
          <Link className="link" to="/">
            Percentages
          </Link>
        </p>

        <p className="sidebarLink1">
          <Link className="link" to="/">
            Pythagoras
          </Link>
        </p>
        <p className="sidebarLink">
          <Link className="link" to="/">
            Vectors
          </Link>
        </p>
        <p className="sidebarLink">
          <Link className="link" to="/">
            Transformations
          </Link>
        </p>
        <p className="sidebarLink">
          <Link className="link" to="/">
            Trigonometry
          </Link>
        </p>

        <p className="sidebarLink1">
          <Link className="link" to="/">
            Problem Solving Intro
          </Link>
        </p>
        <p className="sidebarLink">
          <Link className="link" to="/">
            Number Problems
          </Link>
        </p>
        <p className="sidebarLink">
          <Link className="link" to="/">
            Algebraic Problems
          </Link>
        </p>
        <p className="sidebarLink">
          <Link className="link" to="/">
            Statistical Problems
          </Link>
        </p>

      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle1">FOLLOW US</span>
        <div className="sidebarSocial">
          <i className="sidebarIcon fa-brands fa-facebook-square"></i>
          <i className="sidebarIcon1 fa-brands fa-twitter-square"></i>
          <i className="sidebarIcon1 fa-brands fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
