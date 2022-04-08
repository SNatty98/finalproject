import "./contact.css";

const Contact = () => {

  return (
    <div className="contact">
      <div className="cFirstSection">
        <h1 className="cHeader">Let Us Know What You Think!</h1>
      </div>
      <div className="cSecondSection">
        <input type="text" placeholder="Email Address" className="emailInput" />
        <input type="text" placeholder="Query Title" className="titleInput" />
        <input type="text" placeholder="Your Query!" className="queryInput" />
        <div className="btnPos">
          <button className="cBtn">Send Query</button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
