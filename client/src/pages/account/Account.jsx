import "./account.css";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import avatar from "./avatar.png";

export default function Settings() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [backdrop, setBackdrop] = useState(false);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    try {
      await axios.put(
        "http://localhost:5000/api/users/" + user._id,
        updatedUser
      );
      setSuccess(true);
    } catch (err) {
      setError(true);
    }
  };

  function attemptClick() {
    setBackdrop(true);
  }

  function cancelClick() {
    setBackdrop(false);
  }

  const handleDelete = async () => {
    setError(false);
    try {
      await axios.delete(
        `http://localhost:5000/api/users/${user._id}`
      );
      setBackdrop(false);
      window.location.replace("/register");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <>
      {!backdrop && (
        <div className="settings">
          <div className="settingsWrapper">
            <div className="settingsTitle">
              {!success && (
                <span className="settingsUpdateTitle">Update Your Account</span>
              )}
              {success && (
                <span className="updatedTitle">
                  Your Account Has Been Updated!{" "}
                </span>
              )}
              <button onClick={attemptClick} className="settingsDeleteBtn">
                Delete Account
              </button>
            </div>
            <form className="settingsForm" onSubmit={handleSubmit}>
              <label>Profile Picture</label>
              <div className="settingsPP">
                <img src={avatar} alt="" />
                <label htmlFor="fileInput">
                  <i className="settingsPPIcon far fa-user-circle"></i>
                </label>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                />
              </div>
              <label>Username</label>
              <input
                type="text"
                placeholder={user.username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <label>Email</label>
              <input
                type="email"
                placeholder={user.email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="settingsSubmit" type="submit">
                Update
              </button>
              {error && <span className="Err">Something went wrong!</span>}
            </form>
          </div>
        </div>
      )}

      {backdrop && (
        <div className="settings">
          <div className="settingsWrapper">
            <div className="settingsTitle">
              <div className="modal">
                <p className="modalText">Are you sure?</p>
                <button
                  className="modalBtn modalBtn--alt"
                  onClick={cancelClick}
                >
                  Cancel
                </button>
                <button className="modalBtn" onClick={handleDelete}>
                  Confirm
                </button>
              </div>
              <span className="settingsUpdateTitle">Update Your Account</span>
              <button onClick={attemptClick} className="settingsDeleteBtn">
                Delete Account
              </button>
            </div>
            <form className="settingsForm" onSubmit={handleSubmit}>
              <label>Profile Picture</label>
              <div className="settingsPP">
                <img src={avatar} alt="" />
                <label htmlFor="fileInput">
                  <i className="settingsPPIcon far fa-user-circle"></i>
                </label>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                />
              </div>
              <label>Username</label>
              <input
                type="text"
                placeholder={user.username}
                onChange={(e) => setUsername(e.target.value)}
                minLength={6}
                required={true}
              />
              <label>Email</label>
              <input
                type="email"
                placeholder={user.email}
                onChange={(e) => setEmail(e.target.value)}
                minLength={6}
                required={true}
              />
              <label>Password</label>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                minLength={6}
                required={true}
              />
              <button className="settingsSubmit" type="submit">
                Update
              </button>
              {error && <span className="Err">Something went wrong!</span>}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
