import "./message.css";
import { useState } from "react";
import Modal from "../modal/Modal";
import axios from "axios";
import { useEffect } from "react/cjs/react.production.min";

export default function Message({ message }) {
  const [backdrop, setBackdrop] = useState(false);
  const [error, setError] = useState(false);

  function attemptClick() {
    setBackdrop(true);
  }

  function cancelClick() {
    setBackdrop(false);
  }

  const deleteClick = async () => {
    setError(false);
    try {
      await axios.delete(`http://localhost:5000/api/messages/${message._id}`);
      setBackdrop(false);
    } catch (err) {
      setError(true);
    }
  };

  // function deleteClick(message) {
  //   fetch(`http://localhost:5000/api/messages/${message._id}`, {
  //     method: "DELETE",
  //   }).then((result) => {
  //     result.json().then((resp) => {
  //       console.warn(resp);
  //     });
  //   });
  // }

  return (
    <>
      {!backdrop && (
        <div className="INpage">
          <div className="INsecondSection">
            <p className="INsmHeader">{message.title}</p>
            <p className="INtext">{message.info}</p>
            <p className="INtext">From: {message.username}</p>
            <p className="INtext">Set For: {message.date}</p>
            <button className="delBtn" onClick={attemptClick}>
              Delete Task
            </button>
            {error && <p>something went wrong</p>}
          </div>
        </div>
      )}

      {backdrop && (
        <div className="INpage">
          <div className="INsecondSection">
            <div className="modal">
              <p className="modalText">Are you sure?</p>
              <button className="modalBtn modalBtn--alt" onClick={cancelClick}>
                Cancel
              </button>
              <button className="modalBtn" onClick={deleteClick}>
                Confirm
              </button>
            </div>
            <p className="INsmHeader">{message.title}</p>
            <p className="INtext">{message.info}</p>
            <p className="INtext">From: {message.username}</p>
            <p className="INtext">Set For: {message.date}</p>
            <button className="delBtn" onClick={attemptClick}>
              Delete Task
            </button>
          </div>
        </div>
      )}
    </>
  );
}
