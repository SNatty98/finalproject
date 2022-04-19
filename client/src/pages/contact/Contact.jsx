import "./contact.css";
import { useState } from "react";
import axios from "axios";

const Contact = () => {
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [query, setQuery] = useState("");
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    const newContact = {
      email,
      title,
      query,
    };
    try {
      await axios.post("http://localhost:5000/api/contacts", newContact);
      setSuccess(true);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="contact">
      <div className="cFirstSection">
        {success === null && (
          <h1 className="cHeader">Let Us Know What You Think!</h1>
        )}
        {success === true && (
          <h1 className="cHeader">Your Query Has Been Received!</h1>
        )}
      </div>
      <form className="cSecondSection" onSubmit={handleSubmit}>
        <div className="wrapped">
          <input
            type="email"
            placeholder="Email Address"
            className="emailInput"
            minLength={6}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Query Title"
            className="emailInput"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <input
          type="text"
          placeholder="Your Query!"
          className="queryInput"
          onChange={(e) => setQuery(e.target.value)}
          minLength={10}
        />
        <div className="btnPos">
          <button type="submit" className="cBtn">
            Send Query
          </button>
        </div>
        {error && (
          <p className="contactErr">Something went Wrong! Please try again.</p>
        )}
      </form>
    </div>
  );
};

export default Contact;
