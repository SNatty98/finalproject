import "./account.css";
import { useContext, useState } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import avatar from "./avatar.png";

export default function Settings() {
  const [file, setFile] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [success, setSuccess] = useState(false);

  const [error, setError] = useState(false);
  const [backdrop, setBackdrop] = useState(false);

  const { user, dispatch } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "UPDATE_START" });
    const updatedUser = {
      userId: user._id,
      username,
      email,
      password,
    };
    if (file) {
      const data = new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      updatedUser.profilePic = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.put("/users/" + user._id, updatedUser);
      setSuccess(true);
      dispatch({ type: "UPDATE_SUCCESS", payload: res.data });
    } catch (err) {
      dispatch({ type: "UPDATE_FAILURE" });
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
      const res = await axios.delete(
        `http://localhost:5000/api/users/${user._id}`
      );
      setBackdrop(false);
      window.location.replace("/login");
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
              <span className="settingsUpdateTitle">Update Your Account</span>
              <button onClick={attemptClick} className="settingsDeleteTitle">
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
                  onChange={(e) => setFile(e.target.files[0])}
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
              {success && (
                <span
                  style={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "20px",
                  }}
                >
                  Profile has been updated...
                </span>
              )}

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
              <button onClick={attemptClick} className="settingsDeleteTitle">
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
                  onChange={(e) => setFile(e.target.files[0])}
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
              {success && (
                <span
                  style={{
                    color: "green",
                    textAlign: "center",
                    marginTop: "20px",
                  }}
                >
                  Profile has been updated...
                </span>
              )}
            </form>
          </div>
        </div>
      )}
    </>
  );
}
