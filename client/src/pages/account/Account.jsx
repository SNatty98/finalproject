import "./account.css";
import avatar from "./avatar.png"

const Account = () => {
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
            <i class="settingsPPIcon fa-regular fa-pen-to-square"></i>
            </label>
          </div>
          <label >Username</label>
          <input type="text" placeholder="Sean"/>
          <label >Email</label>
          <input type="email" placeholder="Sean@gmail.com"/>
          <label >Password</label>
          <input type="password"/>
          <button className="settingsSubmit">Update Information</button>
        </form>
      </div>
    </div>
  );
};

export default Account;
