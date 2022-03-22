import "./contact.css";

const Contact = () => {
  const admin = true;
  return (
    <div className="contact">
      <div className="cFirstSection">
        <h1 className="cHeader">Let Us Know What You Think!</h1>
      </div>
      <div className="cSecondSection">
        {admin ? (
          <h2>
            As a teacher your advice is really important to the development of
            the website, be sure to give us any feedback!
          </h2>
        ) : (
          ""
        )}
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
