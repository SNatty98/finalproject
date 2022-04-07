import axios from "axios";
import { useState, useEffect } from "react";
import Instructions from "../../components/instructions/Instructions";

export default function InstructionPage() {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const res = await axios.get("http://localhost:5000/api/messages");
      setMessage(res.data);
    };
    fetchMessages();
  }, []);

  return (
    <>
      <div className="infirstSection">
        <h1 className="INheader">The Story So Far...</h1>
      </div>
      <Instructions message={message} />
    </>
  );
}
