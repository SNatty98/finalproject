import "./account.css";
import avatar from "./avatar.png";
import { useContext } from "react";
import { Context } from "../../context/Context";

const Account = () => {
  const { user } = useContext(Context);

  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img className="ppImg" src={avatar} alt="" />
            <label htmlFor="fileInput">
              <i class="settingsPPIcon fa-regular fa-pen-to-square" />
            </label>
            <input type="file" id="fileInput" style={{display:"none"}} />
          </div>
          <label>Username</label>
          <input type="text" placeholder={user.username} />
          <label>Email</label>
          <input type="email" placeholder={user.email} />
          <label>Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update Information</button>
        </form>
      </div>
    </div>
  );
};

export default Account;
