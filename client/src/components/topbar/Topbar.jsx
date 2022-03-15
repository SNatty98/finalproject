import "./topbar.css";
import { Link } from "react-router-dom";
import LogoFreedom from "./LogoFreedom.svg";
import Avatar from "./avatar.png";
import React from "react";

const Topbar = () => {
  const user = false;
  const admin = false;
  return (
    <div className="top">
      {user && !admin ? (
        <div className="topLeft">
          <Link className="link" to="/">
            <img className="logoImg" src={LogoFreedom} alt="" />
          </Link>
        </div>
      ) : (
        ""
      )}

      {!user ? (
        <div className="topLeft">
          <Link className="link" to="/">
            <img className="logoImg" src={LogoFreedom} alt="" />
          </Link>
        </div>
      ) : (
        ""
      )}

      {admin ? (
        <div className="topLeft">
          <Link className="link" to="/adminhome">
            <img className="logoImg" src={LogoFreedom} alt="" />
          </Link>
        </div>
      ) : (
        ""
      )}

      <div className="topCenter">
        <ul className="topList">
          {!user ? (
            <>
              <li className="topListItem">
                <Link className="link" to="/">
                  HOME
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/about">
                  ABOUT
                </Link>
              </li>
              <li className="topListItem">
                <Link className="link" to="/contact">
                  CONTACT
                </Link>
              </li>
            </>
          ) : (
            ""
          )}

          {user && admin ? (
            <>
              <li className="topListItem">
                <Link className="link" to="/adminhome">
                  HOME
                </Link>
              </li>

              <li className="topListItem">
                <Link className="link" to="/settasks">
                  SET TASKS
                </Link>
              </li>

              <li className="topListItem">
                <Link className="link" to="/results">
                  STUDENTS
                </Link>
              </li>
            </>
          ) : (
            ""
          )}

          {user && !admin ? (
            <li className="topListItem">
              <Link className="link" to="/learningcenter">
                LEARNING CENTER
              </Link>
            </li>
          ) : (
            ""
          )}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link className="link" to="/account">
            <img className="topImg" src={Avatar} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Topbar;
