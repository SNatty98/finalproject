import { useState, useContext } from "react";
import { Context } from "../../context/Context";
import "./sendmessage.css";
import headerImg from "./sendMessageHeader.jpg";
import axios from "axios";

export default function SendMessage() {
  const [title, setTitle] = useState("");
  const [info, setInfo] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState(false);

  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const newMessage = {
      username: user.username,
      title,
      info,
      date,
    };
    try {
      await axios.post("http://localhost:5000/api/messages", newMessage);
      window.location.replace("/adminhome");
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="sendMessage">
      <img className="SMImg" alt="" src={headerImg} />
      <form className="SMForm" onSubmit={handleSubmit}>
        <div className="SMFormGroup">
          <input
            type="text"
            placeholder="Task Title"
            className="SMInput1"
            autoFocus={true}
            onChange={(e) => setTitle(e.target.value)}
            required={true}
            minLength={4}
          />
          <input
            type="text"
            placeholder="Set a date"
            className="setFor"
            autoFocus={true}
            onChange={(e) => setDate(e.target.value)}
            required={true}
            minLength={4}
          />
        </div>
        <div className="SMFormGroup">
          <textarea
            placeholder="Write your task description here!"
            type="text"
            className="SMInput SMText"
            onChange={(e) => setInfo(e.target.value)}
            required={true}
            minLength={15}
          ></textarea>
        </div>
        <button className="SMBtn" type="submit">
          Publish Task
        </button>
        {error && (
          <div>
            <h3 className="errorText">Something went wrong!</h3>
            <h3 className="errorText1">Please try again</h3>
          </div>
        )}
      </form>
    </div>
  );
}
