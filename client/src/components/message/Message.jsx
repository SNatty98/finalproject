import "./message.css";

export default function Message({ message }) {
  return (
    <div className="INpage">
      <div className="INsecondSection">
        <p className="INsmHeader">{message.title}</p>
        <p className="INtext">{message.info}</p>
        <p className="INtext">From: {message.username}</p>
        <p className="INtext">
          Set For: {message.setFor}
        </p>
      </div>
    </div>
  );
}
