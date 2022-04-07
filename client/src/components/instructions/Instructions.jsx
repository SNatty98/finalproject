import "./instructions.css";
import Message from "../message/Message";

export default function Instructions({ message }) {
  return (
    <>
      {message.map((m) => (
        <Message message={m}/>
      ))}
    </>
  );
};

